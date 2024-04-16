"use client";

import Image from "next/image";

export default function Experiences() {
  const logoGaea21 = require("../images/gaea21_logo.png");
  const logoR3F = require("../images/r3f_logo.png");
  const logoComingSoon = require("../images/comingSoon_logo.png");

  return (
    <div className="relative mx-auto flex flex-col h-full mt-32 lg:mt-8 items-center justify-center w-full antialiased bg-grid-white/[0.02] overflow-hidden">
      <div className="flex flex-col gap-y-4 justify-center items-center relative">
        <article className="content-center w-2/3 rounded-xl md:pt-16">
          <div className="flex items-start sm:gap-8">
            <div
              className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full border-0 border-gray-500 dark:border-gray-400"
              aria-hidden="true"
            >
              <Image
                className="flex items-center gap-1"
                alt="gaea21"
                width={100}
                height={100}
                src={logoGaea21}
              />
            </div>

            <div className="flex flex-col">
              <div className="flex flex-row gap-2 flex-wrap">
                <strong className="rounded border border-[#00d7fe] bg-[#00d7fe] px-3 py-1.5 text-[18px] font-medium text-white pointer-events-none">
                  React
                </strong>
                <strong className="rounded border border-[#1c2025] bg-[#1c2025] px-3 py-1.5 text-[18px] font-medium text-white pointer-events-none">
                  Symfony
                </strong>
                <strong className="rounded border border-[#7010ef] bg-[#7010ef] px-3 py-1.5 text-[18px] font-medium text-white pointer-events-none">
                  Bootstrap
                </strong>
                <strong className="rounded border border-[#3b688c] bg-[#3b688c] px-3 py-1.5 text-[18px] font-medium text-white pointer-events-none">
                  PHPUnit
                </strong>
                <strong className="rounded border border-[#e69209] bg-[#e69209] px-3 py-1.5 text-[18px] font-medium text-white pointer-events-none">
                  MySQL
                </strong>
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                <a
                  href="https://gaea21.org/"
                  target="_blank"
                  className="hover:underline"
                >
                  {" "}
                  Fullstack Web Developer - gaea21{" "}
                </a>
              </h3>

              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                During my internship at gaea21, I joined the IT team as a
                fullstack developer on the new main website project and I
                participated in the development of new features.
              </p>

              <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                <div className="flex items-center gap-1 text-gray-500">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>

                  <p className="text-md font-medium">9+ Months</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="content-center w-2/3 rounded-xl md:pt-16">
          <div className="flex items-start sm:gap-8">
            <div
              className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full border-0 border-gray-500 dark:border-gray-400"
              aria-hidden="true"
            >
              <Image
                className="flex items-center gap-1"
                alt="gaea21"
                width={0}
                height={0}
                src={logoR3F}
              />
            </div>

            <div>
              <div className="flex flex-row gap-2 flex-wrap">
                <strong className="rounded border border-[#00d7fe] bg-[#00d7fe] px-3 py-1.5 text-[18px] font-medium text-white pointer-events-none">
                  React
                </strong>
                <strong className="hidden lg:block rounded border border-[#5457ff] bg-[#5457ff] px-3 py-1.5 text-[18px] font-medium text-white pointer-events-none">
                  React-Three-Fiber
                </strong>
                <strong className="block lg:hidden rounded border border-[#5457ff] bg-[#5457ff] px-3 py-1.5 text-[18px] font-medium text-white pointer-events-none">
                  R3F
                </strong>
                <strong className="rounded border border-[#38bdf8] bg-[#38bdf8] px-3 py-1.5 text-[18px] font-medium text-white pointer-events-none">
                  Tailwind
                </strong>
                <strong className="rounded border border-[#e37200] bg-[#e37200] px-3 py-1.5 text-[18px] font-medium text-white pointer-events-none">
                  Blender
                </strong>
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                <a
                  href="#"
                  className="hover:underline pointer-events-none text-gray-500"
                >
                  {" "}
                  3D Website & Animations{" "}
                </a>
              </h3>

              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                This project presents an animated 3D avatar in a
                three-dimensional environment and describes the methods and
                tools used to optimize the rendering.
              </p>

              <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                <div className="flex items-center gap-1 text-gray-500">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>

                  <p className="text-md font-medium">3+ Months</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="content-center w-2/3 rounded-xl md:pt-16">
          <div className="flex items-start sm:gap-8">
            <div
              className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full border-0 border-gray-500 dark:border-gray-400"
              aria-hidden="true"
            >
              <Image
                className="flex items-center gap-1"
                alt="gaea21"
                width={100}
                height={100}
                src={logoComingSoon}
              />
            </div>

            <div>
              <h3 className="mt-8 text-2xl font-bold">
                <a href="" className="pointer-events-none">
                  {" "}
                  Coming soon ...{" "}
                </a>
              </h3>

              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                Some other projects I was able to participate in will soon be
                added here.
              </p>

              <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                <div className="flex items-center gap-1 text-gray-500"></div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
