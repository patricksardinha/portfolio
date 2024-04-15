"use client";

import { ModeToggle } from "@/components/ui/ModeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Menu() {
  const logoDarkUp = require("../images/dark_up.png");
  const logoLightUp = require("../images/light_up.png");

  return (
    <>
      <div className="fixed z-10 left-12 top-12">
        <ModeToggle />
        <div className="relative mt-8">
          <a href="#">
            <Button variant="outline" size="default">
              <Image
                className="absolute h-[1.2rem] w-[1.2rem] dark:scale-0 scale-100"
                alt="github"
                src={logoDarkUp}
                width={50}
                height={50}
              />
              <Image
                className="absolute h-[1.2rem] w-[1.2rem] dark:scale-100 scale-0"
                alt="github"
                src={logoLightUp}
                width={50}
                height={50}
              />
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
