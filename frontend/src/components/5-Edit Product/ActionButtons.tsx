import React from 'react';

interface ButtonProps {
  text: string;
  className: string;
}

const Button: React.FC<ButtonProps> = ({ text, className }) => (
  <button className={`overflow-hidden px-11 py-2 mt-4 text-base font-semibold leading-tight text-center text-white rounded-lg max-md:px-5 ${className}`}>
    {text}
  </button>
);

const ActionButtons: React.FC = () => {
  const buttons = [
    { text: "Save", className: "bg-sky-800" },
    { text: "Add Measurement", className: "bg-teal-400" },
  ];

  return (
    <>
      {buttons.map((button, index) => (
        <Button key={index} text={button.text} className={button.className} />
      ))}
    </>
  );
}

export default ActionButtons;
