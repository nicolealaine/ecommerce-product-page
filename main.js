document.addEventListener("DOMContentLoaded", function (event) {
  const increment = document.querySelector(".plus");
  const decrement = document.querySelector(".minus");
  const numToAddDisplay = document.querySelector(".num-to-add");
  const itemName = document.querySelector(".product-name").innerHTML;
  const itemPrice = document.querySelector(".current-price").innerHTML;
  const cartEmpty = document.querySelector(".cart-empty");
  const cartContains = document.querySelector(".cart-contains");
  const cartIcon = document.querySelector(".cart");
  const cartPopup = document.querySelector(".cart-popup");
  var windowWidth = document.documentElement.clientWidth || window.innerWidth;

  var count = 0;

  cartIcon.addEventListener("click", () => {
    if (windowWidth >= 1050) {
      if (cartPopup.classList.contains("invisible")) {
        cartPopup.classList.remove("invisible");
      } else {
        cartPopup.classList.add("invisible");
      }
    }
  });

  class CartItem {
    constructor(name, qty, basePrice) {
      this.name = name;
      this.qty = qty;
      this.basePrice = basePrice;
    }
    totPrice() {
      return this.qty * this.basePrice;
    }
  }
  function addItemClickHandler() {
    if (count > 0) {
      let sneaks = new CartItem(itemName, count, itemPrice);
      cartEmpty.style.display = "none";
      cartContains.style.display = "grid";
      numToAddDisplay.innerHTML = 0;
      populateCart(sneaks);
      populateMiniCart();
      count = 0;
    }
  }

  function deleteItemClickHandler() {
    let sneaks = null;
    cartEmpty.style.display = "inline-block";
    cartContains.style.display = "none";
    count = 0;
    populateMiniCart();
  }

  function populateCart(item) {
    const disItemName = document.querySelector(".display-item-name");
    const eachPrice = document.querySelector(".each-price");
    const calcPrice = document.querySelector(".calculated-price");
    const disItemQty = document.querySelector(".display-item-qty");
    disItemName.innerText = item.name;
    eachPrice.innerHTML = item.basePrice;
    disItemQty.innerHTML = item.qty;
    calcPrice.innerHTML = item.totPrice();
  }

  function populateMiniCart() {
    const miniCartContents = document.querySelector(".minicart-contents");
    const miniCartNum = document.querySelector(".minicart-num");
    if (count > 0) {
      miniCartNum.innerHTML = count;
      miniCartContents.style.visibility = "visible";
    } else {
      miniCartContents.style.visibility = "hidden";
    }
  }

  /* Increment and Decrement amount to add to cart */
  numToAddDisplay.innerHTML = count;
  increment.addEventListener("click", function () {
    count++;
    numToAddDisplay.innerHTML = count;
  });
  decrement.addEventListener("click", function () {
    if (count > 0) {
      count--;
    }
    numToAddDisplay.innerHTML = count;
  });

  /* Add to cart event listener */
  const addToCart = document.querySelector(".add-to-cart");
  addToCart.addEventListener("click", addItemClickHandler);

  /* Remove from cart event listener */
  const deleteItem = document.querySelector(".delete-cart-item");
  deleteItem.addEventListener("click", deleteItemClickHandler);

  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  const closeNav = document.querySelector(".close-mobile-nav");
  hamburger.addEventListener("click", () => {
    mobileNav.style.transform = "translateX(0)";
  });
  closeNav.addEventListener("click", () => {
    mobileNav.style.transform = "translateX(-100%)";
  });
});
