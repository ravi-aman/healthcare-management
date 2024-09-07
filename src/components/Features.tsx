"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Features() {
    const cards = data.map((card, index) => (
        <Card key={index} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full py-20 pb-0">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Get to know your hospital management platform.
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <>
            {[...new Array(3).fill(1)].map((_, index) => (
                <div
                    key={"dummy-content" + index}
                    className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                >
                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 dark:text-neutral-200">
                            The first rule of using our platform is exploring all its capabilities.
                        </span>{" "}
                        This feature will streamline hospital management processes and enhance operational efficiency.
                    </p>
                    <Image
                        src="/img1.webp"
                        alt="Feature mockup"
                        height={500}
                        width={500}
                        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                    />
                </div>
            ))}
        </>
    );
};

const data = [
    {
        category: "Hospital Management",
        title: "Manage Beds Effectively",
        src: "/media/beds.jpg",
        content: <DummyContent />,
    },
    {
        category: "Hospital Management",
        title: "Blood Availability Checking",
        src: "/media/doctor.jpg",
        content: <DummyContent />,
    },
    {
        category: "Hospital Management",
        title: "Oxygen Cylinder Availability",
        src: "/media/beds2.jpg",
        content: <DummyContent />,
    },
    {
        category: "Appointment",
        title: "Appointment Scheduling",
        src: "/media/imgh1.jpg",
        content: <DummyContent />,
    },
    {
        category: "Pharmacy",
        title: "Order Medicines with Ease",
        src: "/media/beds.jpg",
        content: <DummyContent />,
    },
    {
        category: "Health Data",
        title: "Earn Tokens for Sharing Health Data",
        src: "/media/doctor.jpg",
        content: <DummyContent />,
    },
];

export default Features;
