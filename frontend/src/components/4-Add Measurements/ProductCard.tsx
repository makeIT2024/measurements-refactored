import React from 'react';
import { Product, ProductCardProps } from '../ProductInterfaces';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      {/* Render other product details */}
    </div>
  );
};

export default ProductCard;