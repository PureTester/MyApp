"use client";
import React from "react";
import Sidebar from "../components/sidebar";
import Calculator from "../components/Calculator";

export default function CalculatorPage() {
  return (
    <div className="flex items-center  justify-center min-h-screen bg-gray-100">
      <title>Калькулятор</title>
      <Sidebar />
      <Calculator data-id="CalculatorPage" />
    </div>
  );
}
