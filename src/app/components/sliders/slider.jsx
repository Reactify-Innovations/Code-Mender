"use client";

import React from "react";

const Slider = () => {
const firstRowData = [
    { icon: "📊", title: "AI-Assisted Data Sync", description: "AI-Assisted Data Sync between 2 Business Tables. Supports both Column Matching and more." },
    { icon: "🗣️", title: "Voice to New Table Row", description: "Use your voice to add notes and tasks to your table." },
    { icon: "📧", title: "AI Extract Incoming Email to Table", description: "AI reads incoming email and extracts key information to save in a business table." },
    { icon: "🌐", title: "AI Web Clipper", description: "AI reads current web page and fill your table with relevant information as a new record." },
    { icon: "📝", title: "Custom Smart Forms", description: "Create custom forms that populate your tables intelligently." },
    { icon: "📈", title: "Data Visualization Builder", description: "Create beautiful charts from your table data with AI assistance." },
];

const secondRowData = [
    { icon: "📑", title: "Google Sheets Row to Slack Message", description: "Share new Google Sheets row as a Slack message automatically." },
    { icon: "👤", title: "LinkedIn Profile Clipper for Sales with Enrichment", description: "1-Click to save LinkedIn profile into a spreadsheet with personal data enrichment. Email / Phone # etc." },
    { icon: "✅", title: "Google Form to Todoist Task", description: "Create a Todoist task when a Google Form is submitted." },
    { icon: "✍️", title: "AI Writing App", description: "Create any AI writing app you need in 1-Click." },
    { icon: "📊", title: "Data Analysis Assistant", description: "Get instant insights from your spreadsheet data." },
    { icon: "🔄", title: "Workflow Automator", description: "Connect your apps with smart AI-powered workflows." },
];

// Duplicate the arrays for infinite scrolling
const firstRowDataExtended = [...firstRowData, ...firstRowData];
const secondRowDataExtended = [...secondRowData, ...secondRowData];

return (
    <section className="text-white py-12 overflow-hidden">
    <div className="w-full mx-auto px-4 mb-10">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center mb-16">Explore AI-Powered Templates</h2>

        {/* First Slider - Moves Left */}
        <div className="relative mb-12 overflow-hidden">
        <div className="flex animate-scroll-left">
            {firstRowDataExtended.map((item, index) => (
            <div key={`first-${index}`} className="w-[200px] md:w-[400px] h-[150px] flex-shrink-0 mx-3 bg-[#28282883] bg-opacity-50 rounded-2xl p-5 backdrop-blur-sm 
            whitespace-normal break-words overflow-hidden border-2 border-[#28282883]">
                <div className="flex gap-4">
                <div className="text-lg md:text-3xl mb-2">{item.icon}</div>
                <h3 className="text-[12px] md:text-lg font-semibold mb-2">{item.title}</h3>

                </div>
                <p className="text-[10px] md:text-sm text-gray-300 break-words whitespace-normal">
                    {item.description}
                </p>
            </div>
            
            ))}
        </div>
        {/* Gradient Overlays for Fading Effect */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#08090A] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#08090A] to-transparent z-10"></div>
        </div>

        {/* Second Slider - Moves Right */}
        <div className="relative overflow-hidden">
        <div className="flex animate-scroll-right">
            {secondRowDataExtended.map((item, index) => (
            <div key={`second-${index}`} className="w-[200px] md:w-[400px] h-[150px] flex-shrink-0 mx-3 bg-[#28282883]  bg-opacity-50 rounded-2xl p-5 backdrop-blur-sm 
            whitespace-normal break-words overflow-hidden border-2 border-[#28282883]">
                <div className="flex gap-4">
                <div className="text-lg md:text-2xl mb-2">{item.icon}</div>
                <h3 className="text-[12px] md:text-lg font-semibold mb-2">{item.title}</h3>
                </div>
                <p className="text-[10px] md:text-sm text-gray-300">{item.description}</p>
            </div>
            ))}
        </div>
        {/* Gradient Overlays for Fading Effect */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#08090A] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-30 bg-gradient-to-l from-[#08090A] to-transparent z-10"></div>
        </div>
    </div>
    </section>
);
};

export default Slider;
