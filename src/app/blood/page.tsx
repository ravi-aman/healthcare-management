import ImagesSliderDemo from "@/components/Hero";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial";
import CallToAction from "@/components/CallToAction"
import Features from "@/components/Features"
import BedSearchForm from "@/components/BedsSearchForm";
import BedsHeader from "@/components/BedsHeader";
import BedsPage from "@/components/BedsPage";
import BloodHeader from "@/components/BloodHeader";
import BloodPage from "@/components/BloodPage";
export default function Home() {
    return (
        <main className="flex  flex-col justify-center items-center ">
            <BloodHeader/>
            <BloodPage/>
        </main>
    );
}
