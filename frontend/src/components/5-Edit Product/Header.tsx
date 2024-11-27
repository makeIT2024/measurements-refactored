import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between w-full max-w-[1231px] max-md:max-w-full">
      <h1 className="my-auto text-4xl font-medium tracking-tight leading-none text-sky-800">
        Measurements App
      </h1>
      <div className="flex gap-2.5 justify-center items-center py-2.5 pr-2 pl-2 text-base font-semibold leading-tight text-center text-white">
        <button className="overflow-hidden self-stretch px-10 py-3.5 my-auto bg-sky-800 rounded-lg w-[188px] max-md:px-5">
          Add a product
        </button>
      </div>
    </header>
  );
};

export default Header;