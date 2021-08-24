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
      <div className="px-8 py-12">
        <Image src={logo} alt="Workcation" className="h-10" />
        <Image
          src={beachWorkImage}
          alt="Woman working on the beach"
          className="mt-6 rounded-lg shadow-xl"
        />
        <h1 className="mt-6 text-2xl font-bold text-gray-900">
          You can work from anywhere.{" "}
          <span className="text-indigo-500">Take advantage of it.</span>
        </h1>
        <p className="mt-2 text-gray-600">
          Workaction helps you find work-friendly rentals in beautiful locations
          so you can enjoy some nice weather even when you're not on vacation.
        </p>
        <div className="mt-4">
          <a
            className="bg-indigo-500 text-white px-5 py-3 inline-block shadow-lg rounded-lg uppercase tracking-wider font-semibold text-sm"
            href="#"
          >
            Book your escape
          </a>
        </div>
      </div>
    </body>
  );
};

export default TailwindTutorial;