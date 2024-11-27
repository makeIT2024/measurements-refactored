import React from 'react';

interface DetailProps {
  label: string;
  value: string;
}

const Detail: React.FC<DetailProps> = ({ label, value }) => (
  <div className="flex gap-2 mt-4 max-w-full w-[396px]">
    <div className="grow my-auto text-lg font-semibold leading-tight text-black">
      {label}:
    </div>
    <div className="flex overflow-hidden gap-2 items-center px-4 py-2.5 text-base leading-none whitespace-nowrap bg-white rounded-full min-h-[36px] text-[color:var(--sds-color-text-default-default)]">
      <div className="flex-1 shrink self-stretch my-auto basis-0">{value}</div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a12d35a344a22193abbd6967323e06681ded55706ceaed5c38ea31dce6653538?apiKey=b69fc8919c0b423ba9b9a5ca01d09686&&apiKey=b69fc8919c0b423ba9b9a5ca01d09686" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
    </div>
  </div>
);

const ProductDetails: React.FC = () => {
  const details: DetailProps[] = [
    { label: "Brand", value: "Nike" },
    { label: "Category", value: "Shoes" },
  ];

  return (
    <div>
      <p>render product details</p>
      {details.map((detail: DetailProps, index: number) => (
        <Detail key={index} label={detail.label} value={detail.value} />
      ))}
    </div>
  );
};

export default ProductDetails;