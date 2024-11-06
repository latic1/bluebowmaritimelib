import React from "react";

const Page = () => {
  return (
    <div>
      <div className="relative w-full h-[320px]" id="home">
        <div className="absolute inset-0">
          <img
            src="/img/container-vessel-4989914_1280.jpg"
            alt="Container Vessel at Sea"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-9 container mx-auto flex flex-col md:flex-row items-center justify-between z-10">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-white text-4xl md:text-5xl leading-tight mb-2 font-semibold">
              About Us
            </h1>
          </div>
        </div>
      </div>

      <section className="py-10 sm:py-16 lg:py-24">
        <div className="container mx-auto">
          <div className="grid items-stretch grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 xl:gap-x-24">
            <div className="relative h-full lg:h-auto">
              <img
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/2/girl-drinking-coffee.jpg"
                alt="Team Member"
              />
            </div>
            <div className="flex items-center justify-start py-10 sm:py-16 lg:py-24">
              <div>
                <p className="text-sm font-semibold tracking-widest uppercase">
                  WHO WE ARE
                </p>
                <h2 className="mt-8 text-xl font-bold leading-tight sm:text-2xl lg:text-3xl">
                  We are a global company offering comprehensive marine and
                  logistics solutions.
                </h2>
                <p className=" leading-relaxed mt-9">
                  Since its inception, Blue Bow Maritime Agency has focused on
                  understanding clients' needs and delivering solutions to
                  foster growth. Our expertise has expanded in size, knowledge,
                  and industry proficiency.
                </p>
                <p className="mt-2  leading-relaxed">
                  As a trusted provider, registered with the Liberia Maritime
                  Organization and other leading institutions, we offer top-tier
                  crew management services, valuing skilled seafarers for
                  quality vessel operations.
                </p>
                <div>
                  <h4 className="mt-6 font-semibold">We are Certified:</h4>
                  <div className="flex gap-4 mt-4">
                    <img src="/img/certification1.png" alt="Certification 1" />
                    <img src="/img/certification2.png" alt="Certification 2" />
                  </div>
                </div>

                <a
                  href="#contact"
                  title="Contact Us"
                  className="inline-flex items-center justify-center px-10 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
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
