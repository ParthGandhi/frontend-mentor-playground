/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Head from "next/head";

const Header = () => {
  return (
    <div className="bg-fyloBlueLight text-gray-200 outline-white">Header</div>
  );
};

const Footer = () => {
  return (
    <div className="bg-fyloBlueLight text-gray-200 outline-white">Footer</div>
  );
};

/**
 * https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd
 */
const FyloLandingPage: NextPage = () => {
  return (
    <div className="h-full w-full bg-fyloBlue">
      <Header />
      <div className="bg-fyloBlueLight outline-white">
        <img src="/fylo/illustration-intro.png" className="relative z-10" />
      </div>
      <img
        className="relative -mt-16 outline-white"
        src="/fylo/bg-curvy-mobile.svg"
      />
      <div>
        <h3 className="text-gray-300 outline-white text-center text-3xl">
          All your files in one secure location, accessible anywhere.
        </h3>
        <p className="text-center text-gray-200 text-l m-5">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends,
          family, and co-workers.
        </p>
        <button className="rounded-3xl text-gray-100 bg-blue-500 px-20 py-3">
          Get Started
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default FyloLandingPage;
