import { howitwork } from "@/constants";
import Image from "next/image";
import React from "react";

const HowitWorkpage = () => {
  return (
    <div className="bg-slate-100 pb-12 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center pb-8 lg:pb-10">
        <h1 className="py-5 font-extrabold lg:text-4xl  text-2xl">
          How does it work
        </h1>
        <p className="w-11/12 lg:w-1/2 xl:w-10/12 text-gray-500">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {howitwork.map((how, index) => (
          <div key={index} className="w-[300px] sm:w-[340px] md:w-[360px] md:h-[450px]  bg-slate-50 shadow-lg rounded-xl">
            <div className="rounded-full p-4 lg:p-7 w-20 h-20 bg-green-50 flexCenter mx-auto mt-5">
              <Image src={how.icon} alt="map" width={28} height={28} />
            </div>
            <h3 className="text-gray-500 text-center md:text-lg p-5 font-bold">{how.title}</h3>
            <p className="text-wrap p-5">{how.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowitWorkpage;
