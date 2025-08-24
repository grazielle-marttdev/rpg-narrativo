let player = {
    nome: prompt("Bem-vindo(a)! Qual é o nome do seu personagem?"),
    inventario: [],
    vida: 100
};

const origemPersonagem = parseInt(prompt(`
    Escolha a origem do personagem:

    [1] - Taverna dos Magos Atrapalhados
    [2] - Cidade das Mil Escadas
    [3] - A Biblioteca Esquecida
`));  

switch (origemPersonagem) {
    case 1:
        player.inventario.push("Colher de Madeira Encantada");
        alert(`Desde pequeno(a), ${player.nome} viu mais explosões acidentais do que aniversários. Crescer na Taverna dos Magos Atrapalhados significava viver entre feitiços mal lançados e caldeirões transbordando de... mingau brilhante.`);
        break;

    case 2:
        player.inventario.push("Sandálias de Couro Gasto");
        alert(`${player.nome} cresceu em uma cidade construída sobre montanhas. O segredo de sua resistência? Subir escadas. Sempre escadas. Milhares de degraus, dia após dia. Suas pernas eram praticamente armas de guerra.`);
        break;
    
    case 3:
        player.inventario.push("Livro em Branco");
        alert(`Perdido(a) entre prateleiras infinitas, ${player.nome} passou a infância na Biblioteca Esquecida. Alguns livros sussurravam segredos, outros gritavam insultos. O mais estranho de todos estava vazio, mas parecia observá-lo(a).`);
        break;

    default:
        break;
};

const escolha = parseInt(prompt(`
    Durante sua jornada, ${player.nome} encontra um viajante ferido na estrada. O que deseja fazer?
    
    [1] - Ajudar o viajante
    [2] - Ignorar e seguir em frente
    [3] - Roubar o viajante
`));

switch (escolha) {
    case 1:
        alert(`${player.nome} ajudou o viajante e ganhou uma Poção de Cura.`);
        player.inventario.push("Poção de Cura");
        break;

    case 2:
        alert(`${player.nome} seguiu sem olhar para trás... mas algo pareceu observá-lo na escuridão.`);
        break;

    case 3:
        alert(`${player.nome} saqueou o viajante e encontrou algumas moedas.`);
        player.inventario.push("Moedas de Cobre");
        break;

    default:
        break;
}

console.log(player);