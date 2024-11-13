function wishlist() {

    const favoriteIcon = document.querySelectorAll('.wishlist');
    
    for (let item of favoriteIcon)

        item.onclick = function () {
            item.classList.toggle('wishlist_active');
        }
        // item.addEventListener('click', function () {
        //     item.classList.toggle('wishlist_active');
        // }); --alternative--
};

export default wishlist;