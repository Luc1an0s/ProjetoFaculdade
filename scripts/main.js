
const imgMain = document.querySelector('.img-main img');


let position = 0;
let direction = 1; 

function jump() {
    position += direction * 2; 
    
    
    if (position > 20) direction = -1; 
    if (position < 0) direction = 1;  
    
    imgMain.style.transform = `translateY(-${position}px)`;
}

setInterval(jump, 160);

let currentIndex = 0;

ateX(${offset}%)`;
}function navigateTraining(direction) {
    const carousel = document.querySelector('.training-carousel');
    const items = document.querySelectorAll('.training-item');
    const totalItems = items.length;

    
    currentIndex += direction;

    
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    
    const offset = -currentIndex * 100;
    carousel.style.transform = `transl