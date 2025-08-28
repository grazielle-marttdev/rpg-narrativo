const formInicio = document.getElementById('form-inicio');
const nomeInput = document.getElementById('nome');
const btnIniciar = document.getElementById('btn-iniciar'); 

const escolhaOrigemInputs =  document.querySelectorAll('input[name="origem"]');
const secaoEscolha = document.getElementById('origem');
const secaoPerfil = document.querySelector('.perfil-personagem');

const perfilTaverna = document.querySelector('.origem-taverna');
const perfilEscadas = document.querySelector('.origem-mil-escadas');
const perfilBiblioteca = document.querySelector('.origem-biblioteca');

let inventario = document.getElementById('itens-inventario');

const btnIniciarNarrativa = document.getElementById('btn-iniciar-narrativa');

const escolhaNarrativaInputs = document.querySelectorAll('input[name="escolha"]');
const secaoNarrativa = document.getElementById('narrativa');
const escolhaPlayer = document.querySelector('.escolha-player');

const ajudarViajante = document.querySelector('.ajudar');
const ignorarViajante = document.querySelector('.ignorar');
const roubarViajante = document.querySelector('.roubar'); 

const secaoStatus = document.querySelector('.status');

btnIniciar.addEventListener('click', function(event) {
    event.preventDefault();

    const nomePersonagem = nomeInput.value.trim();

    if (nomePersonagem) { 
        formInicio.classList.add('esconder'); 

        const main = document.querySelector('main');
        const escolhaOrigem = document.querySelector('.escolha-origem');

        escolhaOrigem.classList.remove('esconder'); 
        main.classList.remove('esconder'); 

        document.querySelectorAll('span.nome-personagem').forEach(span => { 
            span.textContent = nomePersonagem;
        })
    }
})

escolhaOrigemInputs.forEach(input => {
    input.addEventListener('change', function() {
        secaoEscolha.classList.add('esconder');
        secaoPerfil.classList.remove('esconder');

        perfilTaverna.classList.add('esconder');
        perfilEscadas.classList.add('esconder');
        perfilBiblioteca.classList.add('esconder');

        if (this.value === 'taverna-magos') {
            perfilTaverna.classList.remove('esconder');
            inventario.innerHTML = `<p>Colher de Madeira Encantada</p>`;
        } else if (this.value === 'mil-escadas') {
            perfilEscadas.classList.remove('esconder');
            inventario.innerHTML = `<p>Sandálias de Couro Gasto</p>`;
        } else if (this.value === 'biblioteca-esquecida') { 
            perfilBiblioteca.classList.remove('esconder');
            inventario.innerHTML = `<p>Livro em Branco</p>`;
        }
    })
})

btnIniciarNarrativa.addEventListener('click', () => {
    secaoPerfil.classList.add('esconder');
    secaoNarrativa.classList.remove('esconder');
})

escolhaNarrativaInputs.forEach(input => {
    input.addEventListener('change', function() {
        ajudarViajante.classList.add('esconder');
        ignorarViajante.classList.add('esconder');
        roubarViajante.classList.add('esconder');

        if (this.value === 'ajudar-viajante') {
            ajudarViajante.classList.remove('esconder');
            inventario.insertAdjacentHTML('beforeend', `<p>Poção de Cura</p>`);

            secaoNarrativa.classList.add('esconder');
            secaoStatus.classList.remove('esconder');
        } else if (this.value === 'ignorar-viajante') {
            ignorarViajante.classList.remove('esconder');

            secaoNarrativa.classList.add('esconder');
            secaoStatus.classList.remove('esconder');
        } else if (this.value === 'roubar-viajante') {
            roubarViajante.classList.remove('esconder');
            inventario.insertAdjacentHTML('beforeend', `<p>Moedas de Cobre</p>`);

            secaoNarrativa.classList.add('esconder');
            secaoStatus.classList.remove('esconder');
        }
    })
})