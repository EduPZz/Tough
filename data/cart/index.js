let cartProducts = [];

window.addEventListener('load', () => {
  const storedProducts = localStorage.getItem('cartProducts');
  if (storedProducts) {
    cartProducts = JSON.parse(storedProducts);
  }
  renderCart();
});

const saveCartToLocalStorage = () => {
  localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
};

const addCartProduct = (product) => {
  cartProducts.push(product);
  saveCartToLocalStorage();
  renderCart();
  return cartProducts;
};

const removeProduct = (productId) => {
  if (!!productId && productId > 0 && typeof productId === 'number') {
    cartProducts = cartProducts.filter((product) => product.id !== productId);
    saveCartToLocalStorage();
    renderCart();
    return cartProducts;
  }
};