import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const navigation = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Service", link: "/service" },
    { title: "Contact", link: "/contact" },
  ];
  const legal = ["Terms", "Privacy", "Legal"];
  
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-blue-500">
                <Image
                  src="/img/bluebowmaritimelib-logo.svg"
                  alt="Blue Bow Maritime Agency Liberia"
                  width="32"
                  height="32"
                  className="w-8"
                />
                <span>Blue Bow Maritime Agency Liberia</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              Our marine services business specializes in providing
              comprehensive shipping solutions, efficient stevedoring services,
              and reliable P&I insurance coverage for all your maritime needs.
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.toLowerCase()}`}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div>Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
          <a href="https://linkedin.com/in/musah-latif" target="_blank" rel="noopener noreferrer">
            Musah Latif.
          </a>
        </div>
      </Container>
    </div>
  );
}
