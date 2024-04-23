import React from "react";

const Input = ({placeholder, type, ...props}) => {
  return (
    <input
    {...props}
      className="rounded outline-none border-2 w-full h-10 indent-4 text-sm"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
