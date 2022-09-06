import React, { FC } from "react";

const STYLE =
  "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#00A099] focus:outline-none focus:ring-2 focus:ring-[#00A099]";

interface FormFielProps {
  id: string;
  name: string;
  type:
    | "text"
    | "email"
    | "number"
    | "password"
    | "date"
    | "select"
    | "checkbox";
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  errors: any;
  register: any;
  validation?: any;
  toggleIcon?: any;
}

const FormField: FC<FormFielProps> = ({
  id,
  name,
  type,
  minLength,
  maxLength,
  placeholder,
  errors,
  register,
  validation,
  toggleIcon,
}) => {
  return (
    <div>
      <input
        id={id}
        name={name}
        type={type}
        maxLength={maxLength}
        placeholder={placeholder}
        className={`${STYLE}
            ${errors[id] ? "border-red-500 border-2" : "border-gray-300"} `}
        {...register(id, {
          required: {
            value: true,
            message: (
              <>
                <span className="capitalize">{name}</span>
                <span> es requerido.</span>
              </>
            ),
          },
          minLength: {
            value: minLength,
            message: `Minimo ${minLength} caracteres`,
          },
          maxLength: maxLength,

          pattern: {
            value: validation,
            message: (
              <>
                <span className="capitalize">{name}</span>
                <span> no es valido.</span>
              </>
            ),
          },
        })}
      />
      {toggleIcon}
      {errors[id] && (
        <p className="text-red-500 text-sm mt-2"> {errors[id].message}</p>
      )}
    </div>
  );
};

export default FormField;
