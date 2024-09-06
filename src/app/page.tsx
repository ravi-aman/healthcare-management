import ImagesSliderDemo from "@/components/Hero";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer"
import Features from "@/components/Features"
export default function Home() {
  return (
    <main className="flex  flex-col justify-center items-center ">

      <ImagesSliderDemo />
      <Service />
      <Testimonial/>
      <Features/>
    </main>
  );
}
