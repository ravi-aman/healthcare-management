"use client";
import React from "react";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";

const people = [
    {
        id: 1,
        name: "Ravikant Tiwari",
        designation: "Employee",
        image: "/media/imgh1.jpg",
    },
    {
        id: 2,
        name: "Vikas",
        designation: "Caption",
        image: "/media/imgh1.jpg",
    },
    {
        id: 3,
        name: "Ansh",
        designation: "Caption",
        image: "/media/imgh1.jpg",
    },
    {
        id: 4,
        name: "Priyanshu",
        designation: "Developer",
        image: "/media/imgh1.jpg", 
    },
    {
        id: 5,
        name: "Vishal",
        designation: "Vice Caption",
        image: "/media/imgh1.jpg",
    },
];

export function TeamMember() {
    return (
        <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={people} />
        </div>
    );
}
export default TeamMember;
