import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

export default function Header() {
  const { cartItems } = useContext(CartContext);

  // Total units in the cart
  const totalUnits = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <span className="logo">
        Byte<span>Shop</span>
      </span>
      <nav>
        <Link to="/" data-testid="nav-home">
          Home
        </Link>
        <Link to="/cart" data-testid="nav-cart">
          Cart (<span data-testid="cart-count">{totalUnits}</span>)
        </Link>
      </nav>
    </header>
  );
}
