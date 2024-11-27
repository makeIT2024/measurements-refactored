import React from 'react';
import Header from './Header';
import ProductMeasurements from './ProductMeasurements';
import MeasurementTable from './MeasurementTable';

const MeasurementsApp: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center px-20 pt-9 pb-96 bg-white max-md:px-5 max-md:pb-24">
      <Header />
      <ProductMeasurements />
      <MeasurementTable />
    </div>
  );
};

export default MeasurementsApp;