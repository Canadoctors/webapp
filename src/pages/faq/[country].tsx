import React from "react";
import { FaAngleUp } from "react-icons/fa";
import { useRouter } from "next/router";

import faqAr from "../../data/faqAR.json";
import faqPr from "../../data/faqPR.json";

function countryFaq() {
  const { query } = useRouter();
  console.log(query);

  return (
    <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-5xl mt-5 tracking-tight">
          Preguntas frecuentes
        </h2>
        <p className="text-neutral-500 text-lg mt-6">
          Las preguntas más comunes sobre cómo funciona canadoctors y qué puede
          hacer por usted.
        </p>
      </div>
      <div className="grid divide-y divide-neutral-200 max-w-4xl mx-auto mt-8">
        {query.country === "ar" && (
          <>
            {faqAr.map((faq) => (
              <div key={faq.id} className="py-5">
                <details className="group">
                  <summary className="flex justify-between font-medium cursor-pointer list-none">
                    <span className="text-left w-full">{faq.question}</span>
                    <span className="transition group-open:rotate-180">
                      <FaAngleUp className="text-xl" />
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    {faq.answer}
                  </p>
                </details>
              </div>
            ))}
          </>
        )}

        {query.country === "pr" && (
          <>
            {faqPr.map((faq) => (
              <div key={faq.id} className="py-5">
                <details className="group">
                  <summary className="flex justify-between font-medium cursor-pointer list-none">
                    <span className="text-left w-full">{faq.question}</span>
                    <span className="transition group-open:rotate-180">
                      <FaAngleUp className="text-xl" />
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    {faq.answer}
                  </p>
                </details>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default countryFaq;
