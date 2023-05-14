import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { Header } from "../components/Header";

const AugmentedReality = () => {
    return (
        <div className="container mx-auto px-6 py-8">
            <Head>
                <title>Project Article - Kai's Portfolio</title>
                <meta name="description" content="Detailed article about my project" />
            </Head>
            <Header />

            <h1 className="text-3xl font-bold mb-4">Project Title</h1>

            <video controls className="mb-4 w-full">
                <source src="/path-to-your/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <h2 className="text-2xl font-bold mb-4">Project Description</h2>
            <p className="mb-4">
                Detailed description about your project...
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Image
                    src="/path-to-your/image1.jpg"
                    alt="Project Image 1"
                    width={500}
                    height={300}
                />
                <Image
                    src="/path-to-your/image2.jpg"
                    alt="Project Image 2"
                    width={500}
                    height={300}
                />
            </div>

            <p>
                More details about your project...
            </p>
        </div>
    );
};

export default AugmentedReality;