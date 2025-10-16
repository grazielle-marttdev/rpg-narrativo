/*
Semana 2 – Personagem e atributos

Conceitos: Objetos, Métodos, this, Desestruturação
Objetivo: Criar o personagem com atributos dinâmicos.

Crie um objeto personagem com nome, classe, HP, mana, ataque, defesa.

Método para exibir os atributos usando desestruturação.

Método para alterar atributos ao receber dano ou usar poção.
*/

const alaric = {
    nome: "Alaric, o Errante",
    classe: "EspadaChim",
    hp: 120,
    mana: 40,
    ataque: 18,
    defesa: 12,
    exibirAtributos: function() {
        let { nome, descricao, classe, hp, mana, ataque, defesa } = this;

        console.log(`
            Exibindo informações do personagem ${nome}:
                
            Descrição: ${descricao}

            Classe: ${classe}
            HP: ${hp}
            Mana: ${mana}
            Ataque: ${ataque}
            Defesa: ${defesa}`);
    },
    atacar: function(alvo) {
        const valorAtaque = this.ataque;
        const valorDefesa = alvo.defesa;

        let dano = valorAtaque - valorDefesa;
        if (dano < 0) dano = 0;

        alvo.hp -= dano;
        if (alvo.hp < 0) alvo.hp = 0;
        
        console.log(`O personagem ${alvo.nome} recebeu ${dano} de dano do personagem ${this.nome}, e agora está com ${alvo.hp} de HP.`);
    },
    curar: function(valor) {
        this.hp += valor;
        console.log(`${this.nome} recuperou ${valor} de HP. Novo HP: ${this.hp}.`);
    }
}

const kael = {
    nome: "Kael Ardenthal",
    classe: "Mago Guerreiro (Especialização: Gelo e Transmutação)",
    hp: 95,
    mana: 120,
    ataque: 15,
    defesa: 10,
    exibirAtributos: function() {
        let { nome, descricao, classe, hp, mana, ataque, defesa } = this;

        console.log(`
            Exibindo informações do personagem ${nome}:
                
            Descrição: ${descricao}

            Classe: ${classe}
            HP: ${hp}
            Mana: ${mana}
            Ataque: ${ataque}
            Defesa: ${defesa}`);
    },
    atacar: function(alvo) {
        const valorAtaque = this.ataque;
        const valorDefesa = alvo.defesa;

        let dano = valorAtaque - valorDefesa;
        if (dano < 0) dano = 0;

        alvo.hp -= dano;
        if (alvo.hp < 0) alvo.hp = 0;
        
        console.log(`O personagem ${alvo.nome} recebeu ${dano} de dano do personagem ${this.nome}, e agora está com ${alvo.hp} de HP.`);
    },
    curar: function(valor) {
        this.hp += valor;
        console.log(`${this.nome} recuperou ${valor} de HP. Novo HP: ${this.hp}.`);
    }
}

// Método para exibir os atributos usando desestruturação
// alaric.exibirAtributos();
// kael.exibirAtributos();

// Método para alterar atributos ao receber dano ou usar poção
// kael.atacar(alaric);
// alaric.exibirAtributos();

// alaric.curar(2);
// alaric.exibirAtributos();