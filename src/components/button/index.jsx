import React from "react";

function Button({onClick, children, className=''}) {
  return (
    <button
    onClick={onClick}
      type="button"
      className={`${className ? className : 'w-auto h-10 text-white bg-ungu-muda hover:bg-violet-800 hover:text-white py-2 px-4 border-transparent rounded'}`}
    >{children}
    </button>
  );
}

export default Button;
