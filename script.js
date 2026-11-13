let basket = [];
let deliveryFee = 4.99;


function init() {
    renderMeals();
    renderBasket();
}


function renderAll() {
    renderMeals();
    renderBasket();
}


function renderMeals() {
    let mealsRef = document.getElementById('meals');
    mealsRef.innerHTML = "";
    let currentCategory = "";
    for (let index = 0; index < meals.length; index++) {
        if (meals[index].category !== currentCategory) {
            mealsRef.innerHTML += getCategoryTemplate(meals[index].category);
            currentCategory = meals[index].category;
        }
        let amount = getAmountInBasket(meals[index].name);
        mealsRef.innerHTML += getMealTemplate(meals[index], index, amount);
    }
}


function renderBasket() {
    let basketHtml = getEmptyBasketTemplate();
    if (basket.length > 0) {
        basketHtml = getBasketTemplate(getBasketItemsHtml(), calcSubtotal());
    }
    document.getElementById('basket').innerHTML = basketHtml;
    document.getElementById('basketMobile').innerHTML = basketHtml;
    renderBasketCount();
}


function getBasketItemsHtml() {
    let itemsHtml = "";
    for (let index = 0; index < basket.length; index++) {
        itemsHtml += getBasketItemTemplate(basket[index], index);
    }
    return itemsHtml;
}


function renderBasketCount() {
    let amount = 0;
    for (let index = 0; index < basket.length; index++) {
        amount += basket[index].amount;
    }
    let countRef = document.getElementById('basketCount');
    countRef.innerHTML = amount;
    countRef.classList.toggle('hidden', amount === 0);
}


function getBasketIndex(mealName) {
    for (let index = 0; index < basket.length; index++) {
        if (basket[index].name === mealName) {
            return index;
        }
    }
    return -1;
}


function getAmountInBasket(mealName) {
    let basketIndex = getBasketIndex(mealName);
    if (basketIndex === -1) {
        return 0;
    }
    return basket[basketIndex].amount;
}


function addToBasket(mealIndex) {
    let meal = meals[mealIndex];
    let basketIndex = getBasketIndex(meal.name);
    if (basketIndex === -1) {
        basket.push({ name: meal.name, price: meal.price, amount: 1 });
    } else {
        basket[basketIndex].amount++;
    }
    renderAll();
}


function increaseAmount(basketIndex) {
    basket[basketIndex].amount++;
    renderAll();
}


function decreaseAmount(basketIndex) {
    basket[basketIndex].amount--;
    if (basket[basketIndex].amount === 0) {
        basket.splice(basketIndex, 1);
    }
    renderAll();
}


function deleteFromBasket(basketIndex) {
    basket.splice(basketIndex, 1);
    renderAll();
}


function calcSubtotal() {
    let subtotal = 0;
    for (let index = 0; index < basket.length; index++) {
        subtotal += basket[index].price * basket[index].amount;
    }
    return subtotal;
}


function formatPrice(price) {
    return price.toFixed(2).replace(".", ",") + "€";
}


function orderBasket() {
    if (basket.length === 0) {
        return;
    }
    basket = [];
    renderAll();
    closeDialog('basketDialog');
    document.getElementById('orderDialog').showModal();
}


function openBasketDialog() {
    document.getElementById('basketDialog').showModal();
}


function closeDialog(dialogId) {
    document.getElementById(dialogId).close();
}


function closeDialogOnBackdrop(event) {
    if (event.target === event.currentTarget) {
        event.currentTarget.close();
    }
}
