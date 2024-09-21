
import BedsHeader from "@/components/BedsHeader";
import BedsPage from "@/components/BedsPage";
export default function Home() {
    return (
        <main className="flex  flex-col justify-center items-center ">
            <BedsHeader/>
            <BedsPage/>
        </main>
    );
}
