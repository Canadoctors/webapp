import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export function usePasswordToggle() {
  const [visible, setVisiblity] = useState(false);

  const icon = (
    <span
      className="absolute top-12 text-xl right-3 z-50 cursor-pointer"
      onClick={() => setVisiblity((visiblity) => !visiblity)}
    >
      {visible ? <FaRegEye /> : <FaRegEyeSlash />}
    </span>
  );

  const inputType = visible ? "text" : "password";

  return [inputType, icon];
}
