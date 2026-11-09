import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import products from '../data/products';

export default function Catalog() {
  const { addToCart } = useContext(CartContext);

  // Controlled input for the search
  const [search, setSearch] = useState('');

  // Products whose name contains the search (case-insensitive)
  const productsToShow = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Products</h1>

      <input
        data-testid="search"
        placeholder="Search products"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {productsToShow.length === 0 && (
        <p data-testid="no-results">No products match your search.</p>
      )}

      <div className="grid">
        {productsToShow.map((product) => (
          <div key={product.id} className="card" data-testid={`product-${product.id}`}>
            <Link to={`/products/${product.id}`} data-testid={`product-link-${product.id}`}>
              {product.name}
            </Link>
            <p className="price" data-testid={`price-${product.id}`}>
              {product.price} €
            </p>
            <button data-testid={`add-${product.id}`} onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
