import React from "react";

export const Services = () => {
  return (
    <section className="py-10  sm:py-16 lg:py-24">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold  sm:text-4xl sm:leading-tight">
            Our Services
          </h2>
          <p className="mt-4 text-lg ">
            Dedicated to providing reliable maritime solutions tailored to your
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {[
            {
              title: "Shipping",
              description:
                "Reliable and efficient shipping solutions to ensure your cargo reaches its destination on time, every time.",
              imgUrl: "/img/slied1.jpg",
            },
            {
              title: "Stevedoring",
              description:
                "Expert stevedoring services for smooth, safe, and effective cargo handling, minimizing delays and maximizing efficiency.",
              imgUrl: "/img/jjhkjhk.jpeg",
            },
            {
              title: "P&I Insurance",
              description:
                "Comprehensive P&I insurance for complete protection against maritime liabilities, offering peace of mind for your operations.",
              imgUrl: "/img/slied1.jpg",
            },
            {
              title: "Logistics",
              description:
                "Seamless logistics management, handling every detail of your shipping needs so you can focus on growing your business.",
              imgUrl: "/img/slied1.jpg",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden animate-slideUp"
            >
              <img
                src={service.imgUrl}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-medium text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 ">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
