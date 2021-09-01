/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { LogoFacebook, LogoTwitter, LogoInstagram } from "react-ionicons";

const Header = () => {
  return (
    <div className="bg-fyloBlueLight text-gray-200 outline-white">Header</div>
  );
};

const Footer = () => {
  return (
    <div className="bg-fyloBlueFooter outline-white">
      <div className="grid grid-cols-1 mx-5">
        {/** Contact information */}
        <div className="space-y-2">
          <img src="/fylo/logo.svg" className="mx-8 h-12 my-5" />
          <div className="flex space-x-3 outline-white">
            <img src="/fylo/icon-location.svg" className="h-4" />
            <p className="text-gray-200 text-sm max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ac dolor aliquam, consectetur dui at, dapibus felis.
            </p>
          </div>
        </div>

        <div className="space-y-3 my-5">
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
        <div className="outline-white flex-col">
          <div className="grid grid-cols-1 space-y-2 outline-white my-12 w-44">
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
          <div className="grid grid-cols-1 space-y-2 outline-white my-12 w-44">
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
      </div>
      {/** Social */}
      <div className="space-x-2 outline-white flex w-40 h-6 justify-center m-auto">
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
    <div className="flex flex-col items-center outline-white mx-5 my-5 w-56">
      <img src={image} className="w-14" />
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
    <div className="outline-white flex flex-wrap justify-center my-12">
      {features.map((f) => (
        <FeatureSection key={f.title} {...f} />
      ))}
    </div>
  );
};

const StayProductiveSection = () => {
  return (
    <div className="outline-white flex flex-col items-center">
      <img src="/fylo/illustration-stay-productive.png" className="w-72" />
      <h3 className="text-gray-200 mt-5">Stay productive, wherever you are</h3>
      <p className="text-gray-300 text-sm p-6">
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs.
        <br />
        <br />
        Securely share files and folders with friends, family, and colleagues
        for live collaboration. No email attachments required.
      </p>
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
    <div className="outline-white w-64 bg-fyloBlueXLight p-5 rounded-sm mx-5 my-5">
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
    <div className="outline-white flex flex-wrap items-center justify-center my-12">
      {testimonials.map((t) => (
        <TestimonialCard key={t.name} {...t} />
      ))}
    </div>
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
        <h3 className="text-gray-300 outline-white text-center text-xl font-bold m-5">
          All your files in one secure location, accessible anywhere.
        </h3>
        <p className="text-center text-gray-200 text-sm font-thin m-6">
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
      <FeaturesSection />
      <StayProductiveSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default FyloLandingPage;
