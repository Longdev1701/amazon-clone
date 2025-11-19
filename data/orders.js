export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order){
    orders.unshift(order);
    saveToStorage();
}

export function getOrder(orderId){
    return orders.find(order => order.id === orderId);
}

export function getProductList(order){
    return order.products;
}
function saveToStorage(){
    localStorage.setItem('orders',JSON.stringify(orders));
}

