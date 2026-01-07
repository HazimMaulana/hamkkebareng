const CART_KEY = "hb_cart";

export function getCart() {
  if (typeof window === "undefined") {
    return [];
  }
  try {
    const raw = window.localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCart(cart) {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event("cart:updated"));
}

export function addToCart(item) {
  const cart = getCart();
  const existingIndex = cart.findIndex((entry) => entry.key === item.key);

  if (existingIndex >= 0) {
    cart[existingIndex] = {
      ...cart[existingIndex],
      quantity: cart[existingIndex].quantity + item.quantity,
    };
  } else {
    cart.push(item);
  }

  saveCart(cart);
  return cart;
}

export function removeCartItem(key) {
  const cart = getCart().filter((item) => item.key !== key);
  saveCart(cart);
  return cart;
}

export function updateCartItemQuantity(key, quantity) {
  const nextQuantity = Math.max(1, quantity);
  const cart = getCart().map((item) =>
    item.key === key ? { ...item, quantity: nextQuantity } : item
  );
  saveCart(cart);
  return cart;
}

export function clearCart() {
  saveCart([]);
}
