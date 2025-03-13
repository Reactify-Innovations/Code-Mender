// components/PatternExamples.jsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PatternExamples = () => {
const [activeTab, setActiveTab] = useState("ts");

const tabs = [
{ id: "ts", label: "TS", icon: "typescript" },
{ id: "react", label: "REACT", icon: "react" },
{ id: "java", label: "JAVA", icon: "java" },
{ id: "create", label: "Create", icon: "create" },
];

const tabContent = {
ts: {
    title: "From inbound to outbound, scale your sales not your headcount.",
    features: [
    { id: "list-building", label: "List Building", icon: "mail" },
    { id: "data-enrichment", label: "Data Enrichment", icon: "table" },
    { id: "warm-outreach", label: "Warm Outreach", icon: "chat" },
    ],
    image: "/chart.png",
},
react: {
    title: "Build dynamic UIs with React components and patterns.",
    features: [
    { id: "component-design", label: "Component Design", icon: "mail" },
    { id: "state-management", label: "State Management", icon: "table" },
    { id: "hooks-patterns", label: "Hooks Patterns", icon: "chat" },
    ],
    image: "/chart.png",
},
java: {
    title: "Implement enterprise-grade Java solutions efficiently.",
    features: [
    { id: "design-patterns", label: "Design Patterns", icon: "mail" },
    { id: "performance-tuning", label: "Performance Tuning", icon: "table" },
    { id: "api-design", label: "API Design", icon: "chat" },
    ],
    image: "/chart.png",
},
create: {
    title: "Create your own custom patterns and solutions.",
    features: [
    { id: "custom-templates", label: "Custom Templates", icon: "mail" },
    { id: "workflow-automation", label: "Workflow Automation", icon: "table" },
    { id: "integration", label: "Integration", icon: "chat" },
    ],
    image: "/chart.png",
},
};

const renderIcon = (iconName) => {
switch (iconName) {
    case "typescript":
    return <img src="/patterns-icons/icon.png" alt="" />;
    case "react":
    return <img src="/patterns-icons/icon (1).png" alt="" />;
    case "java":
    return <img src="/patterns-icons/icon (2).png" alt="" />;
    case "create":
    return <img src="/patterns-icons/icon (3).png" alt="" />;
    case "mail":
    return <img src="/patterns-icons/icon4.png" alt="" />;
    case "table":
    return <img src="/patterns-icons/icon5.png" alt="" />;
    case "chat":
    return <img src="/patterns-icons/icon6.png" alt="" />;
    default:
    return null;
}
};

const renderChartImage = () => {
    return (
      <div className="relative w-full h-[300px] max-w-[500px] mx-auto">
        <Image
          src="/chart.png"
          alt="Chart"
          width={500}
          height={300}
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>
    );
  };
  

const currentContent = tabContent[activeTab];

return (
<motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="w-full md:w-[90%] lg:w-[90%] xl:w-[60%] mx-auto text-white py-16 px-2 md:px-2"
>
    <div className="container mx-auto max-w-5xl">
    <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl xl:text-4xl font-bold text-center mb-3"
    >
        Some pattern examples
    </motion.h2>

    <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-[#8D8D99] text-sm text-center w-full md:w-[75%] md:max-w-2xl mx-auto mb-10"
    >
        Our AI code reviewer gives instant feedback to save you time and effort. <br />
        Catch unwanted prompts or logic errors early on and fix them on the spot.
    </motion.p>

    <div className="bg-[#16161A] rounded-3xl px-2 md:px-4 py-2 md:py-4 md:p-6 shadow-xl border-2 border-[#ffffff2b]">
        {/* Tabs */}
        <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-between rounded-2xl shadow-2xl bg-[#16161a00] p-1 mb-8 border-2 border-[#ffffff2b]"
        >
        {tabs.map((tab) => (
            <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center px-1 md:px-8 xl:px-14 text-[12px] md:text-[16px] xl:text-lg font-bold py-2 md:py-3 rounded-md transition-colors ${
                activeTab === tab.id ? "bg-[#333333]" : "bg-transparent hover:bg-[#FFFFFF14]"
            }`}
            >
            <span className="mr-1 h-4 md:h-6 w-4 md:w-6">{renderIcon(tab.icon)}</span>
            <span>{tab.label}</span>
            </button>
        ))}
        </motion.div>

        {/* Tab Content */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 px-2 md:px-0">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2"
        >
            <h3 className="text-md xl:text-2xl mb-6">{currentContent.title}</h3>

            <div className="space-y-4">
            {currentContent.features.map((feature) => (
                <div key={feature.id} className="flex items-center gap-3">
                <div className="flex-shrink-0 h-4 md:h-6 w-4 md:w-6">{renderIcon(feature.icon)}</div>
                <span className="text-gray-300 text-sm md:text-md">{feature.label}</span>
                </div>
            ))}
            </div>

            <div className="mt-8">
            <button className="flex items-center gap-2 px-5 py-3 bg-[#26262B] hover:bg-[#26262bb4] rounded-full text-lg text-[#8D8D99] transition-colors">
                Get started free
            </button>
            </div>
        </motion.div>

        <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  viewport={{ once: true }}
  className="md:w-1/2 flex items-center justify-center relative overflow-hidden"
>
  {renderChartImage()}
</motion.div>



        </div>
    </div>
    </div>
</motion.div>
);
};

export default PatternExamples;
