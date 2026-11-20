function getCategoryTemplate(category) {
    return `
    <div class="categoryHeader">
        <img src="${categoryIcons[category]}" alt="">
        <h2>${category}</h2>
    </div>`;
}


function getMealTemplate(meal, priceText, buttonHtml) {
    return `
    <div class="mealCard">
        <img class="mealImage" src="${meal.image}" alt="${meal.name}">
        <div class="mealInfo">
            <div class="mealHead">
                <h3>${meal.name}</h3>
                <span class="mealPrice">${priceText}</span>
            </div>
            <p class="mealDescription">${meal.description}</p>
            ${buttonHtml}
        </div>
    </div>`;
}


function getAddButtonTemplate(index) {
    return `<button class="addButton" onclick="addToBasket(${index})">Add to basket</button>`;
}


function getAddedButtonTemplate(index, amount) {
    return `<button class="addButton added" onclick="addToBasket(${index})">Added ${amount}</button>`;
}


function getBasketTemplate(itemsHtml, subtotalText, deliveryText, totalText) {
    return `
    <h2>Your Basket</h2>
    <div class="basketItems">${itemsHtml}</div>
    <div class="basketSummary">
        <div class="summaryRow"><span>Subtotal</span><span>${subtotalText}</span></div>
        <div class="summaryRow"><span>Delivery fee</span><span>${deliveryText}</span></div>
        <div class="summaryRow summaryTotal"><span>Total</span><span>${totalText}</span></div>
    </div>
    <button class="buyButton" onclick="orderBasket()">Buy now (${totalText})</button>`;
}


function getBasketItemTemplate(item, index, priceText) {
    return `
    <div class="basketItem">
        <p class="basketItemName">${item.amount} x ${item.name}</p>
        <div class="basketItemRow">
            ${getBasketControlsTemplate(item, index)}
            <span>${priceText}</span>
        </div>
    </div>`;
}


function getBasketControlsTemplate(item, index) {
    return `
    <div class="basketItemControls">
        <button class="iconButton" onclick="deleteFromBasket(${index})" aria-label="Gericht entfernen">
            <img src="./assets/icons/trash.png" alt="">
        </button>
        <button class="iconButton" onclick="decreaseAmount(${index})" aria-label="Menge verringern">&minus;</button>
        <span>${item.amount}</span>
        <button class="iconButton" onclick="increaseAmount(${index})" aria-label="Menge erhöhen">+</button>
    </div>`;
}


function getEmptyBasketTemplate() {
    return `
    <h2>Your Basket</h2>
    <p class="basketEmpty">Dein Warenkorb ist noch leer.<br>Füge ein Gericht über "Add to basket" hinzu.</p>`;
}