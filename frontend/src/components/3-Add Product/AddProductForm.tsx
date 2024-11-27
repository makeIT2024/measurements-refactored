import React from "react";
import FormInput from "./FormInput";

const AddProductForm: React.FC = () => {
  return (
    <form className="flex overflow-hidden flex-col px-14 pt-36 pb-20 mt-12 max-w-full rounded-3xl bg-stone-50 w-[588px] max-md:px-5 max-md:pt-24 max-md:mt-10">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e15ad86936a0760a877382096a4fd6d34632440d01c70d352a722533a4f57d4?apiKey=b69fc8919c0b423ba9b9a5ca01d09686&&apiKey=b69fc8919c0b423ba9b9a5ca01d09686"
        alt=""
        className="object-contain self-center max-w-full aspect-[1.05] w-[257px]"
      />
      <FormInput label="Product name:" />
      <FormInput label="Min. allowed temperature:" />
      <FormInput label="Max. allowed temperature:" />
      <button
        type="submit"
        className="overflow-hidden self-center px-14 py-2 mt-9 text-base font-semibold leading-tight text-center text-white whitespace-nowrap bg-sky-800 rounded-lg max-md:px-5"
      >
        Add
      </button>
    </form>
  );
};

export default AddProductForm;