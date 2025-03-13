import Link from "next/link"
import Image from "next/image"

const Footer = () => {
return (
    <footer className="border-t-2 border-[#46494f3e] text-gray-300 pt-12 pb-24 px-4 sm:px-6 lg:px-24">
    <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0">
        {/* Left Column - Logo, Copyright, Social (stacked on mobile, grouped on desktop) */}
        <div className="flex flex-col space-y-4 order-first md:max-w-[300px]">
            <Link href="/" className="flex items-center">
            <div className="w-6 h-6 relative mr-2">
                <Image src="/logo.png" alt="CodeMender Logo" fill className="object-contain" />
            </div>
            <span className="text-white font-medium">CodeMender</span>
            </Link>

            {/* Copyright and Social - At bottom on mobile, below logo on desktop */}
            <div className="flex flex-col space-y-4 order-last md:order-none">
            <p className="text-sm text-[#8A8F98]">© 2024 CodeMender Inc. All rights reserved.</p>
            <div className="flex space-x-4 mt-8">
                <Link href="https://linkedin.com" aria-label="LinkedIn" className="text-[#8A8F98] hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                </Link>
                <Link href="https://twitter.com" aria-label="Twitter/X" className="text-[#8A8F98] hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                </Link>
                <Link href="https://youtube.com" aria-label="YouTube" className="text-[#8A8F98] hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
                </Link>
            </div>
            </div>
        </div>

        {/* Right Side - Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-12 md:w-2/3">
            {/* Products Column */}
            <div className="order-1">
            <h3 className="text-white font-medium text-lg mb-4">Products</h3>
            <ul className="space-y-3">
                <li>
                <Link href="/ai-web-clipper" className="text-[#8A8F98] hover:text-white transition-colors">
                    AI Web Clipper
                </Link>
                </li>
                <li>
                <Link href="/summarize" className="text-[#8A8F98] hover:text-white transition-colors">
                    Summarize
                </Link>
                </li>
                <li>
                <Link href="/pricing" className="text-[#8A8F98] hover:text-white transition-colors">
                    Pricing
                </Link>
                </li>
            </ul>
            </div>

            {/* Company Column */}
            <div className="order-2">
            <h3 className="text-white font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-3">
                <li>
                <Link href="/privacy-policy" className="text-[#8A8F98] hover:text-white transition-colors">
                    Privacy Policy
                </Link>
                </li>
                <li>
                <Link href="/terms-of-service" className="text-[#8A8F98] hover:text-white transition-colors">
                    Terms of Service
                </Link>
                </li>
                <li>
                <Link href="/contact" className="text-[#8A8F98] hover:text-white transition-colors">
                    Contact
                </Link>
                </li>
            </ul>
            </div>

            {/* Resource Column */}
            <div className="order-3">
            <h3 className="text-white font-medium text-lg mb-4">Resource</h3>
            <ul className="space-y-3">
                <li>
                <Link href="/blog" className="text-[#8A8F98] hover:text-white transition-colors">
                    Blog
                </Link>
                </li>
                <li>
                <Link href="/youtube-channel" className="text-[#8A8F98] hover:text-white transition-colors">
                    YouTube Channel
                </Link>
                </li>
                <li>
                <Link href="/referral-program" className="text-[#8A8F98] hover:text-white transition-colors">
                    Referral Program
                </Link>
                </li>
            </ul>
            </div>

            {/* Tools Column */}
            <div className="order-4">
            <h3 className="text-white font-medium text-lg mb-4">Tools</h3>
            <ul className="space-y-3">
                <li>
                <Link href="/youtube-summarizer" className="text-[#8A8F98] hover:text-white transition-colors">
                    YouTube Summarizer
                </Link>
                </li>
                <li>
                <Link href="/website-text-summarizer" className="text-[#8A8F98] hover:text-white transition-colors">
                    Website Text Summarizer
                </Link>
                </li>
                <li>
                <Link href="/free-ai-blog-writer" className="text-[#8A8F98] hover:text-white transition-colors">
                    Free AI Blog Writer
                </Link>
                </li>
                <li>
                <Link href="/tools" className="text-[#8A8F98] hover:text-white transition-colors">
                    View All
                </Link>
                </li>
            </ul>
            </div>
        </div>
        </div>
    </div>
    </footer>
)
}

export default Footer

