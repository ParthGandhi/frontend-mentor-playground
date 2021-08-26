/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";

/**
 * https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62
 */
const StatsPreviewCard: NextPage = () => {
  return (
    <div className="bg-gray-900 w-screen h-screen flex items-center justify-center">
      <div className="grid grid-cols-2 max-w-4xl rounded-xl overflow-hidden h-80">
        <div className="col-span-1 p-10 bg-gray-800">
          <h1 className="text-gray-100 text-3xl font-semibold">
            Get <span className="text-purple-600">insights</span> that help your
            business grow.
          </h1>
          <p className="text-purple-100 leading-[1.375rem] text-sm font-extralight mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            rhoncus sapien finibus erat euismod interdum.
          </p>
          <div className="grid grid-cols-3 mt-10">
            <div className="col-span-1">
              <span className="text-gray-200 font-bold tracking-wide">
                10k+
              </span>
              <br />
              <span className="text-gray-300 text-xs font-thin tracking-widest">
                companies
              </span>
            </div>
            <div className="col-span-1 uppercase">
              <span className="text-gray-200 font-bold tracking-wide">314</span>
              <br />
              <span className="text-gray-300 text-xs font-thin tracking-widest">
                templates
              </span>
            </div>
            <div className="col-span-1 uppercase">
              <span className="text-gray-200 font-bold tracking-wide">
                12M+
              </span>
              <br />
              <span className="text-gray-300 text-xs font-thin tracking-widest">
                queries
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          {/** why don't object-cover object-center work here? */}
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
