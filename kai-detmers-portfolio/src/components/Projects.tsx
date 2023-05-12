// components/Projects.tsx
import React from "react";
import Card from "./Card";

export const Projects: React.FC = () => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-8">Projects</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        <Card   href="https://www.example.com"
 title="Corporate Identity" text="Dream Machine" image="/images/DreamMachine.png" />
        <Card   href="https://www.example.com"
 title="Logos" text="DTV DEVILS" image="/images/Devils.png" />
        <Card   href="https://www.example.com"
 title="Smart Home" text="Alexa Skill Teehelfer" image="/images/TeeHelfer.png" />
        <Card   href="https://www.example.com"
 title="VR Startup" text="REVEL" image="/images/kleiner.png" />
        <Card   href="https://www.example.com"
 title="Biggest VR Blog in Benelux" text="TwistedReality" image="/images/Logo klein.png" />
      </div>
    </div>
  );
};