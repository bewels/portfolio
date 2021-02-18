function burger () {
    const burger = document.querySelector('.burger-block'),
          burgerMenu = document.querySelector('.burger-menu');

    burger.addEventListener('click', () => {
        burgerMenu.classList.toggle('active-burger');
    });
}

export default burger;