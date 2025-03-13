"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);

return (
<nav className="w-full py-4 relative">
    <div className="container w-[95%] md:w-[95%] xl:w-[85%] border-1 border-[#313138] rounded-2xl mx-auto px-2 py-2 flex items-center justify-between">
    <div className="flex items-center space-x-8">
        {/* Logo */}
        <Link href="/" className="flex items-center ml-1">
        <div className="h-6 w-6 rounded flex">
            <Image src="/logo.png" alt="Code Mender Logo" width={24} height={24} />
        </div>
        <span className="text-[#E6E6E6] md:text-md ml-2 xl:text-lg">CodeMender</span>
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-6 ">
        <div className="relative group">
            <Link href="/products" className="text-[#8D8D99] hover:text-white flex items-center">
            Products
            <ChevronDown className="h-4 w-4 ml-1" />
            </Link>
        </div>
        <Link href="/patterns" className="text-[#8D8D99] hover:text-white">Patterns</Link>
        <Link href="/how-to-use" className="text-[#8D8D99] hover:text-white">How to use</Link>
        <Link href="/pricing" className="text-[#8D8D99] hover:text-white">Pricing</Link>
        <Link href="/docs" className="text-[#8D8D99] hover:text-white">Docs</Link>
        <Link href="/resources" className="text-[#8D8D99] hover:text-white">Resources</Link>
        </div>
    </div>
    
    {/* Desktop Auth Buttons */}
    <div className="items-center space-x-4 hidden lg:flex">
        <Link href="/login" className="text-[#E6E6E6]">
        Log in
        </Link>
        <Link href="/signup" className="bg-[#E6E6E6] text-black px-6 py-2 rounded-lg hover:bg-gray-200">
        Sign Up
        </Link>
    </div>

    {/* Mobile Menu Button */}
    <button
        className="lg:hidden text-[#E6E6E6] p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
    >
        <Menu className="h-6 w-6" />
    </button>
    </div>

    {/* Mobile Menu */}
    <div
    className={`fixed left-0 right-0 top-0 bg-[#08090A] transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
    } lg:hidden z-50`}
    >
    <div className="container mx-auto px-4 py-6">
        {/* Close Button */}
        <div className="flex justify-end mb-6">
        <button
            className="text-[#E6E6E6] p-2"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
        >
            <X className="h-6 w-6" />
        </button>
        </div>

        {/* Mobile Auth Buttons */}
        <div className="flex flex-col space-y-4 border-b border-[#313138] pb-6 px-2">
        <Link
            href="/login"
            className="bg-[#E6E6E6] text-black px-6 py-2 rounded-lg hover:bg-gray-200 text-center"
            onClick={() => setIsOpen(false)}
        >
            Log in
        </Link>
        <Link
            href="/signup"
            className="bg-[#E6E6E6] text-black px-6 py-2 rounded-lg hover:bg-gray-200 text-center"
            onClick={() => setIsOpen(false)}
        >
            Sign Up
        </Link>
        </div>

        {/* Mobile Navigation Links */}
        <div className="flex flex-col space-y-4 mt-6 px-2">
        <Link
            href="/products"
            className="text-[#8D8D99] hover:text-white flex items-center justify-between"
            onClick={() => setIsOpen(false)}
        >
            Products
            <ChevronDown className="h-4 w-4" />
        </Link>
        <Link
            href="/patterns"
            className="text-[#8D8D99] hover:text-white"
            onClick={() => setIsOpen(false)}
        >
            Patterns
        </Link>
        <Link
            href="/how-to-use"
            className="text-[#8D8D99] hover:text-white"
            onClick={() => setIsOpen(false)}
        >
            How to use
        </Link>
        <Link
            href="/pricing"
            className="text-[#8D8D99] hover:text-white"
            onClick={() => setIsOpen(false)}
        >
            Pricing
        </Link>
        <Link
            href="/docs"
            className="text-[#8D8D99] hover:text-white"
            onClick={() => setIsOpen(false)}
        >
            Docs
        </Link>
        <Link
            href="/resources"
            className="text-[#8D8D99] hover:text-white"
            onClick={() => setIsOpen(false)}
        >
            Resources
        </Link>
        </div>
    </div>
    </div>
</nav>
);
};

export default Navbar;