import { getProduct, loadProductsFetch } from "../data/products.js";
import { getOrder,getProductList } from "../data/orders.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const url = new URL(window.location.href);
const orderId = url.searchParams.get('orderId');
const productId = url.searchParams.get('productId');

async function renderTrackingPage(){
    await loadProductsFetch();

    const product = getProduct(productId);
    const order = getOrder(orderId);
    const productList = getProductList(order);

    let productInfo;
    productList.forEach((product) => {
        if(product.productId === productId)
        {
            productInfo = product;
        }
    });

    console.log(productInfo);
    
    console.log(order);

    document.querySelector('.js-order-tracking')
        .innerHTML = `
            <a class="back-to-orders-link link-primary" href="orders.html">
            View all orders
            </a>

            <div class="delivery-date">
            Arriving on ${dayjs(productInfo.estimatedDeliveryTime).format('MMMM D')}
            </div>

            <div class="product-info">
            ${product.name}
            </div>

            <div class="product-info">
            Quantity: ${productInfo.quantity}
            </div>

            <img class="product-image" src="${product.image}">

            <div class="progress-labels-container">
            <div class="progress-label">
                Preparing
            </div>
            <div class="progress-label current-status">
                Shipped
            </div>
            <div class="progress-label">
                Delivered
            </div>
            </div>

            <div class="progress-bar-container">
            <div class="progress-bar"></div>
            </div>
        `;
}

renderTrackingPage();
