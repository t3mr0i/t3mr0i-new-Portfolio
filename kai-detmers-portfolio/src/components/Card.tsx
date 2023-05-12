import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  text: string;
  image: string;
  href: string;
}

const Card: React.FC<CardProps> = ({ title, text, image, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block transform transition duration-200 ease-in-out hover:scale-105 hover:shadow-lg">
      <div className="project-card bg-white shadow-md rounded-lg p-4">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <Image
          src={image}
          alt={`${title} - ${text}`}
          width={500}
          height={500}
          className="rounded-md mb-2 object-cover"
        />
        <p>{text}</p>
      </div>
    </a>
  );
};

export default Card;
