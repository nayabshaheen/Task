import React from "react";

export const Input = ({
  type,
  name,
  inputId,
  defaultValue,
  label,
  value,
  helperText,
  onChange,
  error,
  className,
  placeholder,
}) => {
  return (
    <div>
      {label && (
        <label className="block text-sm text-gray-600 font-bold">{label}</label>
      )}

      {helperText && <label classsName="block text-sm text-gray-600"></label>}

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={inputId}
        value={value}
        onChange={onChange}
        className={className}
        defaultValue={defaultValue}
        // className=" border rounded-lg w-full py-2 px-3 text-stone-50 leading-tight focus: shadow-outline bg-gray-50"
      />
      <p className="mt-2 text-sm text-red-600>">{error}</p>
    </div>
  );
};
