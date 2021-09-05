import { NextPage } from "next";

const Header = () => {
  return (
    <div className="bg-white flex h-16 mx-5 items-center">
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

const PIHomePage: NextPage = () => {
  return (
    <div className="bg-pi-gray w-screen h-screen">
      <Header />
    </div>
  );
};

export default PIHomePage;
