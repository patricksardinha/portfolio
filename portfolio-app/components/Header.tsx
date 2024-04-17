"use client";

import Image from "next/image";

export default function Header() {
  const imgMe = require("../images/me_LowPoly.png");
  const scrollLight = require("../images/scroll_to_explore_black.gif");
  const scrollDark = require("../images/scroll_to_explore_white.gif");
  const logoGithub = require("../images/github_logo.png");
  const logoLinkedIn = require("../images/linkedin_logo.png");

  return (
    <div className="flex flex-col gap-y-32 w-full h-full items-center justify-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full gap-x-8">
        <div className="flex flex-col text-center sm:text-end basis-3/5 xl:basis-7/12 max-w-7xl z-10 ">
          <div className="sm:ml-4 md:ml-0 sm:mr-12 md:mr-0">
            <h1 className="text-5xl lg:text-6xl font-bold">
              Patrick Sardinha. <br />
            </h1>

            <p className="text-xl lg:text-2xl font-normal mt-8">
              I am Fullstack developper, Welcome to my website.
            </p>

            <div className=" flex flex-col sm:flex-row gap-6 sm:gap-8 justify-end items-center mt-8">
              <a href="https://github.com/patricksardinha" target="_blank">
                <button
                  type="button"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  className="flex flex-row text-center align-middle gap-x-2 rounded-xl bg-[#333] p-3 px-5 text-lg font-medium leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                >
                  <Image
                    className="w-8 h-8"
                    alt="github"
                    src={logoGithub}
                    width={30}
                    height={30}
                  />
                  <div className="mt-1 flex text-center justify-center items-center">
                    <p>My Github</p>
                  </div>
                </button>
              </a>

              <a
                href="https://www.linkedin.com/in/patrick-sardinha"
                target="_blank"
              >
                <button
                  type="button"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  className="flex flex-row text-center align-middle gap-x-2 rounded-xl bg-[#0077b5] p-3 px-5 text-lg font-medium leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                >
                  <Image
                    className="w-8 h-8"
                    alt="github"
                    src={logoLinkedIn}
                    width={20}
                    height={20}
                  />
                  <div className="mt-1 flex text-center justify-center items-center">
                    <p>My LinkedIn</p>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-start items-center basis-2/5 xl:basis-5/12 max-w-7xl mx-auto relative z-10 w-full">
          <Image
            className="rounded-full mb-8"
            alt="me"
            width={300}
            height={300}
            src={imgMe}
          />
        </div>
      </div>
      <div className="flex justify-center items-center relative z-10 w-full">
        <Image
          className="absolute rounded-full dark:scale-0 scale-100"
          alt="scroll down"
          width={75}
          height={75}
          src={scrollLight}
        />
        <Image
          className="absolute rounded-full dark:scale-100 scale-0"
          alt="scroll down"
          width={75}
          height={75}
          src={scrollDark}
        />
      </div>
    </div>
  );
}
