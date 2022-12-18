// Div внутри корзины, в который мы добавляем товары
const cartWrapper =  document.querySelector('.cart-wrapper');

// Отслеживаем клик на странице
window.addEventListener('click', function (event){
	// Проверяем что клик был совершен по кнопке "Добавить в корзину"
	if (event.target.hasAttribute('data-cart')) {
		// Находим карточку с товаром, внутри котрой был совершен клик
		const card = event.target.closest('.product-port');

        const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.item-title').innerText,
			price: card.querySelector('.price__currency').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		};

        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

		// Если товар есть в корзине
		if (itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		} else {
			// Если товара нет в корзине

			// Собранные данные подставим в шаблон для товара в корзине

        const cartItemHTML = `
        <div class="product-port" data-id="${productInfo.id}"> 
        <img class="product-img" src="${productInfo.imgSrc}">
        <div class="product-list">
          <h3 class="item-title">${productInfo.title}</h3>
            <span class="price__currency">${productInfo.price}</span>
            <div class="colss">
                <button data-action="minus">-</button>&nbsp; <div data-counter>${productInfo.counter}</div>&nbsp; <button data-action="plus">+</button>
            </div>
                <!-- // cart-item__details -->

            </div>
        </div>`;

        cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        }
        card.querySelector('[data-counter]').innerText = '1';

        toggleCartStatus();

        calCartPrice();

    }

});
