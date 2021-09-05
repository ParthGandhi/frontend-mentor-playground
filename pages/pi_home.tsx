import { NextPage } from "next";

const Header = () => {
  return (
    <div className="bg-white flex h-16 items-center">
      <div className="bg-pi-purple text-gray-100 font-extralight text-md flex-none px-3 py-3 leading-5 w-48 h-full">
        Passive Fund Catalogue
      </div>
      <div className="flex-auto mx-5 shadow border-2 rounded-md flex justify-end">
        <input
          type="search"
          placeholder="Start your search here..."
          className="text-sm placeholder-pi-purple w-full border-none"
        ></input>
        <button className="text-pi-purple text-sm w-44">Advanced Search</button>
      </div>
      <div className="flex-none flex px-5 items-center">
        <a href="#" className="ml-6">
          Explore
        </a>
        <a href="#" className="ml-6">
          FAQ
        </a>
        <a href="#" className="ml-6">
          About
        </a>
        <img src="/pi_home/moon.svg" alt="Moon Logo" className="ml-14" />
      </div>
    </div>
  );
};

const PrimaryCTASection = () => {
  return (
    <div className="flex h-64 items-end justify-between">
      <div className="w-96 p-3">
        <h1 className="text-4xl text-pi-purple font-light">
          {/** Can a br be avoided here? */}
          Get Started <br />
          with Index Investing
        </h1>
        <p className="text-gray-800 font-light">
          Grow with the market using simple, low cost, efficient assets
        </p>
      </div>
      {/** How to crop svg correctly? */}
      <img
        src="/pi_home/smiling-couple-cropped.svg"
        alt="smiling couple"
        className="h-64"
      />
    </div>
  );
};

const PerformanceGraph = () => {
  return (
    <div className="bg-white h-64 w-full text-center">
      <h3>TODO Graph</h3>
    </div>
  );
};

const PIHomePage: NextPage = () => {
  return (
    <div className="bg-pi-gray w-screen h-screen">
      <div className="mx-5">
        <Header />
        <PrimaryCTASection />
        <PerformanceGraph />
      </div>
    </div>
  );
};

export default PIHomePage;
