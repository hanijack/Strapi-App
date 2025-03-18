import React from "react";
import { StrapiImage } from "./StrapiImage";
import Link from "next/link";

const HeroSection = ({ data }) => {
  return (
    <div className="mt-8 px-4 py-2 flex flex-col md:flex-row justify-between gap-8 lg:gap-16 md:h-[600px] mb-10 md:mb-80 xl:mb-40">
      <div className="w-full  md:h-full md:w-1/2">
        <h2 className="text-primary text-2xl font-bold mb-3">{data.title}</h2>
        <p className="text-secondary font-[300] mb-6">{data.description}</p>
        {data.action.map((ac) => (
          <div key={ac.id} className="bg-slate-200 p-3 mb-2">
            <Link href={`${ac.href}`}>
              <h4 className="text-primary font-bold text-lg mb-2">{ac.title}</h4>
            </Link>
            <p className="text-secondary text-xs font-semibold">
              {ac.text}
            </p>
            <Link href={`${ac.href}`}>
              <button className="px-2 py-1 bg-[#F35C7A] text-sm rounded-md mt-2 text-white hover:bg-primary transition-all ease-in-out duration-300 ">More...</button>
            </Link>
          </div>
        ))}
      </div>
      <div className="relative h-[400px] md:h-full w-full md:w-1/2">
        <StrapiImage
          src={data.image.url}
          fill
          className="object-fit"
          alt="hero section picture"
        />
      </div>
    </div>
  );
};

export default HeroSection;
