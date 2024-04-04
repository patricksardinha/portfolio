"use client";

export default function Cursus() {
  return (
    <section className="h-screen">
      <div className="hidden relative mx-auto scale-0 md:scale-100 md:flex flex-col h-full md:items-center md:justify-center w-full antialiased bg-grid-white/[0.02] overflow-hidden">
        <ol className="flex gap-x-16 justify-center items-end relative">
          <li className="w-1/4 ms-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              University of Geneva
            </h3>
            <h4>Bachelor of Science - Computer Sciences</h4>
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
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Honk-Kong University of Science and Technology - Coursera
            </h3>
            <h4>Full-Stack Web Development Formation</h4>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
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

          <li className="w-1/4 ms-4">
            <div className="relative w-3 h-3 bg-gray-200 rounded-full -top-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Year 2019 - 2021
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              University of Geneva
            </h3>
            <h4>Master of Science - Computer Sciences</h4>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </p>
          </li>

          <li className="w-1/4 ms-4">
            <div className="relative w-3 h-3 bg-gray-200 rounded-full -top-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Year 2022 - 2023
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Unity Technologies
            </h3>
            <h4>Unity Programmer Formation</h4>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </p>
          </li>
        </ol>
      </div>

      <div className="relative scale-100 md:scale-0 flex md:hidden flex-col h-full p-4 md:items-center md:justify-center w-full antialiased bg-grid-white/[0.02] overflow-hidden">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              February 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Application UI code in Tailwind CSS
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              March 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Marketing UI design in Figma
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </p>
          </li>
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              April 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              E-Commerce UI code in Tailwind CSS
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
