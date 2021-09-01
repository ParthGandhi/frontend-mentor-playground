/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { LogoFacebook, LogoTwitter, LogoInstagram } from "react-ionicons";

const Footer = () => {
  return (
    <div className="bg-fyloBlueFooter ">
      <img src="/fylo/logo.svg" className="mx-8 h-12 my-5" />

      <div className="grid grid-cols-1 mx-10 my-5 gap-y-9 gap-x-5 md:grid-cols-2 lg:grid-cols-4">
        {/** Contact information */}
        <div className="space-y-2">
          <div className="flex space-x-3 ">
            <img src="/fylo/icon-location.svg" className="h-4" />
            <p className="text-gray-200 text-sm max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ac dolor aliquam, consectetur dui at, dapibus felis.
            </p>
          </div>
        </div>

        <div className="space-y-2 ">
          <div className="flex space-x-3">
            <img src="/fylo/icon-phone.svg" className="h-4" />
            <p className="text-gray-200 text-sm max-w-xs">+1-543-123-4567</p>
          </div>
          <div className="flex space-x-3">
            <img src="/fylo/icon-email.svg" className="h-4" />
            <p className="text-gray-200 text-sm max-w-xs">example@fylo.com</p>
          </div>
        </div>

        {/** Pages */}
        <div className="grid grid-cols-1 space-y-2">
          <a href="#" className="text-gray-200 text-sm font-light">
            About Us
          </a>
          <a href="#" className="text-gray-200 text-sm font-light">
            Jobs
          </a>
          <a href="#" className="text-gray-200 text-sm font-light">
            Press
          </a>
          <a href="#" className="text-gray-200 text-sm font-light">
            Blog
          </a>
        </div>
        <div className="grid grid-cols-1 space-y-2">
          <a href="#" className="text-gray-200 text-sm font-light">
            Contact Us
          </a>
          <a href="#" className="text-gray-200 text-sm font-light">
            Terms
          </a>
          <a href="#" className="text-gray-200 text-sm font-light">
            Privacy
          </a>
        </div>
      </div>
      {/** Social */}
      <div className="space-x-2  flex w-40 h-6 justify-center m-auto">
        <LogoFacebook color={"#ffffff"} height="20px" width="20px" />
        <LogoTwitter color={"#ffffff"} height="20px" width="20px" />
        <LogoInstagram color={"#ffffff"} height="20px" width="20px" />
      </div>
    </div>
  );
};

const FeatureSection = ({
  image,
  title,
  content,
}: {
  image: string;
  title: string;
  content: string;
}) => {
  return (
    <div className="flex flex-col items-center mx-5 my-5 w-56 ">
      <img src={image} className="w-auto h-16" />
      <h4 className="text-gray-200 text-l mt-4">{title}</h4>
      <p className="text-gray-300 text-center text-xs p-3">{content}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      image: "/fylo/icon-access-anywhere.svg",
      title: "Access your files, anywhere",
      content:
        "The ability to use a smartphone, tablet or computer to access your content means your files follow you everywhere.",
    },
    {
      image: "/fylo/icon-security.svg",
      title: "Security you can trust",
      content:
        "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secures your files.",
    },
    {
      image: "/fylo/icon-collaboration.svg",
      title: "Real-time collaboration",
      content:
        "Securely share files and folders with friends, family and colleagues for live collaboration. No ermail attachments are required.",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center my-12 ">
      {features.map((f) => (
        <FeatureSection key={f.title} {...f} />
      ))}
    </div>
  );
};

const StayProductiveSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mx-auto md:max-w-2xl">
      <img src="/fylo/illustration-stay-productive.png" className="w-72" />
      <div className="max-w-md p-6">
        <h3 className="text-gray-200 md:text-3xl">
          Stay productive, wherever you are
        </h3>
        <p className="text-gray-300 text-xs max-w-xs">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
          <br />
          <br />
          Securely share files and folders with friends, family, and colleagues
          for live collaboration. No email attachments required.
        </p>
      </div>
    </div>
  );
};

const TestimonialCard = ({
  image,
  name,
  title,
  content,
}: {
  image: string;
  name: string;
  title: string;
  content: string;
}) => {
  return (
    <div className="w-64 bg-fyloBlueXLight p-5 rounded-sm mx-5 my-5">
      <p className="text-gray-300 text-xs font-light leading-4">{content}</p>
      <div className="mt-3 flex">
        <img src={image} className="w-8 h-8 rounded-full" />
        <div className="ml-2">
          <div className="text-gray-200 text-xs">{name}</div>
          <div className="text-gray-400 text-xs">{title}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      image: "/fylo/profile-1.jpg",
      title: "Founder & CEO, Huddle",
      name: "Satish Patel",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac dolor aliquam, consectetur dui at, dapibus felis.",
    },
    {
      image: "/fylo/profile-2.jpg",
      title: "Founder & CEO, Huddle",
      name: "Bruce McKenzie",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac dolor aliquam, consectetur dui at, dapibus felis.",
    },
    {
      image: "/fylo/profile-3.jpg",
      title: "Founder & CEO, Huddle",
      name: "Iva Boyd",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac dolor aliquam, consectetur dui at, dapibus felis.",
    },
  ];
  return (
    <div className="flex flex-wrap items-center justify-center my-12">
      {testimonials.map((t) => (
        <TestimonialCard key={t.name} {...t} />
      ))}
    </div>
  );
};

const PrimaryDescriptionCTA = () => {
  return (
    <div className="pt-5 ">
      <div className="bg-fyloBlueLight ">
        <img
          src="/fylo/illustration-intro.png"
          className="relative z-10 w-96 mx-auto"
        />
      </div>
      <img
        className="relative -mt-16  mx-auto"
        src="/fylo/bg-curvy-mobile.svg"
      />
      <div className="mx-auto">
        <h3 className="text-gray-300  text-center text-xl font-bold mx-auto my-5 max-w-md md:text-3xl lg:text-4xl">
          All your files in one secure location, accessible anywhere.
        </h3>
        <p className="text-center text-gray-200 text-sm font-thin my-5 max-w-xs  mx-auto lg:text-md lg:max-w-sm">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends,
          family, and co-workers.
        </p>
        {/** Is this the right way to center the button? */}
        <div className="flex justify-center">
          <button className="rounded-3xl text-gray-100 bg-blue-500 px-20 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd
 */
const FyloLandingPage: NextPage = () => {
  return (
    <div className="h-full w-full bg-fyloBlue">
      <PrimaryDescriptionCTA />
      <FeaturesSection />
      <StayProductiveSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default FyloLandingPage;
