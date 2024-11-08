import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const navigation = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about-us" },
    { title: "Service", link: "/services" },
    { title: "Contact", link: "/contact" },
  ];
  const legal = ["Terms", "Privacy", "Legal"];

  return (
    <div className="relative bg-blue-500">
      <Container>
        <div className="mx-auto mt-5 grid max-w-screen-xl grid-cols-1 gap-10 pt-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-white"
              >
                <Image
                  src="/img/logo.jpeg"
                  alt="Blue Bow Maritime Agency Liberia"
                  width="32"
                  height="32"
                  className="w-24"
                />
                {/* <span>Blue Bow Maritime Agency</span> */}
              </Link>
            </div>

            <div className="mt-4 max-w-md text-white">
              Our marine services business specializes in providing
              comprehensive shipping solutions, efficient stevedoring services,
              and reliable P&I insurance coverage for all your maritime needs.
            </div>
          </div>

          <div>
            <div className="-ml-3 -mt-2 flex w-full flex-wrap lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="w-full rounded-md px-4 py-2 text-white hover:text-blue-500 focus:bg-blue-100 focus:text-blue-500 focus:outline-none"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="-ml-3 -mt-2 flex w-full flex-wrap lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.toLowerCase()}`}
                  className="w-full rounded-md px-4 py-2 text-white hover:text-blue-500 focus:bg-blue-100 focus:text-blue-500 focus:outline-none"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-white">
            <div>Follow us</div>
            <div className="mt-5 flex space-x-5">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="py-10 text-center text-sm text-white">
          Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
          <Link
            href="https://linkedin.com/in/musah-latif"
            target="_blank"
            rel="noopener noreferrer"
          >
            HHY.
          </Link>
        </div>
      </Container>
    </div>
  );
}
