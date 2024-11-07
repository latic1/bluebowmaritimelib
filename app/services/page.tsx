import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Stevedoring",
    description: `Our expert stevedoring services streamline cargo handling,
      reducing turnaround times and ensuring the secure and efficient transfer of goods.
      Using advanced equipment and proven handling methods, we cater to all cargo types—whether
      bulk, breakbulk, or containerized. Our highly trained stevedores work in line with strict
      safety protocols to optimize dockside operations, helping you meet tight schedules and
      maintain a seamless workflow at the port.`,
    imgSrc: "/img/jjhkjhk.jpeg",
    alt: "Stevedoring services in action",
  },
  {
    title: "Shipping",
    description: `With our comprehensive shipping solutions, we prioritize punctuality, reliability,
      and cargo safety. We coordinate every stage of the shipping process to ensure your cargo
      arrives on schedule and in pristine condition. From navigating complex logistics to handling
      customs compliance, we tailor our services to meet the specific demands of each shipment.`,
    imgSrc: "/img/Shippingimg.jpeg",
    alt: "Shipping services in action",
  },
  {
    title: "P&I Insurance",
    description: `We offer comprehensive Protection & Indemnity (P&I) insurance to safeguard your
      maritime operations against unforeseen liabilities. Covering risks like third-party injury,
      pollution, and cargo damage, our P&I insurance provides peace of mind. Our team ensures
      you have the financial protection needed to maintain smooth operations.`,
    imgSrc: "/img/jjhkjhk.jpeg",
    alt: "Insurance services in action",
  },
  {
    title: "Logistics",
    description: `Our end-to-end logistics solutions simplify and streamline your supply chain,
      allowing you to focus on growth. From warehousing and inventory to final-mile delivery,
      we support your business objectives with transparent tracking, efficient routing, and
      strategic planning.`,
    imgSrc: "/img/Logisticsimg.jpeg",
    alt: "Logistics services in action",
  },
];

const ServicesPage = () => {
  return (
    <div className="pt-[90px] relative w-full z-0">
      {" "}
      {/* Adjust top padding based on navbar height */}
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
              Services
            </h1>
          </div>
        </div>
      </div>
      <section className="bg-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:space-y-14 sm:px-6 lg:space-y-20 lg:px-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
