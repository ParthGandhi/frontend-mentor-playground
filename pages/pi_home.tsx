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
    <div className="bg-white h-64 w-full text-center shadow">
      <h3>TODO Graph</h3>
    </div>
  );
};

const FundCategory = ({
  name,
  description,
  numFunds,
}: {
  name: string;
  description: string;
  numFunds: number;
}) => {
  return (
    <div className="bg-white shadow rounded-md w-72 h-40 relative">
      <div className="p-3">
        <h3 className="text-pi-purple text-lg">{name}</h3>
        <p className="text-xs font-thin leading-tight">{description}</p>
      </div>
      <div className="text-center text-pi-purple font-thin border-t-2 border-opacity-30 absolute bottom-0 w-full h-8">
        See {numFunds} Funds
      </div>
    </div>
  );
};

const FundCategories = () => {
  const categories = [
    {
      name: "Indian Equity Index Funds",
      description:
        "Participate in the India growth story by investing in the top stocks from Nifty, Sensex, and other indices.",
      numFunds: 345,
    },
    {
      name: "Indian Debt Index Funds",
      description:
        "Invest in high quality, diversified, fixed income instruments from steady growth.",
      numFunds: 234,
    },
    {
      name: "US Equity Index Funds",
      description:
        "Invest in top US multinationals in NASDAQ, S&P500, and other indices.",
      numFunds: 123,
    },
    {
      name: "Strategix Index Funds",
      description:
        "Invest in factor based and quantitative index funds with higher historic equity premium.",
      numFunds: 345,
    },
  ];
  return (
    <div className="flex flex-wrap justify-between mt-5">
      {categories.map((c) => (
        <FundCategory key={c.name} {...c} />
      ))}
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
        <FundCategories />
      </div>
    </div>
  );
};

export default PIHomePage;
