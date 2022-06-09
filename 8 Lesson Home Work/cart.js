'use strict';

const cartIconEl = document.querySelector('.cartIcon');
const cartContentsEl = document.querySelector('.cartContents');
cartIconEl.addEventListener('click', event => {
    cartContentsEl.classList.toggle('hidden');
});

function counter(count) {
    return ++count;
}

function totalPrice(price) {
    return totalAll + +price;
}

let cartCounter = 1;
let itemQty = 1;
let totalAll = 0;

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
    const cartContentsEl = document.querySelector('.cartContents');
    const itemNameEl = document.querySelector('.itemName');
    const itemQtyEl = document.querySelector('.itemQty');
    const itemPriceEl = document.querySelector('.itemPrice');
    const totalEl = document.querySelector('.total');
    const totalAllEl = document.querySelector('.totalAll').querySelector('span');


    if (!cartContentsEl.querySelector(`.qtyId${cart.id}`)) {

        itemQtyEl.insertAdjacentHTML('beforeend', `
        <div class="qtyId${cart.id}">${itemQty}</div>
        `);
        itemNameEl.insertAdjacentHTML('beforeend', `<div>${cart.name}</div>`);
        itemPriceEl.insertAdjacentHTML('beforeend', `<div>${cart.price}</div>`);
        totalEl.insertAdjacentHTML('beforeend', `
        <div class="totalId${cart.id}">${cart.price}</div>
        `);
        totalAllEl
            .innerHTML = `Цена за все товары: ${totalAll = totalPrice(cart.price)}`;
    } else {
        itemQtyEl
            .querySelector(`.qtyId${cart.id}`)
            .innerHTML =
            counter(itemQtyEl.querySelector(`.qtyId${cart.id}`).innerHTML);

        totalEl
            .querySelector(`.totalId${cart.id}`)
            .innerHTML =
            `${itemQtyEl
                .querySelector(`.qtyId${cart.id}`).innerHTML * cart.price}`;
        totalAllEl
            .innerHTML = `Цена за все товары: ${totalAll = totalPrice(cart.price)}`;
    }
});
