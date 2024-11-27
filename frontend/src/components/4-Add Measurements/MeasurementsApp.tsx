import React, { useEffect, useState } from 'react';
import Header from './Header';
import AddTemperatureMeasurement from './AddTemperatureMeasurement';
import ProductCard from './ProductCard';
import TemperatureForm from '../2-Product Measurements/TemperatureForm';
import { Product, ProductCardProps } from '../ProductInterfaces';

const MeasurementsApp: React.FC = () => {
  const [measurements, setMeasurements] = useState([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch measurements data
    fetch('http://127.0.0.1:8280/api/v1/history')
      .then(response => response.json())
      .then(data => setMeasurements(data))
      .catch(error => console.error('Error fetching measurements:', error));

    // Fetch products data
    fetch('http://127.0.0.1:8280/api/v1/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .then(() => console.log('Products:', products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <main className="flex overflow-hidden flex-col items-center px-20 pt-9 pb-28 bg-white max-md:px-5 max-md:pb-24">
      <Header />
      <AddTemperatureMeasurement />
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
      <TemperatureForm />
    </main>
  );
};

export default MeasurementsApp;