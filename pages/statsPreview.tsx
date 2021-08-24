/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";

/**
 * https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62
 */
const StatsPreviewCard: NextPage = () => {
  return (
    <div className="bg-gray-900 w-screen h-screen flex items-center justify-center">
      <div className="grid grid-cols-2 max-w-3xl rounded-xl overflow-hidden">
        <div className="col-span-1 p-10 bg-gray-800 space-y-5">
          <h1 className="text-gray-100 text-3xl font-semibold">
            Get <span className="text-purple-600">insights</span> that help your
            business grow.
          </h1>
          <p className="text-purple-100 leading-[1.375rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            rhoncus sapien finibus erat euismod interdum.
          </p>
          <div className="grid grid-cols-3">
            <div className="col-span-1 uppercase">
              <span>10k+</span>
              <br />
              <span>companies</span>
            </div>
            <div className="col-span-1 uppercase">
              <span>314</span>
              <br />
              <span>templates</span>
            </div>
            <div className="col-span-1 uppercase">
              <span>12M+</span>
              <br />
              <span>queries</span>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <img src="http://placekitten.com/200/300" alt="kitten placeholder" />
        </div>
      </div>
    </div>
  );
};

export default StatsPreviewCard;
