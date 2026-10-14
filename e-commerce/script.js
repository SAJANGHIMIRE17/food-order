
/* ========================================
   FOODIEHUB - SHOPPING CART
   ======================================== */

document.addEventListener("DOMContentLoaded", function () {
    // Get the navbar cart button and all food Add buttons.
    const cartButton = document.getElementById("cart-button");
    const cartCount = document.getElementById("cart-count");
    const addButtons = document.querySelectorAll(".add-button");

    // Stop safely if the required HTML elements are missing.
    if (!cartButton || !cartCount) {
        console.error(
            "Cart button or cart count is missing from index.html."
        );
        return;
    }

    // Store cart items while the page is open.
    const cart = {};

    // Create the cart popup dynamically.
    const cartOverlay = document.createElement("div");
    cartOverlay.className = "cart-overlay";
    cartOverlay.hidden = true;

    cartOverlay.innerHTML = `
        <section
            class="cart-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
        >
            <div class="cart-panel-header">
                <h2 id="cart-title">Your Cart</h2>

                <button
                    type="button"
                    class="cart-close"
                    id="cart-close"
                    aria-label="Close cart"
                >&times;</button>
            </div>

            <div id="cart-items-list"></div>

            <div class="cart-total-row">
                <span>Total</span>
                <span>Rs. <span id="cart-total">0</span></span>
            </div>

            <button
                type="button"
                class="cart-clear-button"
                id="clear-cart"
            >
                Clear Cart
            </button>
        </section>
    `;

    document.body.appendChild(cartOverlay);

    // Get elements inside the popup.
    const cartItemsList =
        cartOverlay.querySelector("#cart-items-list");

    const cartTotalDisplay =
        cartOverlay.querySelector("#cart-total");

    const closeCartButton =
        cartOverlay.querySelector("#cart-close");

    const clearCartButton =
        cartOverlay.querySelector("#clear-cart");

    // Calculate the total quantity of all products.
    function getTotalItems() {
        return Object.values(cart).reduce(function (total, item) {
            return total + item.quantity;
        }, 0);
    }

    // Calculate the total cost.
    function getTotalPrice() {
        return Object.values(cart).reduce(function (total, item) {
            return total + item.price * item.quantity;
        }, 0);
    }

    // Escape text before inserting it into HTML.
    function escapeHTML(value) {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return String(value).replace(/[&<>"']/g, function (character) {
            return entities[character];
        });
    }

    // Update the number displayed beside Cart.
    function updateCartBadge() {
        const totalItems = getTotalItems();

        cartCount.textContent = totalItems;

        cartButton.setAttribute(
            "aria-label",
            `Shopping cart, ${totalItems} items`
        );
    }

    // Display cart items and update the total.
    function renderCart() {
        const productNames = Object.keys(cart);

        if (productNames.length === 0) {
            cartItemsList.innerHTML = `
                <p class="cart-empty">
                    Your cart is empty. Add some delicious food!
                </p>
            `;
        } else {
            cartItemsList.innerHTML = productNames.map(function (name) {
                const item = cart[name];
                const safeName = escapeHTML(name);

                return `
                    <div class="cart-item">
                        <div>
                            <p class="cart-item-name">
                                ${safeName}
                            </p>

                            <p class="cart-item-price">
                                Rs. ${item.price} each
                            </p>

                            <div class="cart-item-controls">
                                <button
                                    type="button"
                                    class="cart-quantity-button"
                                    data-action="decrease"
                                    data-name="${safeName}"
                                    aria-label="Decrease ${safeName} quantity"
                                >−</button>

                                <span>${item.quantity}</span>

                                <button
                                    type="button"
                                    class="cart-quantity-button"
                                    data-action="increase"
                                    data-name="${safeName}"
                                    aria-label="Increase ${safeName} quantity"
                                >+</button>
                            </div>
                        </div>

                        <div>
                            <p class="cart-item-name">
                                Rs. ${item.price * item.quantity}
                            </p>

                            <button
                                type="button"
                                class="cart-remove"
                                data-action="remove"
                                data-name="${safeName}"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                `;
            }).join("");
        }

        cartTotalDisplay.textContent = getTotalPrice();
        updateCartBadge();
    }

    // Open the cart popup.
    function openCart() {
        cartOverlay.hidden = false;
        renderCart();
        closeCartButton.focus();
    }

    // Close the cart popup.
    function closeCart() {
        cartOverlay.hidden = true;
        cartButton.focus();
    }

    // Add food products to the cart.
    addButtons.forEach(function (button) {
        const originalLabel = button.textContent.trim() || "Add +";

        button.addEventListener("click", function () {
            const foodCard = button.closest(".food-card");

            if (!foodCard) {
                console.error("Food card was not found.");
                return;
            }

            const nameElement = foodCard.querySelector("h3");
            const priceElement = foodCard.querySelector(".price");

            if (!nameElement || !priceElement) {
                console.error("Food name or price is missing.");
                return;
            }

            const name = nameElement.textContent.trim();

            // FIX: Keep digits only, so Rs. 450 becomes 450.
            const price = parseInt(
                priceElement.textContent.replace(/[^\d]/g, ""),
                10
            );

            if (!name || !Number.isFinite(price) || price < 0) {
                console.error("Invalid food name or price.");
                return;
            }

            // Add a new product or increase its quantity.
            if (!cart[name]) {
                cart[name] = {
                    price: price,
                    quantity: 0
                };
            }

            cart[name].quantity += 1;

            // Update the cart badge and popup.
            updateCartBadge();

            if (!cartOverlay.hidden) {
                renderCart();
            }

            // Give the user visual feedback.
            button.textContent = "Added ✓";
            button.disabled = true;

            setTimeout(function () {
                button.textContent = originalLabel;
                button.disabled = false;
            }, 800);
        });
    });

    // Open the cart from the navbar.
    cartButton.addEventListener("click", openCart);

    // Close using the X button.
    closeCartButton.addEventListener("click", closeCart);

    // Close when the dark background is clicked.
    cartOverlay.addEventListener("click", function (event) {
        if (event.target === cartOverlay) {
            closeCart();
        }
    });

    // Close with the Escape key.
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && !cartOverlay.hidden) {
            closeCart();
        }
    });

    // Handle increasing, decreasing, and removing products.
    cartItemsList.addEventListener("click", function (event) {
        const button = event.target.closest("button[data-action]");

        if (!button) {
            return;
        }

        const action = button.dataset.action;
        const name = button.dataset.name;

        if (!Object.prototype.hasOwnProperty.call(cart, name)) {
            return;
        }

        if (action === "increase") {
            cart[name].quantity += 1;
        } else if (action === "decrease") {
            cart[name].quantity -= 1;

            if (cart[name].quantity <= 0) {
                delete cart[name];
            }
        } else if (action === "remove") {
            delete cart[name];
        }

        renderCart();
    });

    // Remove all products from the cart.
    clearCartButton.addEventListener("click", function () {
        Object.keys(cart).forEach(function (name) {
            delete cart[name];
        });

        renderCart();
    });

    // Initialise the cart badge and empty-cart message.
    renderCart();
});
