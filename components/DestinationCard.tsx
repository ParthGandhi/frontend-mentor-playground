/* eslint-disable @next/next/no-img-element */
import { NextComponentType } from "next";

const DestinationCard = ({
  destination,
}: {
  destination: {
    city: string;
    averagePrice: number;
    propertyCount: number;
    imageUrl: string;
    imageAlt: string;
  };
}): JSX.Element => {
  return (
    <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
      <img
        alt={destination.imageAlt}
        src="https://placekitten.com/g/400/400"
        className="h-32 w-32 flex-shrink-0"
      />
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {destination.city}
        </h3>
        <p className="text-gray-600">
          {destination.averagePrice} / night average
        </p>
        <div className="mt-4">
          <a className="text-indigo-600 hover:text-indigo-500 font-semibold text-sm">
            Explore {destination.propertyCount} properties
          </a>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
