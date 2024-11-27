import React from "react";

interface FormInputProps {
  label: string;
}

const FormInput: React.FC<FormInputProps> = ({ label }) => {
  return (
    <div className="flex gap-2.5 mt-3.5">
      <label className="grow my-auto text-lg font-semibold leading-tight text-black">
        {label}
      </label>
      <div className="flex flex-col text-base leading-none whitespace-nowrap text-[color:var(--sds-color-text-default-default)]">
        <input
          type="text"
          className="overflow-hidden flex-1 shrink self-stretch px-4 py-3 w-full bg-white rounded-lg min-w-[240px]"
          placeholder="Value"
        />
      </div>
    </div>
  );
};

export default FormInput;