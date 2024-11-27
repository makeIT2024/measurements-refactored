import React from 'react';
import Header from './Header';
import { useEffect, useState } from 'react';

const TemperatureForm: React.FC = () => {
  const [product, setProduct] = useState<any>(null);
  const [temperature, setTemperature] = useState<string>('');

  useEffect(() => {
    // Fetch product data from the backend using the id from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    console.log(productId)
    fetch(`http://127.0.0.1:8280/api/v1/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Send the temperature value to the backend
    fetch('http://127.0.0.1:8280/api/v1/product_measurement', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: product.id, avgTemperature: temperature }),
    })
      .then((response) => {
        if (response.ok) {
          // Handle the response from the backend
          console.log('Temperature measurement submitted successfully');
          // Redirect to the product page
          window.location.href = `/product-measurements?id=${product.id}`;
        } else {
          throw new Error('Failed to submit temperature measurement');
        }
      })
      .catch((error) => console.error(error));
  };

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <main className="flex overflow-hidden flex-col items-center px-20 pt-9 pb-28 bg-white max-md:px-5 max-md:pb-24">
      <Header />
      <section className="mt-44 max-md:mt-10">
        <h2 className="text-4xl tracking-tighter leading-tight text-center text-black">
          Add product measurement
        </h2>
        <div className="overflow-hidden px-8 pt-6 pb-3.5 mt-24 w-full rounded-3xl bg-stone-50 max-w-[989px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f8665efba88a9c06ac40811fd74ad56812b02e10fcc6e0c1c8bb26b3dc291a4?apiKey=b69fc8919c0b423ba9b9a5ca01d09686&&apiKey=b69fc8919c0b423ba9b9a5ca01d09686"
                      alt="Product image"
                      className="object-contain shrink-0 self-stretch my-auto max-w-full aspect-[1.07] w-[107px] max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col w-full font-semibold leading-tight max-md:mt-10">
                      <h3 className="self-start text-3xl text-black">{product.name}</h3>
                      <div className="flex gap-5">
                        <div className="flex flex-col flex-1">
                          <p className="text-xl text-sky-800">Min. temperature</p>
                          <p className="self-center text-4xl text-black">{product.minMeasure}</p>
                        </div>
                        <div className="flex flex-col flex-1">
                          <p className="text-xl text-teal-400">Max. temperature</p>
                          <p className="self-center text-4xl text-black">{product.maxMeasure}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <form
        className="flex overflow-hidden flex-col justify-center items-end px-20 py-10 mt-14 max-w-full whitespace-nowrap rounded-3xl bg-stone-50 w-[792px] max-md:px-5 max-md:mt-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col max-w-full w-[371px]">
          <div className="flex gap-5">
            <label
              htmlFor="temperature"
              className="grow my-auto text-lg font-semibold leading-tight text-black"
            >
              Temperature:
            </label>
            <div className="flex flex-col text-base leading-none text-[color:var(--sds-color-text-default-default)]">
              <input
                type="text"
                id="temperature"
                className="overflow-hidden flex-1 shrink self-stretch px-4 py-3 w-full bg-white rounded-lg min-w-[240px]"
                placeholder="Value"
                value={temperature}
                onChange={(event) => setTemperature(event.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default TemperatureForm;