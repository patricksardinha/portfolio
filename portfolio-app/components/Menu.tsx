"use client";

import { ModeToggle } from "@/components/ui/ModeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Menu() {
  return (
    <>
      <div className="flex justify-between w-full fixed z-10 left-2 sm:left-6 top-12">
        <ModeToggle />
        <div className="relative -left-4 sm:-left-12">
          <a href="#">
            <Button variant="outline" size="default">
              <Image
                className="absolute h-[1.2rem] w-[1.2rem] dark:scale-0 scale-100"
                alt="github"
                src="/images/dark_up.png"
                width={50}
                height={50}
              />
              <Image
                className="absolute h-[1.2rem] w-[1.2rem] dark:scale-100 scale-0"
                alt="github"
                src="/images/light_up.png"
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
