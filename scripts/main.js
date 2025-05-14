// Seleciona o elemento com a classe img-main
const imgMain = document.querySelector('.img-main img');

// Define a posição inicial e a direção do movimento
let position = 0;
let direction = 1; // 1 para subir, -1 para descer

// Função para animar o "pulo"
function jump() {
    position += direction * 2; // Ajusta a posição (2px por vez para suavidade)
    
    // Inverte a direção ao atingir o limite
    if (position > 20) direction = -1; // Limite superior
    if (position < 0) direction = 1;  // Volta à posição inicial

    // Aplica a transformação no elemento
    imgMain.style.transform = `translateY(-${position}px)`;
}

// Executa a função jump a cada 16ms (~60fps para animação suave)
setInterval(jump, 160);

let currentIndex = 0;

function navigateTraining(direction) {
    const carousel = document.querySelector('.training-carousel');
    const items = document.querySelectorAll('.training-item');
    const totalItems = items.length;

    // Atualiza o índice atual
    currentIndex += direction;

    // Garante que o índice fique dentro dos limites
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    // Move o carrossel
    const offset = -currentIndex * 100; // Cada item ocupa 100% da largura
    carousel.style.transform = `translateX(${offset}%)`;
}