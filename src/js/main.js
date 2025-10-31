// Estado do Jogo (Game State)
const gameState = {
    player: null,
    currentScene: "inicio",
    enemies: [],
    inventory: [] 
};

// --- Funções de Lógica do Jogo ---

function attack(attacker, target) {
    const damage = Math.max(0, attacker.ataque - target.defesa);
    target.hp -= damage;
    if (target.hp < 0) target.hp = 0;
    
    console.log(`${target.nome} recebeu ${damage} de dano de ${attacker.nome} e agora tem ${target.hp} HP.`);
    updateUI();
}

function heal(character, amount) {
    character.hp += amount;
    console.log(`${character.nome} recuperou ${amount} de HP. Novo HP: ${character.hp}.`);
    updateUI();
}

// --- Funções de Manipulação de Inimigos (Adaptadas do seu código) ---

function getLivingEnemies(enemyList) {
    return enemyList.filter(enemy => enemy.hp > 0);
}

function getTotalEnemyAttack(enemyList) {
    return getLivingEnemies(enemyList).reduce((total, enemy) => total + enemy.ataque, 0);
}

function getEnemyNames(enemyList) {
    return getLivingEnemies(enemyList).map(enemy => enemy.nome);
}


// --- Funções de UI ---

function updateNarrative(text) {
    const narrativeBox = document.getElementById('narrative-box');
    narrativeBox.innerHTML = `<p>${text}</p>`;
}

function clearActions() {
    const actionsBox = document.getElementById('actions-box');
    actionsBox.innerHTML = '';
}

function receiveRewards(...newRewards) {
    gameState.inventory.push(...newRewards);
}

function listRewards() {
    console.log("Inventário atual:", gameState.inventory);

    const inventoryDisplay = document.getElementById('inventory-display');
    inventoryDisplay.innerHTML = `<p><strong>Inventário:</strong> ${gameState.inventory.join(', ')}</p>`;
}

function displayRewardChoices() {
    const rewardScene = story.reward_offering;
    const restScene = story.resting_after_combat;
    updateNarrative(rewardScene.narrative);

    clearActions();
    const actionsBox = document.getElementById('actions-box');

    rewardScene.rewards.forEach(reward => {
        const button = document.createElement('button');
        button.textContent = `Pegar ${reward}`;
        button.classList.add('action-button'); 

        button.addEventListener('click', () => {
            console.log(`Você escolheu: ${reward}`);

            receiveRewards(reward);
            listRewards();
            
            updateNarrative(restScene.narrative);
            clearActions(); // Limpa as opções após a escolha
            
            attack(restScene.enemy, gameState.player);
            displayChoicesForRest(); // Atualiza a narrativa após a escolha
        });
        actionsBox.appendChild(button);
    });
}

// Variável para saber se o jogador está descansando
let isResting = false;
let restInterval = null;

function startResting() {
    if (isResting) return; // Já está descansando

    isResting = true;

    // Verifica se o jogador tem uma Poção de Cura
    if (gameState.inventory.includes("Poção de Cura")) {
        heal(gameState.player, 20);
        console.log("Você usou a Poção de Cura durante o descanso");
    }
    
    // Mensagem após 3 segundos
    setTimeout(() => {
        heal(gameState.player, 1);
        displayEventMessage("A brisa fria te acalma… +1 de vida");
    }, 3000);

    // Regenerar HP a cada 5 segundos
    restInterval = setInterval(() => {
        if (gameState.player.hp < 150) {
            heal(gameState.player, 1);
        } 
    }, 5000);
}

function displayEventMessage(message) {
    const eventMessageDiv = document.getElementById('event-message');
    eventMessageDiv.innerHTML = `<p>${message}</p>`;
}

function stopResting() {
    clearInterval(restInterval);

    isResting = false;
    updateNarrative("Seu descanso foi interrempido. Agora você está pronto para continuar a aventura!");
    updateUI();
}

function displayChoicesForRest() {
    const restScene = story.resting_after_combat;
    clearActions();

    const actionsBox = document.getElementById('actions-box');
    
    restScene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.classList.add('action-button');

        button.addEventListener('click', () => {
            if (choice.action === 'descansar') {
                startResting();
            } else if (choice.action === "interromperDescanso") {
                stopResting();
                clearActions();
                displayEventMessage(""); // Limpa a mensagem de evento
            }
        })
        actionsBox.appendChild(button);
    })
}

function updateUI() {
    if (!gameState.player) return;

    const playerStatus = document.getElementById('player-status');
    const { nome, classe, hp, mana, ataque, defesa } = gameState.player;

    playerStatus.innerHTML = `
        <h3>${nome}</h3>
        <br>
        <p><strong>Classe:</strong> ${classe}</p>
        <p><strong>HP:</strong> ${hp}</p>
        <p><strong>Mana:</strong> ${mana}</p>
        <p><strong>Ataque:</strong> ${ataque}</p>
        <p><strong>Defesa:</strong> ${defesa}</p>
    `;
}

// --- Inicialização do Jogo ---

document.addEventListener('DOMContentLoaded', () => {
    gameState.player = characters.kael; 
    
    console.log("Jogo iniciado!");
    updateUI();
    displayRewardChoices(); // Chama a função para exibir a narrativa e as escolhas
});