"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Projects } from "@/components/Projects";
import WaveParticles from "@/components/WaveParticles";

const Home = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  const [progress, setProgress] = useState({ react: 0, next: 0, vr: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress({ react: 90, next: 85, vr: 95 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black-100 min-h-screen px-8">
      <Head>
        <title>Home - Kai's Portfolio</title>
        <meta
          name="description"
          content="Kai's Portfolio - A Creative UX/UI Designer & Programmer based in Bremen"
        />
      </Head>

      {/* Hero Section with Parallax Effect */}
      <motion.div
        className="relative h-[100vh] flex items-center justify-center text-white text-center"
        style={{ scale }}
      >
        <Image
          src="/images/Kai.gif"
          layout="fill"
          objectFit="cover"
          alt="Hero Image"
        />
        <h1 className="z-10 text-5xl bg-black md:text-7xl">Hi! I am Kai.</h1>
      </motion.div>

      {/* About Section */}
      <section className="container mx-auto py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">About Me</h2>
        <p className="text-xl text-center max-w-3xl mx-auto">
        I'm Kai Detmers, a digital designer and programmer from Bremen, Germany. My passion for Digital Media sparked at the tender age of six, and it has only grown since. The ever-evolving landscape of technology fascinates me. I stay current in this dynamic industry through audiobooks, podcasts, and connecting with like-minded individuals at conferences. A particular interest of mine is Virtual Reality. I was among the first backers of Oculus Rift on Kickstarter, and now manage a Facebook Group dedicated to mobile VR, boasting around 3,000 members. Despite the fluctuating hype, I firmly believe in VR as the future of computing.


        </p>
      </section>
      {/* Skills Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div>
            <h4 className="font-bold mb-2">React</h4>
            <div className="h-3 relative w-full rounded-full overflow-hidden">
              <div className="w-full h-full bg-gray-200 absolute"></div>
              <div
                className="h-full bg-green-500 absolute"
                style={{ width: `${progress.react}%` }}
              ></div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Next.js</h4>
            <div className="h-3 relative w-full rounded-full overflow-hidden">
              <div className="w-full h-full bg-gray-200 absolute"></div>
              <div
                className="h-full bg-green-500 absolute"
                style={{ width: `${progress.next}%` }}
              ></div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">VR & AR</h4>
            <div className="h-3 relative w-full rounded-full overflow-hidden">
              <div className="w-full h-full bg-gray-200 absolute">
              </div>
              <div
                className="h-full bg-green-500 absolute"
                style={{ width: `${progress.vr}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>
<Projects />
      {/* Footer */}
      <footer className="bg-gray-900 text-white p-4 text-center w-full">
        <p>© 2023 by Kai. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
