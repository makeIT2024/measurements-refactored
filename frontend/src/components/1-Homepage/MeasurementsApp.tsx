import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../ProductInterfaces';

const MeasurementsApp: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch products data from the backend
    fetch('http://127.0.0.1:8280/api/v1/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .then(() => console.log('Products:', products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <main className="flex overflow-hidden flex-col items-center px-20 pt-9 pb-56 bg-white max-md:px-5 max-md:pb-24">
      <header className="flex flex-wrap gap-5 justify-between w-full max-w-[1231px] max-md:max-w-full">
        <h1 className="my-auto text-4xl font-medium tracking-tight leading-none text-sky-800">
          Measurements App
        </h1>
        <button className="flex gap-2.5 justify-center items-center py-2.5 pr-2 pl-2 text-base font-semibold leading-tight text-center text-white">
          <span className="overflow-hidden self-stretch px-10 py-3.5 my-auto bg-sky-800 rounded-lg w-[188px] max-md:px-5">
            Add a product
          </span>
        </button>
      </header>
      <section className="mt-24 text-5xl tracking-tighter text-center text-black leading-[58px] w-[1020px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        Easily measure and manage <br />
        <span className="italic">product data</span>{" "}
      </section>
      <section className="mt-36 text-4xl tracking-tighter leading-tight text-center text-black max-md:mt-10">
        All added products
      </section>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </main>
  );
}

export default MeasurementsApp;