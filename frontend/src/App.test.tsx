// FILEPATH: /Users/xopiie/Downloads/measurements-refactored/frontend/src/components/4-Add Measurements/MeasurementsApp.test.tsx

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MeasurementsApp from './components/4-Add Measurements/MeasurementsApp';
import Product from './components/4-Add Measurements/ProductCard';

// Mock components used in MeasurementsApp
jest.mock('./components/4-Add Measurements/Header', () => () => <div>Header Component</div>);
jest.mock('./components/4-Add Measurements/AddTemperatureMeasurement', () => () => <div>AddTemperatureMeasurement Component</div>);
jest.mock('./components/4-Add Measurements/ProductCard', () => ({ product }: { product: typeof Product }) => <div>{product.name}</div>);
jest.mock('./componenrs/2-Product Measurements/TemperatureForm', () => () => <div>TemperatureForm Component</div>);

describe('MeasurementsApp Component', () => {
  beforeEach(() => {
    global.fetch = jest.fn((url) => {
      if (url.includes('/api/v1/history')) {
        return Promise.resolve({
          json: () => Promise.resolve([]),
        });
      } else if (url.includes('/api/v1/products')) {
        return Promise.resolve({
          json: () => Promise.resolve([
            { id: '1', name: 'Product 1' },
            { id: '2', name: 'Product 2' },
          ]),
        });
      }
      return Promise.reject(new Error('Unknown URL'));
    }) as jest.Mock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders Header, AddTemperatureMeasurement, and TemperatureForm components', async () => {
    render(<MeasurementsApp />);

    expect(screen.getByText('Header Component')).toBeInTheDocument();
    expect(screen.getByText('AddTemperatureMeasurement Component')).toBeInTheDocument();
    expect(screen.getByText('TemperatureForm Component')).toBeInTheDocument();
  });

  test('fetches and displays products', async () => {
    render(<MeasurementsApp />);

    await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
      expect(screen.getByText('Product 2')).toBeInTheDocument();
    });
  });

  test('handles fetch errors gracefully', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Fetch error'))) as jest.Mock;

    render(<MeasurementsApp />);

    await waitFor(() => {
      expect(screen.queryByText('Product 1')).not.toBeInTheDocument();
      expect(screen.queryByText('Product 2')).not.toBeInTheDocument();
    });
  });
});