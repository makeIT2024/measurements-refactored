import React from 'react';
import Header from './Header';
import ProductDetails from './ProductDetails';
import ActionButtons from './ActionButtons';

const MeasurementsApp: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center px-20 pt-9 pb-24 bg-white max-md:px-5">
      <Header />
      <h1 className="mt-24 text-4xl tracking-tighter leading-tight text-center text-black max-md:mt-10">
        Edit product's details
      </h1>
      <div className="flex overflow-hidden flex-col items-center px-20 pt-36 pb-8 mt-12 max-w-full rounded-3xl bg-stone-50 w-[588px] max-md:px-5 max-md:pt-24 max-md:mt-10">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e15ad86936a0760a877382096a4fd6d34632440d01c70d352a722533a4f57d4?apiKey=b69fc8919c0b423ba9b9a5ca01d09686&&apiKey=b69fc8919c0b423ba9b9a5ca01d09686" alt="Product" className="object-contain max-w-full aspect-[1.05] w-[257px]" />
        <ProductDetails />
        <ActionButtons />
      </div>
    </div>
  );
};

export default MeasurementsApp;