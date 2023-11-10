let order = {
    Bread: 8,
    Meat: 3,
    Sauce: 2,
    Salad: 1
};

function orderItems(product) {
    if (product = 'bread') {
        order.Bread = order.Bread + 1;
    }
    if (product = 'meat') {
        order.Meat = order.Meat + 1;
    }
    if (product = 'sauce') {
        order.Sauce = order.Sauce + 1;
    }
    if (product = 'salad') {
        order.Salad = order.Salad + 1;
    }
    displayItems();
}

function displayItems () {
    let totalItems=0;
    itemView = document.getElementById('items');
    totalView = document.getElementById('eur');

    for (key in order) {
        console.log(key, order[key]);
        itemView.innerHTML += '<li class="detailslist">' + key + ' : ' + order[key] + ' EUR </li>';
        totalItems = totalItems + order[key];
    }
    totalView.innerHTML = totalItems + ' EUR';
}

displayItems();
