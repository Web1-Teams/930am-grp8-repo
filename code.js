// تحديد زر "إضافة إلى السلة"
const addToCartButton = document.querySelector('.add-to-cart');

// التعامل مع النقر على الزر
addToCartButton.addEventListener('click', function () {
    // تحديد الكمية المدخلة من المستخدم
    const quantityInput = document.querySelector('.quantity-input');
    const quantity = parseInt(quantityInput.value);

    // التحقق من الكمية المدخلة
    if (quantity > 0) {
        // إنشاء رسالة تأكيد
        alert(`تمت إضافة ${quantity} من Apple MagSafe Powerbank إلى السلة!`);
    } else {
        // رسالة خطأ في حالة إدخال كمية غير صحيحة
        alert('يرجى إدخال كمية صحيحة.');
    }
});
