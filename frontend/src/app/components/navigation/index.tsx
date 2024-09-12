"use client";
import { useState } from "react";
import Navbar from "./navbar";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar/>
    </>
  );
};

export default Navigation;