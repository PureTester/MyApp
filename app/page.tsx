"use client";
import React from "react";
import Image from "next/image";
import Sidebar from "./components/sidebar";
export default function Home() {
  return (
    <div>
      <Sidebar />
      <div>
        <Image
          data-id="mainPageImage"
          className="ml-[270px]"
          src="/tenor.gif"
          alt="Pudge"
          width={1280}
          height={1024}
        />
      </div>
    </div>
  );
}
