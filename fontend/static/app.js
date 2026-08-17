const hamberger = document.querySelector('.hamberger');
const menu = document.querySelector('.menu');

hamberger.addEventListener("click", () => {
    menu.classList.toggle('active')
})


function updateCounter(targetValue){
    const countElement = document.querySelector('.count_numbers');

    countElement.computedStyleMap.setProperty('--target', targetValue);

    countElement.computedStyleMap.animation = 'none';
    countElement.offsetHeight;
    countElement.style.animation = 'countUp 2s ease-out forwards';

}
window.addEventListener('DOMContentLoaded', () => {
    updateCounter(1000);
});