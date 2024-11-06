interface IServiceCard {
  service: {
    title: string;
    description: string;
    imgSrc: string;
    alt: string;
  };
  index: number;
}

const ServiceCard = ({ service, index }: IServiceCard) => (
  <div
    className={`flex flex-col lg:flex-row ${
      index % 2 !== 0 ? "lg:flex-row-reverse" : ""
    } items-center gap-x-12 xl:gap-x-24 gap-y-12 w-full`}
  >
    <div className="lg:w-1/2">
      <img className="rounded" src={service.imgSrc} alt={service.alt} />
    </div>
    <div className="lg:w-1/2">
      <h2 className="text-center md:text-left text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
        {service.title}
      </h2>
      <p className="text-center md:text-left text-xl leading-relaxed text-gray-900 mt-9">
        {service.description}
      </p>
    </div>
  </div>
);

export default ServiceCard;
