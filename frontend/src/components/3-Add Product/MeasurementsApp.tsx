import React from "react";
import Header from "./Header";
import AddProductForm from "./AddProductForm";

const MeasurementsApp: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col items-center px-20 pt-9 pb-24 bg-white max-md:px-5">
      <Header />
      <h1 className="mt-24 text-4xl tracking-tighter leading-tight text-center text-black max-md:mt-10">
        Add a product
      </h1>
      <AddProductForm />
    </main>
  );
};

export default MeasurementsApp;