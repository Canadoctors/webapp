import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#00A099]/90 to-[#8CBB93]/90 bg-opacity-40">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-gradient-to-b from-[#00A099]/90 to-[#8CBB93]/90 bg-opacity-40 px-2 text-sm text-white rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <a className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 group-hover:translate-y-0 group-hover:translate-x-0"></span>
        </a>
      </button>
    </div>
  );
}

export default NotFound;
