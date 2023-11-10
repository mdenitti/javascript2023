let order = {
    Bread: 0,
    Meat: 0,
    Sauce: 0,
    Salad: 0
};


function orderItems(product) {
    if (product == 'bread') {
        order.Bread = order.Bread + 4;
      
    }
    if (product == 'meat') {
        order.Meat = order.Meat + 5;
      
    }
    if (product == 'sauce') {
        order.Sauce = order.Sauce + 2;
       
    }
    if (product == 'salad') {
        order.Salad = order.Salad + 2;
       
    }
    displayItems(); 
}

function displayItems () {
    let totalItems=0;
    itemView = document.getElementById('items');
    totalView = document.getElementById('eur');

    // Clear the current items before displaying the updated list
    itemView.innerHTML = '';

    for (key in order) {
        console.log(key, order[key]);
        if (!order[key] == 0) {
            itemView.innerHTML += '<li class="detailslist">' + key + ' : ' + order[key] + ' EUR </li>';
        }



        totalItems = totalItems + order[key];
    }
    totalView.innerHTML = totalItems + ' EUR';
}

displayItems();
