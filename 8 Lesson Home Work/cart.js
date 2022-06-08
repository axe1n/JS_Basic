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
    if (!cartCounterEl.hasOwnProperty('visible')) {
        cartCounterEl.style.visibility = 'visible';
    }

    cart = event.target.closest('.featuredItem').dataset;

    const itemName = document.querySelector('.itemName');
    const itemQty = document.querySelector('.itemQty');
    const itemPrice = document.querySelector('.itemPrice');





    itemName.insertAdjacentHTML('beforeend', `
    <div class="id${cart.id}">${cart.name}</div>
    `);


    itemQty.insertAdjacentHTML('beforeend', `<div>${cart.id}</div>`);
    itemPrice.insertAdjacentHTML('beforeend', `<div>${cart.price}</div>`);

    console.log(cart);
});
