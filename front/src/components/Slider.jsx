"use client"

import { useState , useEffect} from "react";
import { StrapiImage } from "./StrapiImage";


const Slider = ({slides}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (current < slides.length - 1) {
        setCurrent((prev) => prev + 1);
      } else {
        setCurrent(0);
      }
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [current , slides]);
  return (
    <div className="flex h-[450px] overflow-hidden mb-auto relative">
      <div
        className="w-max  flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
            {slides.map((slide) =>(
                <div key={slide.id} className="relative w-screen ">
                    <StrapiImage src={slide.Image.url} alt="pic" fill={true} className="object-fill" sizes="25%"/>
                </div>
            ))}


      </div>
      <div className="absolute left-1/2 bottom-8 flex gap-4 items-center justify-center">
        {slides.map((slide , index) => (
          <div
            key={slide.id}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ring-1 ring-[#b58c4d]  flex justify-center items-center cursor-pointer ${
              current === index ? "scale-150" : ""
            }`}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-[#b58c4d] rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
