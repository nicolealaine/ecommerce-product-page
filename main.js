document.addEventListener("DOMContentLoaded", function (event) {
  /* Increment and Decrement amount to add to cart */
  const increment = document.querySelector(".plus");
  const decrement = document.querySelector(".minus");
  const numToAddDisplay = document.querySelector(".num-to-add");
  var count = 0;
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

  /* Change main photo on thumbnail click */
  const mainPhoto = document.querySelector(".main-photo");
  const thumbnails = document.querySelectorAll(".thumbnail");
  thumbnails.forEach((element) => {
    element.addEventListener("click", function () {
      thumbnails.forEach((e) => {
        e.classList.remove("active-thumb");
      });
      mainPhoto.src = this.dataset.full;
      this.classList.add("active-thumb");
    });
  });

  const modalMainPhoto = document.querySelector(".modal-main-photo");
  const modalThumbnails = document.querySelectorAll(".modal-thumbnail");
  modalThumbnails.forEach((element) => {
    element.addEventListener("click", function () {
      modalThumbnails.forEach((e) => {
        e.classList.remove("active-thumb");
      });
      modalMainPhoto.src = this.dataset.full;
      this.classList.add("active-thumb");
    });
  });

  /* Modal popup on main photo click */
  mainPhoto.addEventListener("click", () => {
    if (screen.width > 1050) {
      modal.style.display = "block";
    }
  });

  /* Close modal on X click */
  const modal = document.querySelector(".modal");
  const modalX = document.querySelector(".modalX");
  modalX.addEventListener("click", () => {
    modal.style.display = "none";
  });
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  /* Move modal images right on click */

  const images = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
  ];
  const nextArrow = document.querySelector(".right-modal-arrow");
  const prevArrow = document.querySelector(".left-modal-arrow");
  const currentModalPhoto = document.querySelector(".modal-main-photo");
  var photo = 1;
  console.log(images.length);
  nextArrow.addEventListener("click", () => {
    if (photo <= images.length) {
      currentModalPhoto.src = images[photo++];
    }
  });

  prevArrow.addEventListener("click", () => {
    if (photo > 0) {
      photo = photo - 1;
      currentModalPhoto.src = images[photo];
    }
  });
});
