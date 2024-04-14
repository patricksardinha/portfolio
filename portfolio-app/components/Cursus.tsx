"use client";

import Image from "next/image";

export default function Cursus() {
  const logoUnige = require("../images/unige_logo.png");
  const logoVersoie = require("../images/versoie_logo.png");
  const logoHK = require("../images/hk_logo.png");
  const logoUnity = require("../images/unity_logo.png");

  return (
    <section className="h-screen">
      <div className="px-16 hidden relative mx-auto scale-0 md:scale-100 md:flex flex-col h-full md:items-center md:justify-center w-full antialiased bg-grid-white/[0.02] overflow-hidden">
        <ol className="flex gap-x-16 justify-center items-end relative">
          <li className="w-1/4 ms-4">
            <div className="flex flex-row items-center justify-center">
              <div className="w-3/4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  University of Geneva
                </h3>
                <h4>Bachelor of Science - Computer Sciences</h4>
              </div>
              <div className="w-1/4">
                <Image
                  className=" w-auto h-auto"
                  alt="unige"
                  width={100}
                  height={100}
                  src={logoUnige}
                />
              </div>
            </div>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              My learning during my bachelor{"'"}s degree was very enriching. I
              acquired a lot of knowledge about IT in the broad sense and I had
              the opportunity to participate in a lot of practical work.
            </p>

            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Year 2016 - 2019
            </time>
            <div className="relative w-3 h-3 bg-gray-200 rounded-full -bottom-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          </li>

          <li className="w-1/4 ms-4">
            <div className="flex flex-row items-center justify-center">
              <div className="w-3/4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Honk-Kong University of Science and Technology - Coursera
                </h3>
                <h4>Full-Stack Web Development Formation</h4>
              </div>
              <div className="w-1/4">
                <Image
                  className=" w-auto h-auto"
                  alt="unige"
                  width={100}
                  height={100}
                  src={logoHK}
                />
              </div>
            </div>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              After my university training I decided to follow a formation in
              Full Stack Web development to further specialize in this field.
            </p>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Year 2021 - 2022
            </time>
            <div className="relative w-3 h-3 bg-gray-200 rounded-full -bottom-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          </li>
        </ol>

        <ol className="flex gap-x-16 justify-center items-start relative border-t border-gray-200 dark:border-gray-700">
          <li className="w-1/4 ms-4">
            <div className="relative w-3 h-3 bg-gray-200 rounded-full -top-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Year 2013 - 2016
            </time>
            <div className="flex flex-row items-center justify-center">
              <div className="w-3/4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Lycée de la Versoie
                </h3>
                <h4>General baccalaureate - Scientific Series</h4>
              </div>
              <div className="w-1/4">
                <Image
                  className=" w-auto h-auto"
                  alt="lycée-versoie"
                  width={100}
                  height={100}
                  src={logoVersoie}
                />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white"></h3>
            <h4></h4>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              In high school I discovered programming through the Computer
              Science and Digital Sciences specialty and that{"'"}s where my
              journey began !
            </p>
          </li>

          <li className="w-1/4 ms-4">
            <div className="relative w-3 h-3 bg-gray-200 rounded-full -top-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Year 2019 - 2021
            </time>
            <div className="flex flex-row items-center justify-center">
              <div className="w-3/4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  University of Geneva
                </h3>
                <h4>Master of Science - Computer Sciences</h4>
              </div>
              <div className="w-1/4">
                <Image
                  className=" w-auto h-auto"
                  alt="unige"
                  width={100}
                  height={100}
                  src={logoUnige}
                />
              </div>
            </div>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              During my master{"'"}s degree I gained more and more knowledge and
              I had the opportunity to put them into practice on large-scale
              academic projects.
            </p>
          </li>

          <li className="w-1/4 ms-4">
            <div className="relative w-3 h-3 bg-gray-200 rounded-full -top-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Year 2022 - 2023
            </time>
            <div className="flex flex-row items-center justify-center">
              <div className="w-3/4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Unity Technologies
                </h3>
                <h4>Unity Programmer Formation</h4>
              </div>
              <div className="w-1/4">
                <Image
                  className=" w-auto h-auto"
                  alt="unige"
                  width={100}
                  height={100}
                  src={logoUnity}
                />
              </div>
            </div>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              I also did a formation in the development of real-time 3D
              applications with Unity & Unreal Engine. At the same time, I
              learned to work with 2D and 3D modeling software like Blender for
              exemple.
            </p>
          </li>
        </ol>
      </div>

      <div className="relative scale-100 md:scale-0 flex md:hidden flex-col h-full p-4 md:items-center md:justify-center w-full antialiased bg-grid-white/[0.02] overflow-hidden">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Year 2013 - 2016
            </time>
            <Image
              className=" w-auto h-auto"
              alt="unige"
              width={50}
              height={50}
              src={logoVersoie}
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Lycée de la Versoie
            </h3>
            <h4>General baccalaureate - Scientific Series</h4>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              In high school I discovered programming through the Computer
              Science and Digital Sciences specialty and that{"'"}s where my
              journey began !
            </p>
          </li>

          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Year 2016 - 2019
            </time>
            <Image
              className=" w-auto h-auto"
              alt="unige"
              width={50}
              height={50}
              src={logoUnige}
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              University of Geneva
            </h3>
            <h4>Bachelor of Science - Computer Sciences</h4>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              My learning during my bachelor{"'"}s degree was very enriching. I
              acquired a lot of knowledge about IT in the broad sense and I had
              the opportunity to participate in a lot of practical work.
            </p>
          </li>

          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Year 2019 - 2021
            </time>
            <Image
              className=" w-auto h-auto"
              alt="unige"
              width={50}
              height={50}
              src={logoUnige}
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              University of Geneva
            </h3>
            <h4>Master of Science - Computer Sciences</h4>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              During my master{"'"}s degree I gained more and more knowledge and
              I had the opportunity to put them into practice on large-scale
              academic projects.
            </p>
          </li>

          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Year 2021 - 2022
            </time>
            <Image
              className=" w-auto h-auto"
              alt="unige"
              width={50}
              height={50}
              src={logoHK}
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Honk-Kong University of Science and Technology - Coursera
            </h3>
            <h4>Full-Stack Web Development Formation</h4>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              After my university training I decided to follow a formation in
              Full Stack Web development to further specialize in this field.
            </p>
          </li>

          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Year 2022 - 2023
            </time>
            <Image
              className=" w-auto h-auto"
              alt="unige"
              width={50}
              height={50}
              src={logoUnity}
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Unity Technologies
            </h3>
            <h4>Unity Programmer Formation</h4>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              I also did a formation in the development of real-time 3D
              applications with Unity & Unreal Engine. At the same time, I
              learned to work with 2D and 3D modeling software like Blender for
              exemple.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
