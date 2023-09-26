// Check if session storage is available
if (typeof sessionStorage === 'undefined') {
    alert('Sorry, your browser does not support Session storage. Try again with a better one.');
} else {
    // Array of available items
    const availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];

    // Function to parse the cart object from Session Storage
    function getCartFromStorage() {
        const cartString = sessionStorage.getItem('cart');
        return cartString ? JSON.parse(cartString) : {};
    }

    // Function to add an item to the cart
    function addItemToCart(item) {
        const cart = getCartFromStorage();
        cart[item] = (cart[item] || 0) + 1;
        sessionStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    }

    // Function to remove an item from the cart
    function removeItemFromCart(item) {
        const cart = getCartFromStorage();
        if (cart[item]) {
            delete cart[item];
            sessionStorage.setItem('cart', JSON.stringify(cart));
            displayCart();
        }
    }

    // Function to clear the entire cart
    function clearCart() {
        sessionStorage.removeItem('cart');
        displayCart();
    }

    // Function to create the store with available items
    function createStore() {
        const storeDiv = document.getElementById('store');
        const h2 = document.createElement('h2');
        h2.textContent = 'Available products:';
        storeDiv.appendChild(h2);

        const ul = document.createElement('ul');
        availableItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;

            // Add a click event to add items to the cart
            li.addEventListener('click', () => {
                addItemToCart(item);
            });

            ul.appendChild(li);
        });

        storeDiv.appendChild(ul);
    }

    // Function to display the cart
    function displayCart() {
        const cartDiv = document.getElementById('cart');
        cartDiv.innerHTML = ''; // Clear previous content

        const h2 = document.createElement('h2');
        h2.textContent = 'Your cart:';
        cartDiv.appendChild(h2);

        const div = document.createElement('div');
        cartDiv.appendChild(div);

        const cart = getCartFromStorage();

        if (Object.keys(cart).length === 0) {
            const emptyCart = document.createElement('p');
            emptyCart.textContent = 'Your cart is empty';
            div.appendChild(emptyCart);
        } else {
            const ul = document.createElement('ul');
            for (const item in cart) {
                const li = document.createElement('li');
                li.textContent = `${item} x ${cart[item]}`;
                
                // Add a remove button
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.addEventListener('click', () => {
                    removeItemFromCart(item);
                });

                li.appendChild(removeButton);
                ul.appendChild(li);
            }

            div.appendChild(ul);

            // Add a clear cart button
            const clearCartButton = document.createElement('button');
            clearCartButton.textContent = 'Clear my cart';
            clearCartButton.addEventListener('click', clearCart);
            div.appendChild(clearCartButton);
        }
    }

    // Call the createStore and displayCart functions
    createStore();
    displayCart();
}
