'use strict';

const cartIconEl = document.querySelector('.cartIcon');
const cartContentsEl = document.querySelector('.cartContents');
cartIconEl.addEventListener('click', event => {
    cartContentsEl.classList.toggle('hidden');
});


let cartCounter = 1;

const featuredItemsEl = document.querySelector('.featuredItems');

featuredItemsEl.addEventListener('click', event => {
    let cart = {};
    const addToCart = event.target;
    const cartCounterEl = document.querySelector('.cartCounter');
    if (!addToCart.classList.contains('addToCart')) {
        return;
    }

    cartCounterEl.innerHTML = cartCounter++;
    if (!cartCounterEl.hasOwnProperty('visible')) cartCounterEl.style.visibility = 'visible';

    cart = event.target.closest('.featuredItem').dataset;

    console.log(cart);
});
