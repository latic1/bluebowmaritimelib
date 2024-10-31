"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // To get the current path
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export const Navbar = () => {
  const pathname = usePathname(); // Get current route
  const navigation = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Service", link: "/service" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between px-8 py-2 mx-auto lg:justify-between xl:px-1">
        {/* Logo */}
        <Link href="/" aria-label="Homepage">
          <span className="flex items-center space-x-2 text-2xl font-medium">
            <span>
              <Image
                src="/img/bluebowmaritimelib-logo.svg"
                width="200"
                height="200"
                alt="Blue Bow Maritime Agency Liberia Logo"
                className="w-20"
              />
            </span>
            <span>Blue Bow Maritime Agency Liberia</span>
          </span>
        </Link>

        <Disclosure>
          {({ open }) => (
            <>
              <DisclosureButton
                aria-label="Toggle Menu"
                className="px-2 py-1 rounded-md lg:hidden hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none transition-all"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {open ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                    />
                  )}
                </svg>
              </DisclosureButton>

              <DisclosurePanel className="flex flex-col w-full my-5 lg:hidden">
                {navigation.map((item) => (
                  <Link
                    key={item.title}
                    href={item.link}
                    className={`w-full px-4 py-2 rounded-md dark:text-gray-300 hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none ${
                      pathname === item.link ? "font-semibold text-blue-500" : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </DisclosurePanel>
            </>
          )}
        </Disclosure>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center text-center">
          <ul className="flex items-center justify-end flex-1 list-none lg:pt-0">
            {navigation.map((menu) => (
              <li className="mr-3 nav__item" key={menu.title}>
                <Link
                  href={menu.link}
                  className={`inline-block px-4 py-2 text-lg font-normal rounded-md no-underline hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none ${
                    pathname === menu.link ? "font-semibold text-blue-500" : ""
                  }`}
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
