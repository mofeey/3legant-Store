function promoClose () {
    const promo = document.querySelector('.promo');
    const promoBtnClose = document.querySelector('.promo__btn-close');
    // Nav-padding
    const navDown = document.querySelector('.nav');
    

    promoBtnClose.onclick = function () {
        promo.remove();
        navDown.classList.add('nav_down');
    };
};

export default promoClose;

