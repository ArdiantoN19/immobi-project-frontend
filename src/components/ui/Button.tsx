import React, { ButtonHTMLAttributes } from "react";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button
      className="py-2 px-4 bg-slate-900 text-white rounded hover:bg-slate-700"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
