document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", ({ target }) => {
            const productContainer = target.closest(".product-container");

            if (!productContainer) {
                console.error("Product container not found!");
                return;
            }

            const quantityInput = productContainer.querySelector("[id='quantity']");
            const productName = productContainer.querySelector(".product-header h1").textContent;

            if (!quantityInput || !productName) {
                console.error("Quantity input or product name not found!");
                return;
            }

            const quantity = parseInt(quantityInput.value);

            if (quantity > 0) {
                alert(`${quantity} ${productName} added to cart!`);
                console.log(`Added ${quantity} ${productName} to the cart.`);
            } else {
                alert("Please select a valid quantity!");
            }
        });
    });
});
