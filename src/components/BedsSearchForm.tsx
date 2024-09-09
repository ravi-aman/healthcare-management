"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IconSearch, IconLocation } from "@tabler/icons-react"; 

export function BedSearchForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Bed search submitted");
    };

    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Search for Beds
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Find available beds in hospitals near you.
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
                <LabelInputContainer>
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="City or Hospital Name" type="text" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="bedType">Bed Type</Label>
                    <Input id="bedType" placeholder="ICU, General, etc." type="text" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="availability">Availability</Label>
                    <Input id="availability" placeholder="Available from date" type="date" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-8">
                    <Label htmlFor="hospital">Hospital</Label>
                    <Input id="hospital" placeholder="Hospital Name" type="text" />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Search &rarr;
                    <BottomGradient />
                </button>
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
export default BedSearchForm;