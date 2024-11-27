import React, { useEffect, useState } from 'react';

const ProductMeasurements: React.FC = () => {
  const [product, setProduct] = useState<any>(null);

  const handleClick = () => {
    const productId = product.id;
    window.location.href = `/temperature-form?id=${productId}`;
  };

  const handleClickHome = () => {
    window.location.href = `/`;
  };

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

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className="mt-44 max-md:mt-10">
      <h2 className="text-4xl tracking-tighter leading-tight text-center text-black" onClick={handleClickHome}>
        Product measurements
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
          <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto w-full text-base font-semibold leading-tight text-black max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d137ee85f318dc71e1a52a7ead6dfa8227b2e6b5ae9c1ccc714e7969ac08ec4f?apiKey=b69fc8919c0b423ba9b9a5ca01d09686&&apiKey=b69fc8919c0b423ba9b9a5ca01d09686"
                alt=""
                className="object-contain self-end rounded-3xl aspect-[2.25] w-[90px]"
              />
              <button className="flex overflow-hidden gap-1.5 px-3.5 py-2.5 mt-2.5 bg-white rounded-3xl" onClick={handleClick}>
                <span className="grow">Add measurement</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5498916555b7f5a314fde89ab0077f2b4ccbbe3aa2288cacc0b35cdf313d5581?apiKey=b69fc8919c0b423ba9b9a5ca01d09686&&apiKey=b69fc8919c0b423ba9b9a5ca01d09686"
                  alt=""
                  className="object-contain shrink-0 aspect-[1.04] w-[23px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductMeasurements;