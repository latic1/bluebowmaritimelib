"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navigation = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about-us" },
    { title: "Services", link: "/services" },
    { title: "Contact", link: "/contact" },
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <nav className="container flex items-center justify-between px-8 py-4 mx-auto lg:justify-between xl:px-1">
        {/* Logo */}
        <Link href="/" aria-label="Homepage">
          <div className="flex items-center space-x-2 text-2xl font-semibold cursor-pointer">
            <Image
              src="/img/logo.jpeg"
              width={80}
              height={80}
              alt="Blue Bow Maritime Agency Logo"
              className="w-16 h-auto"
            />
            <span className="hidden sm:block">Blue Bow Maritime Agency</span>
          </div>
        </Link>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle Menu"
          className="px-2 py-1 rounded-md lg:hidden hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none transition-all"
          onClick={toggleDrawer}
        >
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
            />
          </svg>
        </button>

        {/* Drawer Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-20 transform ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden z-50`}
        >
          <button
            aria-label="Close Menu"
            className="absolute top-4 right-4"
            onClick={toggleDrawer}
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            </svg>
          </button>

          <div className="mt-16 flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link key={item.title} href={item.link}>
                <div
                  className={`px-4 py-2 text-lg rounded-md  hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none transition-all cursor-pointer ${
                    pathname === item.link ? "font-semibold text-blue-500" : ""
                  }`}
                  onClick={toggleDrawer}
                >
                  {item.title}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center text-center">
          <ul className="flex items-center justify-end flex-1 list-none lg:pt-0">
            {navigation.map((menu) => (
              <li className="mr-3 nav__item" key={menu.title}>
                <Link href={menu.link}>
                  <div
                    className={`inline-block px-4 py-2 text-lg font-normal rounded-md no-underline hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none transition-all cursor-pointer ${
                      pathname === menu.link
                        ? "font-semibold text-blue-500"
                        : ""
                    }`}
                  >
                    {menu.title}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
