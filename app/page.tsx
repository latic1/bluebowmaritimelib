import { Carousel } from "@/components/Carousel";
import { About } from "@/components/About";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <div className="pt-[95px]">
      <Carousel />
      <About />
      <Services />
    </div>
  );
}
