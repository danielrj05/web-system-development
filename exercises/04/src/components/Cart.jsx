// src/components/Cart.jsx
import { useContext, useState } from 'react';
import { CartContext } from '../CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  // Controlled input for the customer's name
  const [name, setName] = useState('');
  // Name shown in the confirmation. It is its own state, so it does not
  // disappear when clearCart() empties the cart.
  const [confirmedName, setConfirmedName] = useState('');

  // Total price: sum of price x quantity of every item
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCheckout = (event) => {
    event.preventDefault();

    // Empty name: do nothing
    if (name.trim() === '' || cartItems.length === 0) {
      return;
    }

    setConfirmedName(name);
    clearCart();
    setName('');
  };

  return (
    <div className="cart">
      <h1>Cart</h1>

      {cartItems.length === 0 ? (
        <p data-testid="cart-empty">Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item" data-testid={`cart-item-${item.id}`}>
              <span className="cart-item-name">{item.name}</span>
              <span>{item.price} €</span>

              <div className="cart-item-quantity">
                <button
                  type="button"
                  data-testid={`decrease-${item.id}`}
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  −
                </button>
                <span data-testid={`quantity-${item.id}`}>{item.quantity}</span>
                <button
                  type="button"
                  data-testid={`increase-${item.id}`}
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              <button
                type="button"
                data-testid={`remove-${item.id}`}
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="cart-total">
        Total: <span data-testid="cart-total">{total}</span> €
      </p>

      <h2>Checkout</h2>
      <form onSubmit={handleCheckout}>
        <input
          data-testid="customer-name"
          placeholder="Your name"
          value={name}
          onChange={handleNameChange}
        />
        <button type="submit" data-testid="checkout">
          Checkout
        </button>
      </form>

      {confirmedName !== '' && (
        <p className="order-confirmation" data-testid="order-confirmation">
          Thank you, {confirmedName}! Your order has been placed.
        </p>
      )}
    </div>
  );
}
