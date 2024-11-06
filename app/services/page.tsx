import ServiceCard from "@/components/ServiceCard";
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

const ServicesPage = () => (
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
          Services
        </h1>
      </div>
    </div>
  </div>

  <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:space-y-20 sm:space-y-14 space-y-10">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} />
      ))}
    </div>
  </section>
</div>
);

export default ServicesPage;
