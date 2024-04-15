"use client";

import Image from "next/image";

export default function Header() {
  const imgMe = require("../images/me_LowPoly.png");
  const scrollLight = require("../images/scroll_to_explore_black.gif");
  const scrollDark = require("../images/scroll_to_explore_white.gif");
  const logoGithub = require("../images/github_logo.png");
  const logoLinkedIn = require("../images/linkedin_logo.png");

  return (
    <div className="flex flex-col gap-y-16 h-full md:items-center md:justify-center w-full antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="flex flex-col md:flex-row gap-x-8 w-full">
        <div className="flex flex-col justify-center items-end basis-3/5 max-w-7xl mx-auto relative z-10 w-full ">
          <h1 className="text-3xl md:text-6xl font-bold">
            Patrick Sardinha. <br />
          </h1>

          <p className="text-lg md:text-2xl font-normal mt-8">
            I am Fullstack developper, Welcome to my website.
          </p>

          <div className="flex flex-row mt-8 gap-x-6">
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
        <div className="flex justify-start items-center basis-2/5 max-w-7xl mx-auto relative z-10 w-full">
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
