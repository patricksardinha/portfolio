"use client";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export default function Skills() {
  const logoReact = require("../images/react_logo.png");
  const logoAngular = require("../images/angular_logo.png");
  const logoJS = require("../images/javascript_logo.png");
  const logoSymfony = require("../images/symfony_logo.png");
  const logoPython = require("../images/python_logo.png");
  const logoJava = require("../images/java_logo.png");
  const logoBDD = require("../images/bdd_logo.png");
  const logoGit = require("../images/git_logo.png");

  const frontSkills = [
    {
      id: 1,
      name: "React",
      designation: "HTML - CSS",
      image: logoReact,
    },
    {
      id: 2,
      name: "Angular",
      designation: "HTML - CSS",
      image: logoAngular,
    },
    {
      id: 3,
      name: "Javascript",
      designation: "",
      image: logoJS,
    },
    {
      id: 4,
      name: "Symfony",
      designation: "PHP",
      image: logoSymfony,
    },
    {
      id: 5,
      name: "Python",
      designation: "",
      image: logoPython,
    },
    {
      id: 6,
      name: "Java",
      designation: "",
      image: logoJava,
    },
    {
      id: 7,
      name: "SQL - NoSQL",
      designation: "MySQL - MongoDB",
      image: logoBDD,
    },
    {
      id: 8,
      name: "Git",
      designation: "& Agile Methods",
      image: logoGit,
    },
  ];

  return (
    <div className="flex flex-col relative mx-auto items-center justify-center pt-16 md:pt-0 w-full h-full">
      <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full md:w-2/3">
        <AnimatedTooltip items={frontSkills} />
      </div>
    </div>
  );
}
