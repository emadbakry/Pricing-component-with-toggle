// see result here: https://emadbakry.github.io/Pricing-component-with-toggle

let togglePrice_btn = document.querySelector(".togglePrice__btn");
let prices = document.querySelectorAll(".box .price");
let m_prices = [19.99, 24.99, 39.99];
let year_prices = [199.99, 249.99, 399.99];

let updatePrices = (arr) => {
    for (i in prices) {    
        prices[i].textContent = arr[i];
    }
}

togglePrice_btn.addEventListener('click', () => toggle());
let toggle = () => {
    togglePrice_btn.toggleAttribute('left_placed');
    togglePrice_btn.hasAttribute("left_placed")
        ? updatePrices(year_prices)
        : updatePrices(m_prices);
};

