/*

Semana 3 – Sistema de inimigos e filtros

Conceitos: Arrays, Filter, Map, Reduce
Objetivo: Gerenciar inimigos em batalha.

Crie um array de inimigos (nome, HP, ataque).

Função que retorna inimigos vivos (filter).

Função que calcula o ataque total dos inimigos (reduce).

Função que retorna apenas nomes dos inimigos (map).

*/

const inimigos = [
    { nome: "Alaric, o Errante", hp: 120, ataque: 18 },
    { nome: "Kael Ardenthal", hp: 0, ataque: 15 },
    { nome: "Lyra, a Arqueira Sombria", hp: 100, ataque: 22 },
    { nome: "Tharok, o Guardião de Pedra", hp: 150, ataque: 15 },
    { nome: "Seraphine, a Sábia", hp: 0, ataque: 10 },
    { nome: "Borin, o Guardião", hp: 150, ataque: 15 }
]

let inimigosVivos = inimigos.filter(inimigo => {    
    return inimigo.hp > 0;
});

console.log(inimigosVivos);

let ataqueTotalDosInimigos = inimigosVivos.reduce((total, inimigo) => { 
    return total + inimigo.ataque;
}, 0);

console.log('Valor total dos ataques inimigos:', ataqueTotalDosInimigos);

let nomesDosInimigos = inimigosVivos.map(inimigo => {
    return inimigo.nome;
});

console.log(nomesDosInimigos);