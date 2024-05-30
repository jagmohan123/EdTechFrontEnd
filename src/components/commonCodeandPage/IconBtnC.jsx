import React from "react";

function IconBtnC({
  text,
  onclick,
  children,
  disabled,
  outline = false,
  customClasses,
  type,
}) {
  return (
    <div>
      <button
        disabled={disabled}
        onClick={onclick}
        type={type}
        className={`flex items-center ${
          outline ? "border border-yellow-50 bg-transparent" : "bg-yellow-50"
        } cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900 ${customClasses}`}
      >
        {children ? (
          <>
            <span className={`${outline && "text-yellow-50"}`}>{text}</span>
            {children}
          </>
        ) : (
          // yha par {} curly bracket use karne me code fat gya tha 
          text
        )}
      </button>
    </div>
  );
}

export default IconBtnC;