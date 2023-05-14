// components/Card.tsx
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type CardProps = {
  href: string;
  title: string;
  text: string;
  image: string;
};

const Card: React.FC<CardProps> = ({ href, title, text, image }) => {
  return (
    <Link href={href}>
      <motion.a 
        className="card bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-500 hover:shadow-xl"
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
        transition={{ duration: 0.5 }}
      >
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="p-4">
          <h3 className="font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{text}</p>
        </div>
      </motion.a>
    </Link>
  );
};

export default Card;
