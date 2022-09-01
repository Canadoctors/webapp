import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Counter: NextPage = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("09/08/2022 16:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {partyTime ? (
        <>
          <h1>Bienvenidoooo</h1>
        </>
      ) : (
        <>
          <section className="py-8 md:py-16 border rounded-2xl">
            <div className="max-w-5xl mx-auto px-5 box-content">
              <div className="flex items-center flex-col md:flex-row -mx-5">
                <div className="w-full px-5 mb-5 md:mb-0 text-center md:text-left">
                  <h6 className="uppercase font-semibold text-xs md:text-base text-gray-600">
                    Opening tickets
                  </h6>
                  <h3 className="font-bold font-heading text-2xl md:text-4xl text-white">
                    Jueves 8
                  </h3>
                  <h3 className="font-bold font-heading text-lg md:text-xl text-white leading-tight">
                    05:00 PM 🇦🇷 / 04:00 PM 🇵🇷
                  </h3>
                  <div className="mt-4 w-full md:w-44">
                    <button
                      type="button"
                      className="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-[#00A099] w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      Early bird
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-auto px-5">
                  <div className="flex justify-center text-white text-center">
                    <div className="w-20 md:w-28 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                      <div className="text-2xl md:text-5xl font-semibold">
                        {days}
                      </div>
                      <div className="opacity-75 text-xs mt-3 uppercase">
                        Dias
                      </div>
                    </div>
                    <div className="w-20 md:w-28 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                      <div className="text-2xl md:text-5xl font-semibold">
                        {hours}
                      </div>
                      <div className=" opacity-75 text-xs mt-3 uppercase">
                        Horas
                      </div>
                    </div>
                    <div className="w-20 md:w-28 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                      <div className="text-2xl md:text-5xl font-semibold">
                        {minutes}
                      </div>
                      <div className=" opacity-75 text-xs mt-3 uppercase">
                        Minutos
                      </div>
                    </div>
                    <div className="w-20 md:w-28 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                      <div className="text-2xl md:text-5xl font-semibold">
                        {seconds}
                      </div>
                      <div className=" opacity-75 text-xs mt-3 uppercase">
                        Segundos
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Counter;
