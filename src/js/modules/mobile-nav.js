function mobileNav() {
    const btnOpen = document.querySelector('.mobile-btn-open');
    const btnClose = document.querySelector('.mobile-btn-close');
    const mobileNav = document.querySelector('.mobile-nav');

    btnOpen.onclick = function () {
        mobileNav.classList.add('mobile-nav_open');
    };

    btnClose.onclick = function () {
        mobileNav.classList.remove('mobile-nav_open');
    };
};

export default mobileNav;
