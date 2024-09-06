"use client"

import * as React from "react"
import Link from "next/link"


import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import { cn } from "@/lib/utils"
import { Icons } from "@/components/Icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Logo from "@/components/Logo"
const components = [
    {
        title: "Check Blood",
        href: "/services/check-blood",
        description: "Quickly locate available blood supplies and manage your inventory with ease.",
    },
    {
        title: "Check Oxygen Cylinders",
        href: "/services/check-oxygen",
        description: "Find and track available oxygen cylinders to ensure timely access.",
    },
    {
        title: "Book Appointment",
        href: "/services/book-appointment",
        description: "Schedule appointments at hospitals or clinics effortlessly.",
    },
    {
        title: "Check Medicine",
        href: "/services/check-medicine",
        description: "Search for and manage medicine availability and inventory efficiently.",
    },
    {
        title: "Check Beds",
        href: "/services/check-beds",
        description: "Find available hospital beds in your area with real-time updates.",
    },
];

export function Header() {
    return (
        <div className="flex flex-row justify-between w-screen bg-black relative top-0" >
            <div className="logo">
                <Logo />
            </div>
            <div className="navigationMenu pt-4">
                <NavigationMenu>
                    <NavigationMenuList>
                    <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Home
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/"
                                            >
                                                <Icons.logo className="h-6 w-6" />
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    Rk
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    Comprehensive healthcare management platform offering bed, blood, oxygen, and medicine tracking, along with appointment scheduling and hospital system management
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href="/pages/hospital" title="Hospital">
                                        Manage hospital systems, register facilities, and track patient services
                                    </ListItem>
                                    <ListItem href="/pages/doctor" title="Doctor">
                                        Find doctors, manage appointments, and access medical profiles.                                    </ListItem>
                                    <ListItem href="/pages/medicine-distributor" title="Medicine Distributor">
                                        Oversee medicine distribution, manage stock, and streamline supply chains.                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {components.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Contact us
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="profile">
                <div className="flex items-center justify-between px-10 py-5 w-100">
                    {/* Render different components based on sign-in status */}
                    <SignedIn>
                        {/* Display the user's profile or menu through UserButton */}
                        <UserButton />
                    </SignedIn>

                    <SignedOut>
                        {/* Show the SignInButton when the user is not signed in */}

                        <SignInButton />
                    </SignedOut>
                </div>
            </div>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
