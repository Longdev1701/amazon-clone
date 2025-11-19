import {cart,calculateCartQuantity,addToCart} from '../data/cart.js';
import {products,loadProducts, loadProductsFetch} from '../data/products.js';
import { formatCurrency } from './utils/money.js';

loadProducts(renderProductsGrid);

function renderProductsGrid(){

	let productsHTML = '';

	const url = new URL(window.location.href);
	const search = url.searchParams.get('search') ? url.searchParams.get('search') : '';

	

	let filteredProducts = products;

	if(search){
		filteredProducts = products.filter((product) => {
			return product.name.toLowerCase().includes(search) || product.keywords.includes(search);
		});
	}

	filteredProducts.forEach((product) => {
		productsHTML += `
			<div class="product-container">
			<div class="product-image-container">
				<img class="product-image"
					src="${product.image}">
			</div>

			<div class="product-name limit-text-to-2-lines">
				${product.name}
			</div>

			<div class="product-rating-container">
				<img class="product-rating-stars"
					src=${product.getStarUrl()}>
				<div class="product-rating-count link-primary">
					${product.rating.count}
				</div>
			</div>

			<div class="product-price">
				${product.getPrice()}
			</div>

			<div class="product-quantity-container">
				<select class = "js-quantity-selector-${product.id}">
					<option selected value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
				</select>
			</div>

			${product.extraInfoHTML()}

			<div class="product-spacer"></div>

			<div class="added-to-cart js-added-to-cart-${product.id}">
				<img src="images/icons/checkmark.png">
				Added
			</div>

			<button class="add-to-cart-button button-primary js-add-to-cart-button"
			data-product-id="${product.id}">
				Add to Cart
			</button>
			</div>
		`;
	});

	document.querySelector('.js-product-grid').innerHTML = productsHTML;



	const addedMessageTimeouts = {};

	updateQuantity();

	function updateQuantity(){
		document.querySelector('.js-cart-quantity')
			.innerHTML = calculateCartQuantity(cart);
		
	}

	document.querySelectorAll('.js-add-to-cart-button')
		.forEach((button) => {
			button.addEventListener('click',() =>{
				//const productId = button.dataset.productId;
				const {productId} = button.dataset;

				addToCart(productId);
				updateQuantity();

				const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);

				addedMessage.classList.add('added-to-cart-visible');
				
				const previousTimeoutId = addedMessageTimeouts[productId];
				
				if (previousTimeoutId) {
					clearTimeout(previousTimeoutId);
				}

				const timeoutId = setTimeout(() => {
				addedMessage.classList.remove('added-to-cart-visible');
				}, 2000);

				addedMessageTimeouts[productId] = timeoutId;

			});
		});
}

function search()
{
	document.querySelector('.js-search-bar')
		.addEventListener('keydown',(event) => {
			if(event.key === 'Enter'){
				const searchRequest = document.querySelector('.js-search-bar').value;

				window.location.href = `index.html?search=${searchRequest}`;
			}
		})
		
	document.querySelector('.js-search-button')
		.addEventListener('click',() => {
			const searchRequest = document.querySelector('.js-search-bar').value;

			window.location.href = `index.html?search=${searchRequest}`;
		});
	}

search();

