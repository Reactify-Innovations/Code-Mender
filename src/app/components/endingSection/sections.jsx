    import React from 'react';
    import { motion } from 'framer-motion';

    const Sections = () => {
    return (
        <div className="text-white min-h-screen w-full max-w-[1200px] mx-auto p-4 xl:p-8 lg:p-12 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Header */}
        <div className="text-center mb-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">How it works</h1>
            <p className="text-gray-400 text-sm md:text-base">
            High speed of engineering, with the same level of confidence.
            </p>
        </div>

        {/* Feature Sections */}
        {[
            {
            id: 1,
            title: "Automated code review",
            description: "Automatically runs checks to keep your code clean.",
            imgSrc: "/section-images/img1.png",
            direction: "md:flex-row",
            animationX: 100,
            },
            {
            id: 2,
            title: "AI pull request review",
            description: "Scans your pull requests, flags problems, and leaves comments.",
            imgSrc: "/section-images/img2.png",
            direction: "md:flex-row-reverse",
            animationX: -100,
            },
            {
            id: 3,
            title: "Code checker",
            description: "Checks your code across multiple languages, helps you catch & fix bugs faster.",
            imgSrc: "/section-images/img3.png",
            direction: "md:flex-row",
            animationX: 100,
            },
        ].map((feature) => (
            <div
            key={feature.id}
            className={`flex flex-col ${feature.direction} items-center gap-8 mb-16 w-full md:w-[90%] relative`}
            >
            {/* Image */}
            <motion.div
                initial={{ opacity: 0, x: feature.animationX }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 rounded-lg p-4 overflow-hidden min-h-[1px] flex items-center justify-center"
            >
                <div className="w-full max-w-[400px] mx-auto">
                <img src={feature.imgSrc} alt="" className="w-full h-auto object-contain" />
                </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, x: feature.animationX }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 space-y-4"
            >
                <div className="flex items-center gap-2">
                <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
                    <span>{feature.id}</span>
                </div>
                <span className="text-purple-400">{feature.title}</span>
                </div>
                <h2 className="text-md md:text-2xl font-bold">{feature.description}</h2>
                <button className="bg-[#26262B] text-[#8D8D99] rounded-full px-4 md:px-6 py-2 flex items-center gap-2 hover:bg-[#26262b96] transition-colors">
                Get started
                </button>
            </motion.div>
            </div>
        ))}
        </div>
    );
    };

    export default Sections;
