import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MeasurementsAppAddProduct from './components/3-Add Product/MeasurementsApp';
import MeasurementsAppHomepage from './components/1-Homepage/MeasurementsApp';
import MeasurementsAppProductMeasurements from './components/2-Product Measurements/MeasurementsApp';
import TemperatureForm from './components/2-Product Measurements/TemperatureForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MeasurementsAppHomepage />} />
        <Route path="/add-product" element={<MeasurementsAppAddProduct />} />
        <Route path="/product-measurements" element={<MeasurementsAppProductMeasurements />} />
        <Route path="/temperature-form" element={<TemperatureForm />} />
      </Routes>
    </Router>
  );
}

export default App;
