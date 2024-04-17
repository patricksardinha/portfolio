"use client";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export default function Skills() {
  const frontSkills = [
    {
      id: 1,
      name: "React",
      designation: "HTML - CSS",
      image: "/images/react_logo.png",
    },
    {
      id: 2,
      name: "Angular",
      designation: "HTML - CSS",
      image: "/images/angular_logo.png",
    },
    {
      id: 3,
      name: "Javascript",
      designation: "",
      image: "/images/javascript_logo.png",
    },
    {
      id: 4,
      name: "Symfony",
      designation: "PHP",
      image: "/images/symfony_logo.png",
    },
    {
      id: 5,
      name: "Python",
      designation: "",
      image: "/images/python_logo.png",
    },
    {
      id: 6,
      name: "Java",
      designation: "",
      image: "/images/java_logo.png",
    },
    {
      id: 7,
      name: "SQL - NoSQL",
      designation: "MySQL - MongoDB",
      image: "/images/bdd_logo.png",
    },
    {
      id: 8,
      name: "Git",
      designation: "& Agile Methods",
      image: "/images/git_logo.png",
    },
  ];

  return (
    <div className="flex flex-col relative mx-auto items-center justify-center mt-32 lg:mt-8 w-full h-full lg:h-2/3">
      <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full md:w-2/3">
        <AnimatedTooltip items={frontSkills} />
      </div>
    </div>
  );
}
