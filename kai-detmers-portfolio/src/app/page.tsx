"use client";
import React from "react";
import Head from "next/head";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";
import Card from "../components/Card";
import Image from "next/image";
import { motion } from "framer-motion";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { ProgressBar } from "react-bootstrap";

const Home = () => {
  return (
    <ParallaxProvider>
      <div className="bg-black-100 min-h-screen">
        <Head>
          <title>Home - Kai's Portfolio</title>
          <meta
            name="description"
            content="Kai's Portfolio - A Creative UX/UI Designer & Programmer based in Bremen"
          />
        </Head>
        <Header />

        {/* Hero Section with Parallax Effect */}
        <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
          <div className="relative h-[100vh]">
            <Image
              src="/images/backgroundHero.png"
              layout="fill"
              objectFit="cover"
              alt="Hero Image"
            />
          </div>
        </Parallax>

        {/* About Section */}
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mb-6"
          >
            I'm Kai Detmers, a digital designer and programmer from Bremen, Germany. My passion for Digital Media sparked at the tender age of six, and it has only grown since. The ever-evolving landscape of technology fascinates me. I stay current in this dynamic industry through audiobooks, podcasts, and connecting with like-minded individuals at conferences. A particular interest of mine is Virtual Reality. I was among the first backers of Oculus Rift on Kickstarter, and now manage a Facebook Group dedicated to mobile VR, boasting around 3,000 members. Despite the fluctuating hype, I firmly believe in VR as the future of computing.
          </motion.p>

          {/* Skills Section */}
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="mb-6">
            <h4>React</h4>
            <ProgressBar animated now={90} />
            <h4>Next.js</h4>
            <ProgressBar animated now={85} />
            <h4>VR & AR</h4>
            <ProgressBar animated now={95} />
            {/* Add more skills as needed */}
          </div>
        </div>

        <Projects />

        <footer className="bg-gray-900 text-white p-4 text-center w-full">
          <p>© 2023 by Kai. All rights reserved.</p>
        </footer>
      </div>
    </ParallaxProvider>
  );
};

export default Home;
