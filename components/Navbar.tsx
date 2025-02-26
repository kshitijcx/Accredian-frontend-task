"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronDown, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="mb-3 flex flex-col gap-4">
      <div className="bg-blue-100 flex space-x-5 text-sm py-2 justify-center max-md:hidden">
        <p>Navigate your ideal career path with tailored expert advice</p>
        <p className="text-[#1A73E8]">Contact Expert</p>
      </div>
      <nav className="flex justify-between px-4 max-md:mt-4">
        <div className="flex gap-3">
          <Image
            src="/logo.png"
            width="300"
            height="75"
            className="w-[125px]"
            alt="logo"
          />
          <Button>
            Courses <ChevronDown />{" "}
          </Button>
        </div>
        <div className="space-x-2 max-md:hidden">
          <Button variant="ghost">Refer & Earn</Button>
          <Button variant="ghost">Resources</Button>
          <Button variant="ghost">About Us</Button>
          <Button variant="secondary">Login</Button>
          <Button>Try for Free</Button>
        </div>
        <div className="max-md:block md:hidden">
            <Menu/>
        </div>
      </nav>
      <div className="w-full">
        <div className="bg-blue-100 rounded-full flex justify-center items-center gap-3 text-xs w-fit mx-auto px-4">
          <p className="hover:bg-blue-500  hover:text-white py-1 px-3 rounded-xl">Refer</p>
          <p className="hover:bg-blue-500  hover:text-white py-1 px-3 rounded-xl">Benefits</p>
          <p className="hover:bg-blue-500  hover:text-white py-1 px-3 rounded-xl">FAQs</p>
          <p className="hover:bg-blue-500  hover:text-white py-1 px-3 rounded-xl">Support</p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
