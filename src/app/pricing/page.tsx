import { pricing } from "@/constants";
import React from "react";

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl lg:text-5xl font-extrabold py-5">
          Simple Pricing
        </h1>
        <p className="w-10/12 md:w-1/2">
          Every plan starts with a 14-day free trial. No credit card required.
          Go hack yourself
        </p>
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 py-10 lg:pt-14 mb-8 lg:pb-20">
        {pricing.map((price, index) => (
            <div key={index} className="flex flex-col p-6 mx-auto  lg:w-[320px] xl:w-[370px] w-[350px] sm:w-[450px] text-center text-gray-900 bg-white rounded-lg  shadow-xl dark:border-gray-600 xl:p-8">
            <h3 className="mb-4 text-2xl font-semibold">{price.title}</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              {price.description}
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">${price.price}</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
  
            <ul role="list" className="mb-8 space-y-4 text-left">
              {price.features.map((feature,index) => (
                <li key={index} className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>{feature}</span>
              </li>
              
              ))}
              
            </ul>
            <a
              href="#"
              className="bg-green-50  text-slate-100 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-semibold rounded-lg text-sm px-5 py-2.5 text-center   dark:focus:ring-primary-900"
            >
              Get started
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
