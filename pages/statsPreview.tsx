/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";

/**
 * https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62
 */
const StatsPreviewCard: NextPage = () => {
  return (
    <div className="bg-gray-900 w-screen h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 grid-rows-3 w-3/4 h-3/4 sm:h-1/2 md:h-1/2 lg:max-h-80 max-w-xs lg:grid-rows-1 lg:grid-cols-2 lg:max-w-4xl rounded-xl overflow-hidden ">
        <div className="lg:hidden row-span-1">
          <img
            src="http://placekitten.com/300/300"
            alt="kitten placeholder"
            className="h-full w-full object-center object-cover"
          />
        </div>
        <div className="lg:col-span-1 p-3 md:p-6 lg:p-10 bg-gray-800 row-span-2">
          <h1 className="text-gray-100 sm:text-3xl font-semibold text-l">
            Get <span className="text-purple-600">insights</span> that help your
            business grow.
          </h1>
          <p className="text-purple-100 leading-[1.375rem] text-xs sm:text-sm font-extralight mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            rhoncus sapien finibus erat euismod interdum.
          </p>
          <div className="grid grid-rows-3 sm:grid-cols-3 mt-2 sm:mt-10">
            <div className="col-span-1 inline-block text-center">
              <span className="text-gray-200 font-bold tracking-wide text-xs sm:text-base">
                10k+
              </span>
              <br />
              <span className="text-gray-300 text-xs font-thin tracking-widest uppercase">
                companies
              </span>
            </div>
            <div className="col-span-1 uppercase inline-block text-center">
              <span className="text-gray-200 font-bold tracking-wide text-xs sm:text-base">
                314
              </span>
              <br />
              <span className="text-gray-300 text-xs font-thin tracking-widest">
                templates
              </span>
            </div>
            <div className="col-span-1 uppercase inline-block text-center">
              <span className="text-gray-200 font-bold tracking-wide text-xs sm:text-base">
                12M+
              </span>
              <br />
              <span className="text-gray-300 text-xs font-thin tracking-widest">
                queries
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-1 hidden lg:block relative">
          <img
            src="http://placekitten.com/300/300"
            alt="kitten placeholder"
            className="h-full w-full object-center object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default StatsPreviewCard;
