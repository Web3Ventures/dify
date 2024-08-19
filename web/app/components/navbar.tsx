"use client";
import * as React from "react";
import { Button } from "@/app/components/base/button";
import SiteLogo from "@/app/components/base/logo/logo-site";
import Link from "next/link";

export default function navbar() {
  const handleNavigation = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-2 left-0 right-0  text-black  z-50  p-4  ">
      <div className="flex max-w-7xl bg-white mx-auto justify-between items-center border px-2 rounded-full   h-[48px] backdrop-blur-xl">
        <div className="flex items-center gap-3 ">
          <Link href="/">
            <SiteLogo />
          </Link>
        </div>

        <div className="flex  items-center gap-4 mr-2 text-sm">
          <Link href="/prices" className="cursor-pointer">
            Prices
          </Link>
          <div
            onClick={() => handleNavigation("features")}
            className="cursor-pointer"
          >
            Features
          </div>
          <div
            onClick={() => handleNavigation("intergartions")}
            className="cursor-pointer"
          >
            Integration
          </div>
        </div>
      </div>
    </nav>
  );
}
