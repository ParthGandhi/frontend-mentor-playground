/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Image from "next/image";

import beachWorkImage from "../public/beach-work.jpg";
import logo from "../public/workaction-logo.svg";

/**
 * https://github.com/tailwindlabs/tailwindcss-from-zero-to-production
 */
const TailwindTutorial: NextPage = () => {
  return (
    <body className="bg-gray-100">
      <div className="bg-color-300 grid lg:grid-cols-2 2xl:grid-cols-5">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
          <div className="xl:max-w-xl">
            <img src="/workaction-logo.svg" alt="Workcation" className="h-10" />
            <img
              src="/beach-work.jpg"
              alt="Woman working on the beach"
              className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
            />
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              You can work from anywhere.
              <br></br>
              <span className="text-indigo-500">Take advantage of it.</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Workaction helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you're not
              on vacation.
            </p>
            <div className="mt-4 sm:mt-6">
              <a
                className="bg-indigo-500 text-white px-5 py-3 inline-block shadow-lg rounded-lg uppercase tracking-wider font-semibold text-sm sm:text-base"
                href="#"
              >
                Book your escape
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative 2xl:col-span-3">
          <img
            src="/beach-work.jpg"
            alt="Woman working on the beach"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </body>
  );
};

export default TailwindTutorial;
