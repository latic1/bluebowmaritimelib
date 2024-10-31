import React from "react";

export const About = () => {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
          <div className="relative mb-12">
            <img
              className="w-full rounded-md"
              src="/img/dsfd.webp"
              alt="Teamwork in action"
            />
          </div>

          <div>
            <h2 className="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-2xl lg:leading-tight">
              Your Trusted Partner in Maritime Solutions
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Specializing in end-to-end shipping solutions, expert stevedoring
              services, and robust P&I insurance coverage, we’re here to
              safeguard and streamline all your maritime operations.
              <br />
              <br />
              With years of industry expertise, our team ensures smooth,
              efficient management from cargo handling to vessel protection. Our
              commitment to excellence means you receive not only dependable
              service but a partnership that anticipates and exceeds your needs.
            </p>
            <a
              href="#"
              title="Contact Us"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
              role="button"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
