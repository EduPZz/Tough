const renderCart = () => {
  const cartItemsContainer = document.querySelector(".cart-items");
  const totalPriceElement = document.querySelector(".total-price");
  cartItemsContainer.innerHTML = "";

  
  const isProductAlreadyAdded = (productId) => {
    const list = Array.from(document.querySelector(".cart-items").children);
    const product = list.filter((item) => +item.id === productId);

    return product.length > 0;
  };

  const fillListItem = (product) => {
    const cartItem = document.createElement("li");
    cartItem.id = product.id;
    cartItem.innerHTML = `
        <div>
          <span class="qty">1x</span>
          <div>${product.title}</div>
          <div class="price">R$${product.price.toFixed(2)}</div>
        </div>
        <a href="#0" class="item-remove" data-id="${product.id}">
          <img width="16" height="16" src="images/close.svg" />
        </a>
      `;
    cartItemsContainer.appendChild(cartItem);
  };

  function toNum(string) {
    var numsStr = string.replace(/[^0-9]/g, "");
    return parseInt(numsStr);
  }

  if (cartProducts.length === 0) {
    cartItemsContainer.innerHTML =
      "<li>Você ainda não tem nada no carrinho</li>";
    totalPriceElement.textContent = "R$0,00";
  } else {
    let total = 0;
    cartProducts.forEach((product) => {
      if (isProductAlreadyAdded(product.id)) {
        const element = document.getElementById(product.id)
        const previusCount = toNum(element.children[0].children[0].innerHTML)
        element.children[0].children[0].innerHTML = `${previusCount + 1}x`
        element.children[0].children[2].innerHTML = `R$${(product.price * (previusCount + 1)).toFixed(2)}`
      }
      else {
        fillListItem(product);
      }
      total += product.price
    });
    totalPriceElement.textContent = `R$${total.toFixed(2)}`;
  }

  document.querySelectorAll(".item-remove").forEach((button) => {
    button.addEventListener("click", (event) => {
      const productId = parseInt(event.currentTarget.getAttribute("data-id"));
      removeProduct(productId);
    });
  });
};
