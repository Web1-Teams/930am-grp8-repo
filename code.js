
const addToCartButton = document.querySelector('.add-to-cart');

addToCartButton.addEventListener('click', function () {
    
    const quantityInput = document.querySelector('.quantity-input');
    const quantity = parseInt(quantityInput.value);

    if (quantity > 0) {
        alert(`تمت إضافة ${quantity} من Apple MagSafe Powerbank إلى السلة!`);
    } else {
        
        alert('يرجى إدخال كمية صحيحة.');
    }
});
