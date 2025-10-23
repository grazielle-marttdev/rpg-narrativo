const characters = {
    "alaric": {
        nome: "Alaric, o Errante",
        classe: "EspadaChim",
        hp: 120,
        mana: 40,
        ataque: 18,
        defesa: 12,
    },
    "kael": {
        nome: "Kael Ardenthal",
        classe: "Mago Guerreiro (Especialização: Gelo e Transmutação)",
        hp: 95,
        mana: 120,
        ataque: 15,
        defesa: 10,
    }
};

const enemies = [
    { nome: "Lobo das Sombras", hp: 40, ataque: 10, defesa: 5 },
    { nome: "Goblin Batedor", hp: 30, ataque: 8, defesa: 3 },
    { nome: "Lyra, a Arqueira Sombria", hp: 100, ataque: 22, defesa: 8 },
    { nome: "Tharok, o Guardião de Pedra", hp: 150, ataque: 15, defesa: 20 },
    { nome: "Seraphine, a Sábia", hp: 80, ataque: 10, defesa: 5 },
    { nome: "Borin, o Guardião", hp: 150, ataque: 15, defesa: 18 }
];

const story = {
    "inicio": {
        narrative: "Você acorda em uma clareira escura, com a cabeça latejando. A única luz vem de uma fresta na copa das árvores. O que você faz?",
        choices: [
            { text: "Investigar a clareira", action: "investigarClareira" },
            { text: "Gritar por ajuda", action: "gritarAjuda" }
        ]
    },
    "reward_offering": {
        narrative: "A aventura começa aqui... Você se encontra em uma encruzilhada sombria, a floresta densa à sua frente e um caminho de pedras desgastadas à sua direita. De repente, uma figura encapuzada surge das sombras, oferecendo-lhe uma escolha por ter chegado tão longe. 'Escolha sabiamente, viajante, pois estas recompensas moldarão seu destino.'<br><br>As recompensas disponíveis são:",
        rewards: ["Poção de Cura", "Amuleto da Sorte", "Pergaminho Antigo"]
    }
}
