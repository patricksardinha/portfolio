"use client";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export default function Skills() {
  const logoUnige = require("../images/unige_logo.png");
  const logoVersoie = require("../images/versoie_logo.png");
  const logoHK = require("../images/hk_logo.png");
  const logoUnity = require("../images/unity_logo.png");

  const frontSkills = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image: logoHK,
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image: logoUnige,
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image: logoHK,
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image: logoVersoie,
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image: logoUnige,
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image: logoHK,
    },
  ];

  return (
    <section className="h-screen">
      <div className="flex flex-col relative mx-auto items-center justify-center w-full h-full">
        <div className="flex flex-row items-center justify-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Frontend
          </h3>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white"></h3>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={frontSkills} />
        </div>

        <div className="flex flex-row items-center justify-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Backend
          </h3>
        </div>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={frontSkills} />
        </div>
      </div>
    </section>
  );
}
