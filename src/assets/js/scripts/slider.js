// import { off } from "gulp";

function slider () {
    const slider = document.querySelector('.myskils-slider'),
          sliderWrapper = document.querySelector('.slider-wrapper'),
          carusel = document.querySelector('.myskils-slider-carusel'),
          slides = document.querySelectorAll('.slide'),
          prev = document.querySelector('.prev'),
          next = document.querySelector('.next'),
          width = parseInt(window.getComputedStyle(slider).width),
          showSlideContentBtn = document.querySelector('.show-slide-content'),
          sliderModal = document.querySelector('.slider-modal'),
          cross = document.querySelector('.cross'),
          textContentModal = document.querySelector('.text-content');



    carusel.style.width = `${100 * (slides.length)}%`;
    slides.forEach(item => {
        item.style.width = `${(width)}px`;
    });

    function showModal (text) {
        sliderWrapper.style.overflow = 'hidden';
        sliderModal.style.display = 'flex';
        textContentModal.textContent = text;
    }

    let offset = 0;

    next.addEventListener('click', () => {
        if (offset === -width * (slides.length - 1)){
            offset += width * slides.length;
            carusel.style.transform = `translateX(${offset}px)`;
        }

        offset -= width;
        carusel.style.transform = `translateX(${offset}px)`;

    });
    prev.addEventListener('click', () => {
        if (offset === 0){
            offset -= width * slides.length;
            carusel.style.transform = `translateX(${offset}px)`;
        }

        offset += width;
        carusel.style.transform = `translateX(${offset}px)`;
    });

    showSlideContentBtn.addEventListener('click', () => {
        console.log(1);
        let slideNum = (offset / width) * -1 ;
        showModal(slides[slideNum].textContent)
    });
    cross.addEventListener('click', () => {
        sliderModal.style.display = 'none';
        sliderWrapper.style.overflow = '';
    });

}

export default slider;