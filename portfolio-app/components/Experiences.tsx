"use client";

import Image from "next/image";

export default function Experiences() {
  const logoGaea21 = require("../images/gaea21_logo.png");

  return (
    <section className="h-screen">
      <div className="relative mx-auto flex flex-col h-full items-center justify-center w-full antialiased bg-grid-white/[0.02] overflow-hidden">
        <div className="flex flex-col gap-y-16 justify-center items-center relative">
          <article className="content-center w-2/3 rounded-xl p-4 ring ring-gray-200 dark:ring-gray-400 sm:p-6 lg:p-8">
            <div className="flex items-start sm:gap-8">
              <div
                className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full border-0 border-gray-500 dark:border-gray-400"
                aria-hidden="true"
              >
                <Image
                  className="flex items-center gap-1 rounded-full"
                  alt="gaea21"
                  width={100}
                  height={100}
                  src={logoGaea21}
                />
              </div>

              <div>
                <div className="flex flex-row gap-x-2">
                  <strong className="rounded border border-[#00d7fe] bg-[#00d7fe] px-3 py-1.5 text-[10px] font-medium text-white pointer-events-none">
                    React
                  </strong>
                  <strong className="rounded border border-[#1c2025] bg-[#1c2025] px-3 py-1.5 text-[10px] font-medium text-white pointer-events-none">
                    Symfony
                  </strong>
                  <strong className="rounded border border-[#3b688c] bg-[#3b688c] px-3 py-1.5 text-[10px] font-medium text-white pointer-events-none">
                    PHPUnit
                  </strong>
                  <strong className="rounded border border-[#e69209] bg-[#e69209] px-3 py-1.5 text-[10px] font-medium text-white pointer-events-none">
                    MySQL
                  </strong>
                </div>

                <h3 className="mt-4 text-lg font-medium sm:text-xl">
                  <a href="#" className="hover:underline">
                    {" "}
                    Fullstack Web Developer - gaea21{" "}
                  </a>
                </h3>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  During my internship at gaea21, I joined the IT team as a
                  fullstack developer on the new main website project and I
                  participated in the development of new features.
                </p>
                <p>
                  this project presents an animated 3d avatar in a
                  three-dimensional environment and describes the methods and
                  tools used to optimize the rendering
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

                    <p className="text-xs font-medium">9+ Mounths</p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="content-center w-2/3 rounded-xl p-4 ring ring-gray-200 dark:ring-gray-700 sm:p-6 lg:p-8">
            <div className="flex items-start sm:gap-8">
              <div
                className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full border-2 bg-gray-200 dark:bg-gray-700 border-gray-200 dark:border-gray-700"
                aria-hidden="true"
              >
                <Image
                  className="flex items-center gap-1 rounded-full"
                  alt="gaea21"
                  width={100}
                  height={100}
                  src={logoGaea21}
                />
              </div>

              <div>
                <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
                  Episode #101
                </strong>

                <h3 className="mt-4 text-lg font-medium sm:text-xl">
                  <a href="#" className="hover:underline">
                    {" "}
                    3D Website & Animations{" "}
                  </a>
                </h3>

                <p className="mt-1 text-sm text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsam nulla amet voluptatum sit rerum, atque, quo culpa ut
                  necessitatibus eius suscipit eum accusamus, aperiam voluptas
                  exercitationem facere aliquid fuga. Sint.
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

                    <p className="text-xs font-medium">48:32 minutes</p>
                  </div>

                  <span className="hidden sm:block" aria-hidden="true">
                    &middot;
                  </span>

                  <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                    Featuring{" "}
                    <a href="#" className="underline hover:text-gray-700">
                      Barry
                    </a>
                    ,
                    <a href="#" className="underline hover:text-gray-700">
                      Sandra
                    </a>{" "}
                    and
                    <a href="#" className="underline hover:text-gray-700">
                      August
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
