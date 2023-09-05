import React from "react";

const variants = {
  primary:
    "bg-indigo-600 text-white hover:enabled bg-indigo-700 focus:ring-indigo-500",
  second:
    "hover:bg-black hover:text-white w-60 text-black rounded-r-full flex items-center py-3 ",
  danger: " text-black ",
  naked: "bg-gray-950 text-gray-50 shadow-none",
};

const sizes = {
  small: "px-2 py-1 text-xs leading-1",
  medium: "px-4 py-2 text-sm",
  large: "px-4 py-2 text-base",
  my: "px-4 py-2 text-base text-right",
};

export const Button = ({
  className,
  variant = "naked",
  size = "small",
  ...props
}) => {
  return (
    <button
      className={`
              ${className} 
              ${variants[variant]}
              ${sizes[size]}
`}
      {...props}
    />
  );
};
