import React, { FunctionComponent } from "react";

const styleInput =
  "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#00A099] focus:outline-none focus:ring-2 focus:ring-[#00A099]";

const styleSelect =
  "block w-full px-3 py-2.5 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#00A099] focus:outline-none focus:ring-2 focus:ring-[#00A099]";

const styleCheckbox = "form-checkbox h-5 w-5 accent-[#00A099]";

const styleTextarea =
  "block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#00A099] focus:outline-none focus:ring-2 focus:ring-[#00A099]";

interface FormFieldProps {
  id: string;
  name: string;
  type:
    | "text"
    | "email"
    | "number"
    | "password"
    | "date"
    | "select"
    | "checkbox"
    | "radio"
    | "textarea";
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  value?: string;
  errors: any;
  register: any;
  validation?: any;
  toggleIcon?: any;
  options?: any;
  label?: string;
  required?: boolean;
  valueAsNumber?: boolean;
  errorCheckbox?: string;
  rows?: number;
  autoComplete?: string; // Corregido aquí
}

const FormField: FunctionComponent<FormFieldProps> = ({
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
  value,
  options,
  label,
  required,
  valueAsNumber,
  errorCheckbox,
  rows,
  autoComplete, // Corregido aquí
}) => {
  const renderField = () => {
    switch (type) {
      case "text":
      case "email":
      case "number":
      case "date":
      case "password":
        return (
          <div>
            <label
              className={`${label ? "visible" : "invisible"} ${
                errors[id] ? "text-red-500 dark:text-red-500" : "text-black"
              }`}
              htmlFor={id}
            >
              {label}
            </label>
            <input
              id={id}
              name={name}
              type={type}
              value={value}
              autoComplete={autoComplete} // Corregido aquí
              minLength={minLength}
              maxLength={maxLength}
              placeholder={placeholder}
              className={`${styleInput} ${
                errors[id] ? "border-red-500 border-2" : "border-gray-300"
              }`}
              {...register(id, {
                valueAsNumber: valueAsNumber,
                required: {
                  value: required,
                  message: `${name} es requerido.`,
                },
                minLength: {
                  value: minLength,
                  message: `Mínimo ${minLength} caracteres`,
                },
                maxLength: {
                  value: maxLength,
                  message: `Máximo ${maxLength} caracteres`,
                },
                pattern: {
                  value: validation,
                  message: `${name} no es válido.`,
                },
              })}
            />
            {toggleIcon}
          </div>
        );

      case "select":
        return (
          <>
            <label
              className={`${label ? "visible" : "invisible"} ${
                errors[id] ? "text-red-500 dark:text-red-500" : "text-black"
              }`}
              htmlFor={id}
            >
              {label}
            </label>
            <select
              id={id}
              value={value}
              className={`${styleSelect} ${
                errors[id] ? "border-red-500 border-2" : "border-gray-300"
              }`}
              {...register(id, {
                required: {
                  value: required,
                  message: `${name} es requerido.`,
                },
                validate: (value: any) => value !== "",
              })}
            >
              {options &&
                options.map((option: any) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
            </select>
          </>
        );

      case "checkbox":
      case "radio":
        return (
          <div className="flex gap-2 items-center">
            <input
              id={id}
              type={type}
              value={value}
              className={styleCheckbox}
              {...register(id, {
                required: {
                  value: required,
                  message: errorCheckbox || `${name} es requerido.`,
                },
              })}
            />
            <label
              className={`${label ? "visible" : "invisible"} ${
                errors[id] ? "text-red-500 dark:text-red-500" : "text-black"
              }`}
              htmlFor={id}
            >
              {label}
            </label>
          </div>
        );

      case "textarea":
        return (
          <div className="relative w-full">
            <textarea
              id={id}
              rows={rows}
              placeholder={placeholder}
              className={`${styleTextarea} ${
                errors[id] ? "border-red-500 border-2" : "border-gray-300"
              }`}
              {...register(id, {
                required: {
                  value: required,
                  message: `${name} es requerido.`,
                },
              })}
            />
            <label
              className={`${label ? "visible" : "invisible"} ${
                errors[id] ? "text-red-500 dark:text-red-500" : "text-black"
              }`}
              htmlFor={id}
            >
              {label}
            </label>
          </div>
        );
    }
  };

  return (
    <div className="pt-2">
      {renderField()}
      {errors[id] && (
        <p className="text-red-500 text-sm mt-2">{errors[id].message}</p>
      )}
    </div>
  );
};

export default FormField;
