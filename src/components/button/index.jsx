import React from "react";

function Button({onClick, children, className=''}) {
  return (
    <button
    onClick={onClick}
      type="button"
      className={` hover:text-white  py-2 px-2 border-transparent rounded ml-auto ${className ? className : 'w-auto h-14 text-white bg-ungu-muda hover:bg-violet-800'}`}
    >{children}
    </button>
  );
}

export default Button;
