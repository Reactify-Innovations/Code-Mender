import React from "react";
import { motion } from "framer-motion";

const CodeReviewComponent = () => {
return (
    <div className="text-white min-h-screen w-full xl:w-[70%] mx-auto p-4 xl:p-8 lg:p-12">
    {/* Prevents extra spacing */}
    <div className="overflow-hidden">
        {/* Header */}
        <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            How it works
        </h1>
        <p className="text-gray-400 text-sm md:text-base">
            High speed of engineering, with the same level of confidence.
        </p>
        </div>

        {/* Feature Sections */}
        <div className="space-y-20">
        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
            <motion.div
            initial={{ opacity: 0, x: 50 }} // Moves from Right
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 overflow-hidden"
            >
            <img src="/section-images/1st.png" alt="Feature 1" className="w-full" />
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: 50 }} // Moves from Right
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-4"
            >
            <h2 className="text-md md:text-2xl font-bold">
                Automatically runs checks to keep your code clean.
            </h2>
            <button className="bg-[#26262B] text-[#8D8D99] rounded-full px-4 md:px-6 py-2 hover:bg-[#26262b96] transition-colors">
                Get started
            </button>
            </motion.div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 w-full">
            <motion.div
            initial={{ opacity: 0, x: -50 }} // Moves from Left
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 overflow-hidden"
            >
            <img src="/section-images/2nd.png" alt="Feature 2" className="w-full" />
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: -50 }} // Moves from Left
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-4"
            >
            <h2 className="text-md md:text-2xl font-bold">
                Scans your pull requests, flags problems, and leaves comments.
            </h2>
            <button className="bg-[#26262B] text-[#8D8D99] rounded-full px-4 md:px-6 py-2 hover:bg-[#26262b96] transition-colors">
                Get started
            </button>
            </motion.div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
            <motion.div
            initial={{ opacity: 0, x: 50 }} // Moves from Right
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 overflow-hidden"
            >
            <img src="/section-images/3rd.png" alt="Feature 3" className="w-full" />
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: 50 }} // Moves from Right
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-4"
            >
            <h2 className="text-md md:text-2xl font-bold">
                Checks your code across multiple languages.
            </h2>
            <button className="bg-[#26262B] text-[#8D8D99] rounded-full px-4 md:px-6 py-2 hover:bg-[#26262b96] transition-colors">
                Get started
            </button>
            </motion.div>
        </div>
        </div>
    </div>
    </div>
);
};

export default CodeReviewComponent;
