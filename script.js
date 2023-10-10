
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnOpen = document.getElementById('btnOpen');
const buttonReturn = document.getElementById('buttonReturn');

const sorteElement = document.getElementById('sorte');
const imagens = [
    'img/sorte.png',
    'img/sorteTwo.png',
    'img/sorteThree.png'
];

// Adiciona eventos de clique aos botões
btnOpen.addEventListener('click', mostrarImagemAleatoria);
buttonReturn.addEventListener('click', abrirOutroBiscoito);

function mostrarImagemAleatoria() {
    
    const indiceAleatorio = Math.floor(Math.random() * imagens.length);
    
    sorteElement.src = imagens[indiceAleatorio];
    
    toggleScreen()
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function abrirOutroBiscoito() {
    toggleScreen()
}


