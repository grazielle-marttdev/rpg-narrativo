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
            
            updateNarrative(`Você pegou a ${reward}.`); // Atualiza a narrativa após a escolha
            clearActions(); // Limpa as opções após a escolha
        });
        actionsBox.appendChild(button);
    });
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