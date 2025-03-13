"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Checkmarks = () => {
const features = [
{
    id: "ai-pr-review",
    title: "AI Pull Request Review",
    description:
    "Ship cleaner, more reliable code faster with automated pull request reviews—designed for developers.",
    icon: <img src="/checkmarks-icons/icon.png" alt="" />,
    buttons: [
    { label: "Web Summary", id: "web-summary" },
    { label: "YouTube Summary", id: "youtube-summary" },
    { label: "Chat with PDF", id: "chat-with-pdf" },
    { label: "Write Replies", id: "write-replies" },
    ],
},
{
    id: "automated-code-review",
    title: "Automated Code Review",
    description:
    "Simplifies routine coding tasks with intelligent, automated code reviews that prioritize speed and accuracy.",
    icon: <img src="/checkmarks-icons/icon (1).png" alt="" />,
    buttons: [
    { label: "Extract Structured Information", id: "extract-structured-info" },
    { label: "Form Interface", id: "form-interface" },
    { label: "Interact with Web", id: "interact-with-web" },
    { label: "AI Web Scrape", id: "ai-web-scrape" },
    ],
},
{
    id: "code-checker",
    title: "Code Checker",
    description:
    "Offers developer-friendly features to identify, correct, and improve code at the line level.",
    icon: <img src="/checkmarks-icons/icon (2).png" alt="" />,
    buttons: [
    { label: "Notion Automation", id: "notion-automation" },
    { label: "Email Automation", id: "email-automation" },
    { label: "Data Sync", id: "data-sync" },
    { label: "Data Enrichment", id: "data-enrichment" },
    ],
},
];

return (
<div className="w-full text-white py-16 px-4 md:px-8 mt-10 mb-8">
    <div className="container mx-auto max-w-6xl">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {features.map((feature, index) => (
        <motion.div
            key={feature.id}
            className="flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} 
            transition={{ duration: 0.8, delay: index * 0.2 }}
        >
            <div className="flex items-center gap-3 mb-3">
            <div className="flex-shrink-0">{feature.icon}</div>
            <h2 className="text-xl md:text-2xl font-semibold">{feature.title}</h2>
            </div>

            <p className="text-gray-400 mb-6">{feature.description}</p>

            <div>
            {feature.buttons.map((button) => (
                <button
                key={button.id}
                className="px-3 py-2 m-1 text-sm text-[#8D8D99] bg-[#303038] hover:bg-[#3030389d] rounded-lg text-left transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                >
                {button.label}
                </button>
            ))}
            </div>
        </motion.div>
        ))}
    </div>
    </div>
</div>
);
};

export default Checkmarks;
