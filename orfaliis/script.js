// =====================
// زر Add to Cart
// =====================
const buttons = document.querySelectorAll(".add-to-cart-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.parentElement;
    const title = card.querySelector("h3").textContent;
    const desc = card.querySelector("p").textContent;
    const img = card.querySelector("img").src;

    const product = {
      title,
      desc,
      img,
    };

    // نحفظ المنتج في localStorage
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push(product);
    localStorage.setItem("cart", JSON.stringify(cartItems));

    // رسالة نجاح
    btn.textContent = "✅ تمت الإضافة!";
    setTimeout(() => {
      btn.textContent = "Add to Cart";
    }, 2000);
  });
});