export function getCartProducts() {
  return JSON.parse(localStorage.getItem("cartProducts"));
}
export function addItemToCart(product) {
  let cart_items = getCartProducts();
  let productIndex = cart_items.findIndex((item) => item.id === product.id);
  if (productIndex === -1) {
    localStorage.setItem(
      "cartProducts",
      JSON.stringify([...cart_items, { ...product, count: 1 }])
    );
  } else {
    localStorage.setItem(
      "cartProducts",
      JSON.stringify(
        cart_items.map((item, index) => {
          if (index === productIndex) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        })
      )
    );
  }
}
export function removeItemFromCart(product) {
  let cart_items = getCartProducts();
  let productIndex = cart_items.findIndex((item) => item.id === product.id);
  if (productIndex === -1) {
    return;
  } else {
    if (cart_items[productIndex].count === 1) {
      localStorage.setItem(
        "cartProducts",
        JSON.stringify(
          cart_items.filter((item) => item.id !== cart_items[productIndex].id)
        )
      );
    } else {
      cart_items[productIndex].count--;
      localStorage.setItem("cartProducts", JSON.stringify(cart_items));
    }
  }
}
