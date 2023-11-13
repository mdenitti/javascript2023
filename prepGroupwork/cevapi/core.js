let order = {
    Bread: {
        quantity: 0,
        price: 4
    },
    Meat: {
        quantity: 0,
        price: 5
    },
    Sauce: {
        quantity: 0,
        price: 2
    },
    Salad: {
        quantity: 0,
        price: 2
    }
};

function orderItems(product) {
    if (product == 'bread') {
        order.Bread.quantity += 1;
    }
    if (product == 'meat') {
        order.Meat.quantity += 1;
    }
    if (product == 'sauce') {
        order.Sauce.quantity += 1;
    }
    if (product == 'salad') {
        order.Salad.quantity += 1;
    }
    displayItems();
}

function displayItems() {
    let totalItems = 0;
    let itemView = document.getElementById('items');
    let totalView = document.getElementById('eur');

    // Clear the current items before displaying the updated list
    itemView.innerHTML = '';

    for (let key in order) {
        console.log(key, order[key].quantity);
        if (order[key].quantity !== 0) {
            itemView.innerHTML += '<li class="detailslist">' + order[key].quantity + 'x ' + key + ' : ' + order[key].quantity * order[key].price + ' EUR </li>';
        }
        totalItems += order[key].quantity * order[key].price;
    }
    totalView.innerHTML = totalItems + ' EUR';
}

// Display initial items
displayItems();
