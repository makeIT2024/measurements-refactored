import React, { useEffect, useState } from 'react';

interface MeasurementData {
  id: number;
  date: string;
  productId: number;
  avgTemperature: number;
  isOk: boolean;
}

const MeasurementTable: React.FC = () => {
  const [measurementData, setMeasurementData] = useState<MeasurementData[]>([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = Number(urlParams.get('id')) ?? 0;
    fetchMeasurementData(productId);
  }, []);

  const fetchMeasurementData = async (productId: number) => {
    try {
      const response = await fetch('http://127.0.0.1:8280/api/v1/history');
      const data = await response.json();
      const filteredData = data.filter((item: MeasurementData) => item.productId === productId);
      setMeasurementData(filteredData); // Only set the state once with the filtered data
    } catch (error) {
      console.error('Error fetching measurement data:', error);
    }
  };

  return (
    <section className="mt-20 max-w-full w-[869px] max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[49%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-xl font-semibold leading-tight text-sky-800 max-md:mt-10">
            <h3 className="text-3xl text-black max-md:mr-1 max-md:ml-2">Timestamp:</h3>
            {measurementData.map((data, index) => (
              <p key={`timestamp-${index}`} className="self-center mt-10 text-center max-md:mt-10 max-md:mr-1.5 max-md:ml-1.5">
                {data.date}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-center text-xl font-semibold leading-tight text-sky-800 whitespace-nowrap max-md:mt-10">
            <h3 className="self-stretch text-3xl text-black">Value:</h3>
            {measurementData.map((data, index) => (
              <p key={`value-${index}`} className="mt-10 text-center max-md:mt-10">
                {data.avgTemperature}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-center text-2xl font-bold leading-tight max-md:mt-10">
            <h3 className="self-stretch text-3xl font-semibold text-black">Result:</h3>
            {measurementData.map((data, index) => (
              <p key={`result-${index}`} className={`mt-10 text-center ${data.isOk ? 'text-green-500' : 'text-red-500'}`}>
                {data.isOk ? 'OK' : 'Not OK'}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeasurementTable;
