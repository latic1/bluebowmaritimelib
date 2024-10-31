"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { slides } from "@/Static";
import { ChevronRightIcon } from "lucide-react";

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      // Initialize autoplay after Embla API is ready
      Autoplay(emblaApi);
    }
  }, [emblaApi]);
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="embla__slide relative flex h-[20rem] items-center justify-start  lg:h-[45rem]"
          >
            <div className="absolute z-20 flex h-full flex-col justify-center p-10 text-center text-white sm:px-24 md:w-2/3 md:text-left">
              <h1 className="mb-2 text-2xl font-black sm:text-3xl lg:text-6xl ">
                {slide.header}
              </h1>
              <p className="mb-2 font-semibold text-xl">{slide.details}</p>
              <div className="mt-5">
                {" "}
                <Link href="/contact-us">
                  {" "}
                  <button className="bg-white text-black py-4 px-6 rounded-full flex items-center">
                    Contact Us <ChevronRightIcon />{" "}
                  </button>
                </Link>
              </div>
            </div>
            <div className=" absolute bg-black top-0 left-0 opacity-50 h-full w-full z-10"></div>
            <Image
              src={slide.image}
              alt="Background image"
              layout="fill"
              objectFit="cover"
              className="-z-1 absolute top-0 h-full w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
