"use client";

import React, { useState } from "react";
import Button from "./Button";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);
  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        <Link
          href="/"
          className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          Home
        </Link>
        <Link
          href="/howitwork"
          className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          How Hilink Work?
        </Link>
        <a
          href="/#services"
          className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          Services
        </a>
        <Link
          href="/pricing"
          className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          Pricing
        </Link>
        <a
          href="/#contact"
          className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          Contact Us
        </a>
      </ul>

      <Link className="lg:flexCenter hidden" href="/login">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </Link>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        onClick={toggleSideNav}
        className="inline-block cursor-pointer lg:hidden"
      />
      {isSideNavOpen && (
        <div className="fixed top-0  right-0 h-full w-full bg-black bg-opacity-50 flex justify-end">
          <div className="bg-white dark:text-gray-50 w-80 flex flex-col overflow-y-auto">
            <div className="flex justify-end p-4">
              <FaTimes
                className="text-black dark:text-gray-50 cursor-pointer"
                onClick={toggleSideNav}
                size={30}
              />
            </div>
            {/* Your sidenav content here */}
            <div className="px-4 text-black dark:text-gray-50 flex flex-col">
              <div className="flex flex-col">
                <Link href="/" className="relative py-2 border-b">
                  Home
                </Link>
                <Link href="/howitwork" className="relative py-2 border-b">
                  How Hilink Work?
                </Link>
                <a href="/#services" className="relative py-2 border-b">
                  Services
                </a>
                <Link href="/pricing" className="relative py-2 border-b">
                  Pricing
                </Link>
                <a href="/#contact" className="relative py-2 border-b">
                  Contact Us
                </a>
              </div>
              <Link
                href="/login"
                className="text-black font-bold p-1 text-left"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
/*className="relative py-2 border-b" */
