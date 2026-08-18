const hamberger = document.querySelector('.hamberger');
const menu = document.querySelector('.menu');

hamberger.addEventListener("click", () => {
    menu.classList.toggle('active')
})


function updateCounter(targetValue){
    const countElement = document.querySelector('.count_numbers');
    const duration = 3000;
    const startTime = performance.now();
    const startValue = 0;

    function animate(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeOut = progress * (2 - progress);
        const currentValue = Math.floor(easeOut * (targetValue - startValue) + startValue);
        countElement.textContent = currentValue;

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    requestAnimationFrame(animate);

}
window.addEventListener('DOMContentLoaded', () => {
    updateCounter(1000);
});
