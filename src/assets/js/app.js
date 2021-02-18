import verticalSlider from './scripts/vertical-slider';
import slider from './scripts/slider';
import burger from './scripts/burger-menu';

window.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('preloader-nactive');
    }, 1000);

    verticalSlider();
    slider();
    burger();
})