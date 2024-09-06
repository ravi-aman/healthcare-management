"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

export function CallToAction() {
    return (
        <div className="flex justify-center items-center h-[40rem] flex-col px-4">
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-center text-neutral-800 dark:text-neutral-100 mb-8">
                Join Our Healthcare Platform
            </h1>

            {/* Main Call to Action Message */}
            <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10 text-center">
                Are you a{" "}
                <LinkPreview url="https://your-hospital-link.com" className="font-bold">
                    hospital administrator
                </LinkPreview>
                ,{" "}
                <LinkPreview url="https://your-doctor-link.com" className="font-bold">
                    doctor
                </LinkPreview>
                , or{" "}
                <LinkPreview url="https://your-medicine-distributor-link.com" className="font-bold">
                    medicine distributor
                </LinkPreview>
                ? Join us now and be part of a seamless platform for healthcare professionals and distributors!
            </p>

            {/* Darker Join Button */}
            <motion.button
                className="px-6 py-3 bg-gradient-to-br from-gray-800 to-black text-white text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Join Now →
            </motion.button>
        </div>
    );
}

export default CallToAction;
