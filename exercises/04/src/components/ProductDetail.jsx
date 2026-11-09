import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../CartContext';
import products from '../data/products';

export default function ProductDetail() {
  const { addToCart } = useContext(CartContext);

  // Id from the URL (/products/:id)
  const { id } = useParams();

  const product = products.find((product) => product.id === id);

  // Unknown id
  if (!product) {
    return <p data-testid="product-not-found">Product not found.</p>;
  }

  return (
    <div className="detail">
      <h1 data-testid="product-name">{product.name}</h1>
      <p className="price" data-testid="product-price">
        {product.price} €
      </p>
      <p data-testid="product-description">{product.description}</p>
      <button data-testid="add-to-cart" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}
