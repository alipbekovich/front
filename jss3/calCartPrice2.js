function calCartPrice() {
    const cartItems = document.querySelectorAll('.product-port');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-card-delivery]');

    let totalPrice = 0;

    cartItems.forEach(function (item) {
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        totalPrice += currentPrice ;

    })

    totalPriceEl.innerText = totalPrice-20330;

    if(totalPrice >= 22330){
        deliveryCost.innerText = 'бесплатно';
    }else {
        deliveryCost.innerText = '2000 tg';
        totalPriceEl.innerText = totalPrice-18330;
    }


    
}