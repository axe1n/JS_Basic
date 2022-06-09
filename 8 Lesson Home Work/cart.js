'use strict';

// Реализовано появление блока корзины по клику на иконку корзины
const cartIconEl = document.querySelector('.cartIcon');
const cartContentsEl = document.querySelector('.cartContents');
cartIconEl.addEventListener('click', event => {
    cartContentsEl.classList.toggle('hidden');
});

const featuredItemsEl = document.querySelector('.featuredItems');
let cartCounter = 1;
let itemQty = 1;
let totalAll = 0;

// Функция считает количество товаров одного типа добавленных в корзину
function counter(count) {
    return ++count;
}

// Функция считает общую стоимость всех товаров в корзине
function totalPrice(price) {
    return totalAll + +price;
}


featuredItemsEl.addEventListener('click', event => {
    let cart = {};
    const addToCart = event.target;

    // Если кликают не по кнопке добавить товар - ничего не происходит.
    const cartCounterEl = document.querySelector('.cartCounter');
    if (!addToCart.classList.contains('addToCart')) {
        return;
    }

    // Если добавили какой-то товар в корзину - плявляется значок с количеством
    // товаров в корзине
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

    // Если в корзине такого товара ещё нет, то добавляется  имя, кол-во и цена.
    // Если товар есть, то изменяется только кол-во. 
    // При первом добавлении Итого просто копирует цену, затем путем 
    // перемножения кол-ва товаров на цену.
    // Общая цена рассчитывается прибавлением цены добавляемого товара каждый
    // раз, когда товар добавляют в корзину.
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
