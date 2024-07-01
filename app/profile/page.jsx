"use client";
import React from "react";
import Profile from "./Profile";
import Navbar from "@/components/Navbar";
const page = () => {
  return (
    <div className="flex">
      <Navbar />
      <Profile />
    </div>
  );
};

export default page;
