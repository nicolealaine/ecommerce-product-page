document.addEventListener("DOMContentLoaded", function (event) {
  const images = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
  ];

  const mainPhoto = document.querySelector(".main-photo");
  const thumbnails = document.querySelectorAll(".thumbnail");
  let activeThumb = 0;
  const modalMainPhoto = document.querySelector(".modal-main-photo");
  const modalThumbnails = document.querySelectorAll(".modal-thumbnail");

  mainPhoto.src = images[activeThumb];
  modalMainPhoto.src = images[activeThumb];

  function updateActiveThumb(thumbs, e) {
    thumbs.forEach((thumb) => {
      thumb.classList.remove("active-thumb");
    });
    activeThumb = e.dataset.photo;
    e.classList.add("active-thumb");
  }

  function updateMainPhoto(main) {
    main.src = images[activeThumb];
  }

  thumbnails.forEach((element) => {
    element.addEventListener("click", () => {
      updateActiveThumb(thumbnails, element);
      updateMainPhoto(mainPhoto);
      console.log(activeThumb);
    });
  });

  modalThumbnails.forEach((element) => {
    element.addEventListener("click", () => {
      updateActiveThumb(modalThumbnails, element);
      updateMainPhoto(modalMainPhoto);
    });
  });

  function incrementPhoto() {
    activeThumb++;
  }
  function decrementPhoto() {
    activeThumb--;
  }

  /* Move images on arrow click */
  const nextModalArrow = document.querySelector(".right-modal-arrow");
  const prevModalArrow = document.querySelector(".left-modal-arrow");
  const nextArrow = document.querySelector(".right-arrow");
  const prevArrow = document.querySelector(".left-arrow");

  prevArrow.addEventListener("click", () => {
    if (activeThumb > 0) {
      decrementPhoto();
      newActive = thumbnails[activeThumb];
      updateActiveThumb(thumbnails, newActive);
      updateMainPhoto(mainPhoto);
    }
  });
  nextArrow.addEventListener("click", () => {
    if (activeThumb < images.length - 1) {
      incrementPhoto();
      newActive = thumbnails[activeThumb];
      updateActiveThumb(thumbnails, newActive);
      updateMainPhoto(mainPhoto);
    }
  });

  prevModalArrow.addEventListener("click", () => {
    if (activeThumb > 0) {
      decrementPhoto();
      newActive = modalThumbnails[activeThumb];
      updateActiveThumb(modalThumbnails, newActive);
      updateMainPhoto(modalMainPhoto);
    }
  });
  nextModalArrow.addEventListener("click", () => {
    if (activeThumb < images.length - 1) {
      incrementPhoto();
      newActive = modalThumbnails[activeThumb];
      updateActiveThumb(modalThumbnails, newActive);
      updateMainPhoto(modalMainPhoto);
    }
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
    } else if (event.target == modalMainPhoto) {
      modal.style.display = "none";
    }
  };
});
