import React from 'react';
import { motion } from 'framer-motion';

const CodeReviewComponent = () => {
return (
    <div className="text-white min-h-screen w-full xl:w-[70%] mx-auto p-4 xl:p-8 lg:p-12 flex flex-col items-center justify-center relative">
    {/* Header */}
    <div className="text-center mb-12 relative">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">How it works</h1>
        <p className="text-gray-400 text-sm md:text-base">
        High speed of engineering, with the same level of confidence.
        </p>
    </div>

    {/* Feature 1 - Automated Code Review */}
    <div className="flex flex-col md:flex-row items-center gap-8 mb-16 w-full md:w-[90%] relative">
        <motion.div 
        initial={{ opacity: 0, x: 100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6 }} 
        viewport={{ once: true }} 
        className="w-full md:w-1/2 rounded-lg p-4 overflow-hidden relative"
        >
        <div className="w-auto xl:w-[400px] mx-auto">
            <img src="/section-images/img1.png" alt="" />
        </div>
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, x: 100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6 }} 
        viewport={{ once: true }} 
        className="w-full md:w-1/2 space-y-4 relative"
        >
        <div className="flex items-center gap-2">
            <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
            <span>1</span>
            </div>
            <span className="text-purple-400">Automated code review</span>
        </div>
        <h2 className="text-md md:text-2xl font-bold">
            Automatically runs checks to keep your code clean.
        </h2>
        <button className="bg-[#26262B] text-[#8D8D99] rounded-full px-4 md:px-6 py-2 flex items-center gap-2 hover:bg-[#26262b96] transition-colors relative">
            Get started
        </button>
        </motion.div>
    </div>

    {/* Feature 2 - AI Pull Request Review */}
    <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16 w-full md:w-[90%] relative">
        <motion.div 
        initial={{ opacity: 0, x: -100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6 }} 
        viewport={{ once: true }} 
        className="w-full md:w-1/2 rounded-lg p-4 overflow-hidden relative"
        >
        <div className="w-auto xl:w-[400px] mx-auto">
            <img src="/section-images/img2.png" alt="" />
        </div>
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, x: -100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6 }} 
        viewport={{ once: true }} 
        className="w-full md:w-1/2 space-y-4 relative"
        >
        <div className="flex items-center gap-2">
            <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
            <span>2</span>
            </div>
            <span className="text-purple-400">AI pull request review</span>
        </div>
        <h2 className="text-md md:text-2xl font-bold">
            Scans your pull requests, flags problems, and leaves comments.
        </h2>
        <button className="bg-[#26262B] text-[#8D8D99] rounded-full px-4 md:px-6 py-2 flex items-center gap-2 hover:bg-[#26262b96] transition-colors relative">
            Get started
        </button>
        </motion.div>
    </div>

    {/* Feature 3 - Code Checker */}
    <div className="flex flex-col md:flex-row items-center gap-8 w-full md:w-[90%] relative">
        <motion.div 
        initial={{ opacity: 0, x: 100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6 }} 
        viewport={{ once: true }} 
        className="w-full md:w-1/2 rounded-lg p-4 overflow-hidden relative"
        >
        <div className="w-auto xl:w-[400px] mx-auto">
            <img src="/section-images/img3.png" alt="" />
        </div>
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, x: 100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6 }} 
        viewport={{ once: true }} 
        className="w-full md:w-1/2 space-y-4 relative"
        >
        <div className="flex items-center gap-2">
            <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
            <span>3</span>
            </div>
            <span className="text-purple-400">Code checker</span>
        </div>
        <h2 className="text-md md:text-2xl font-bold">
            Checks your code across multiple languages, helps you catch & fix bugs faster.
        </h2>
        <button className="bg-[#26262B] text-[#8D8D99] rounded-full px-4 md:px-6 py-2 flex items-center gap-2 hover:bg-[#26262b96] transition-colors relative">
            Get started
        </button>
        </motion.div>
    </div>
    </div>
);
};

export default CodeReviewComponent;