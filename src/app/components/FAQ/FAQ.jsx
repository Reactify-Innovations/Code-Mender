"use client";

import { useState, useRef } from 'react';

export default function FAQ() {
const [openIndex, setOpenIndex] = useState(null);

const faqItems = [
    {
    question: "How do I sign up for a plan?",
    answer: "You can select a plan directly on the pricing page. For the Hobby and Team plans, sign up through the provided links. For Enterprise or Open Source, reach out to discuss setup."
    },
    {
    question: "What's the difference between the Free and Team plans?",
    answer: "Team plans include additional features like advanced collaboration tools, priority support, and more storage. Free plans are limited to basic functionality for individual users or small projects."
    },
    {
    question: "Are there any limits on pull requests or reviews?",
    answer: "Free plans have limited pull requests and reviews per month. Team plans offer higher limits based on the tier selected. Enterprise plans can have custom limits tailored to your needs."
    },
    {
    question: "Can Code Mender be self-hosted?",
    answer: "Yes, Code Mender can be self-hosted with our Enterprise plan. Self-hosting gives you complete control over your data and infrastructure while maintaining all Code Mender functionality."
    },
    {
    question: "How does the Open Source plan work?",
    answer: "Code Mender is free with its full functionality for open source projects. Reach out to us to set everything up and get your project onboarded."
    },
    {
    question: "Can Code Mender integrate with existing tools?",
    answer: "Yes, Code Mender offers integrations with popular development tools including GitHub, GitLab, Jira, Slack, and many others. We also provide API access for custom integrations."
    },
    {
    question: "How are custom rules handled?",
    answer: "Custom rules can be configured through our intuitive rule editor. Team and Enterprise plans allow for more complex rule sets and automated workflows."
    },
    {
    question: "How does Code Mender work?",
    answer: "Code Mender analyzes your code repositories, provides automated code reviews, identifies issues, and helps streamline your development workflow with intelligent suggestions and reports."
    }
];

const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
};

return (
    <div className="min-h-screen bg-[#08090A] text-white py-12 px-4 sm:px-6 md:px-8 lg:px-12">
    {/* Open Source Banner */}
    <div className="bg-[#0d0e10] rounded-2xl p-6 mb-16 mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
        <p className="text-sm text-gray-400">Open Source</p>
        <h2 className="text-2xl font-semibold mt-1">Free forever</h2>
        <p className="text-gray-400 mt-1 text-sm">Code Mender is free with its full functionality for open source projects. Reach out to us to set everything up.</p>
        </div>
        <button className="mt-4 sm:mt-0 bg-zinc-800 hover:bg-zinc-700 transition-colors text-white py-2 px-4  rounded">
        Let's connect
        </button>
    </div>

    {/* FAQ Section */}
    <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-center mb-12">Frequently asked questions</h2>
        
        <div className="space-y-1">
        {faqItems.map((item, index) => {
            const contentRef = useRef(null);
            const isOpen = openIndex === index;
            
            return (
            <div key={index} className="border-t border-zinc-800 last:border-b">
                <button
                className="w-full flex justify-between items-center py-5 px-1 focus:outline-none text-left"
                onClick={() => toggleQuestion(index)}
                >
                <span className="text-lg">{item.question}</span>
                <span className={`text-2xl transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    +
                </span>
                </button>
                
                <div 
                ref={contentRef}
                className={`overflow-hidden transition-all duration-300 ease-in-out`}
                style={{ 
                    maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0',
                    opacity: isOpen ? 1 : 0
                }}
                >
                <div className="pb-5 px-1 text-gray-400 text-base">
                    {item.answer}
                </div>
                </div>
            </div>
            );
        })}
        </div>
    </div>
    </div>
);
}