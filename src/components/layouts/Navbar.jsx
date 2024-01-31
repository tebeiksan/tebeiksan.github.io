import Image from "next/image";
import Link from "next/link";
import React from "react";

const navigations = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "About", path: "/about" },
  { id: 2, label: "Project", path: "/project" },
];

export default function Navbar() {
  return (
    <div className=" fixed left-0 right-0 top-0 bg-white/80 backdrop-blur-sm">
      <div
        className="container flex w-full items-center justify-between px-5 md:px-[5rem] "
        style={{ height: `var(--navbar-height)` }}
      >
        <Image src="/next.svg" height="25" width="100" alt="" />
        <div className="flex gap-5 ">
          {navigations.map((nav) => (
            <Link href={nav.path} key={nav.id}>
              {nav.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
