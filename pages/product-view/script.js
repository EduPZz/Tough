const urlParams = new URLSearchParams(window.location.search);
const bootId = urlParams.get("bootId");

const sideBarBtn = document.querySelector(".close-btn");
const sideBarLink = document.querySelector(".shoping-cart-link");
const addToCartBtn = document.getElementById("addToCart");
const cancelButton = document.getElementById("cancelButton");


cancelButton.addEventListener("click", () => {
  toggleSidebar();
});

const starsFilling = (rating) => {
  var ratingStars = document.querySelector(".product-rating");
  var roundedRating = parseInt(rating);
  for (var j = 0; j < roundedRating; j++) {
    var starIcon = document.createElement("i");
    starIcon.className = "fas fa-star";
    ratingStars.appendChild(starIcon);
  }
  if (rating !== roundedRating) {
    var halfStarIcon = document.createElement("i");
    halfStarIcon.className = "fas fa-star-half-alt";
    ratingStars.appendChild(halfStarIcon);
  }
  if (roundedRating + 1 < 6) {
    var starIcon = document.createElement("i");
    starIcon.className = "far fa-star";
    ratingStars.appendChild(starIcon);
  }
  document.querySelector(".product-rating span").textContent = rating;
};

const fillProductInfo = (bootData) => {
  document.querySelector(".product-title").textContent = bootData.title;
  document
    .querySelector(".product-preview img")
    .setAttribute("src", bootData["image-url"]);
  document.querySelector(".product-details h2").textContent =
    "Sobre esse item:";
  document.querySelector(".product-details p:nth-of-type(1)").textContent =
    bootData.description;
  document.querySelector(
    ".product-details ul li:nth-of-type(1) span"
  ).textContent = bootData.Color;
  document.querySelector(
    ".product-details ul li:nth-of-type(2) span"
  ).textContent = bootData.Disponibilidade;
  document.querySelector(
    ".product-details ul li:nth-of-type(3) span"
  ).textContent = bootData.Categoria;
  document.querySelector(".product-price .last-price span").textContent =
    bootData.oldPrice;
  document.querySelector(".product-price .new-price span").textContent =
    bootData.NewPrice;

  starsFilling(bootData.rating);
};

const getCurrentBoot = (boots) => {
  const [result] = boots.filter((boot) => +bootId === boot.id)
  return result;
};

const toggleSidebar = () => {
  const sideBar = document.querySelector(".shoppingCartSideBar");

  sideBar.classList.toggle("disabled");
};

const openSidebar = () => {
  const sideBar = document.querySelector(".shoppingCartSideBar");
  if (sideBar.classList.contains("disabled")) sideBar.classList.remove("disabled");
}

sideBarBtn.addEventListener("click", () => {
  toggleSidebar();
});

sideBarLink.addEventListener("click", () => {
  toggleSidebar();
});

const addToCartListener = () => {
  const currentBoot = [getCurrentBoot(boots)];
  addToCartBtn.addEventListener("click", () => {
    addCartProduct(getCurrentBoot(currentBoot));
    openSidebar();
  });
};

if (!!boots) {
  addToCartListener();
  fillProductInfo(getCurrentBoot(boots));
}
