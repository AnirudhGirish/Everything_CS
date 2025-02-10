"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
            <Link href={"/"}>
                <MenuItem setActive={setActive} active={active} item="Home">
                </MenuItem>
            </Link>
            <MenuItem setActive={setActive} active={active} item="Courses">
                <div className="flex flex-col space-y-4 text-sm text-center">
                    <HoveredLink href="/courses">All Courses</HoveredLink>
                    <HoveredLink href="/featured">Featured Courses</HoveredLink>
                    <HoveredLink href="/foundation">Foundation Courses</HoveredLink>
                    <HoveredLink href="/advanced">Advanced Courses</HoveredLink>
                </div>
            </MenuItem>
            <Link href={"/contsact"}>
                <MenuItem setActive={setActive} active={active} item="Contact Us">
                </MenuItem>
            </Link>
        </Menu>
    </div>
  )
}

export default Navbar