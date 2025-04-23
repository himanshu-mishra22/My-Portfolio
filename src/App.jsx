import React from "react";
import "./App.css";
import LeftComponent from "./components/LeftComponent";
import RightComponent from "./components/RightComponent";

export default function App() {
 
  return (
      <div className="min-h-screen bg-base-100 text-base-content p-6">
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
        <LeftComponent />
        <RightComponent />
      </div>
    </div>
  );
}
