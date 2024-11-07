import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="pt-[90px]">
      <div className="relative h-[320px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/container-vessel-4989914_1280.jpg"
            alt="Container Vessel at Sea"
            layout="fill"
            objectFit="cover"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-black/60"
            aria-hidden="true"
          ></div>
        </div>
        <div className="container absolute inset-9 z-10 mx-auto flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0 md:w-1/2">
            <h1 className="mb-2 text-4xl font-semibold leading-tight text-white md:text-5xl">
              About Us{" "}
            </h1>
          </div>
        </div>
      </div>

      <section className="py-10 sm:py-16 lg:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 items-stretch gap-x-16 gap-y-12 lg:grid-cols-2 xl:gap-x-24">
            <div className="relative h-full lg:h-auto">
              <img
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/2/girl-drinking-coffee.jpg"
                alt="Team Member"
              />
            </div>
            <div className="flex items-center justify-start py-10 sm:py-16 lg:py-24">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest">
                  WHO WE ARE
                </p>
                <h2 className="mt-8 text-xl font-bold leading-tight sm:text-2xl lg:text-3xl">
                  We are a global company offering comprehensive marine and
                  logistics solutions.
                </h2>
                <p className="mt-9 leading-relaxed">
                  Since its inception, Blue Bow Maritime Agency has focused on
                  understanding clients' needs and delivering solutions to
                  foster growth. Our expertise has expanded in size, knowledge,
                  and industry proficiency.
                </p>
                <p className="mt-2 leading-relaxed">
                  As a trusted provider, registered with the Liberia Maritime
                  Organization and other leading institutions, we offer top-tier
                  crew management services, valuing skilled seafarers for
                  quality vessel operations.
                </p>
                <div>
                  <h4 className="mt-6 font-semibold">We are Certified:</h4>
                  <div className="mt-4 flex gap-4">
                    <img src="/img/certification1.png" alt="Certification 1" />
                    <img src="/img/certification2.png" alt="Certification 2" />
                  </div>
                </div>

                <a
                  href="#contact"
                  title="Contact Us"
                  className="mt-12 inline-flex items-center justify-center rounded-md bg-blue-600 px-10 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
