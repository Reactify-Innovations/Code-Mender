    // components/Banner.jsx
    import Image from 'next/image';

    const Banner = () => {
    return (
        <div className="relative text-white w-full overflow-hidden py-4 md:py-16 px-4 md:px-8">
        {/* Main content */}
        <div className="container mx-auto max-w-5xl z-10 relative">
            <h1 className="text-xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-2  md:mb-4">
            AI PR Reviewer Bot – Smarter <br /> Code Reviews, Faster Merges
            </h1>
            
            <p className="text-[#8D8D99] text-center text-[10px] md:text-sm mb-10 max-w-3xl mx-auto">
            Tired of manual pull request (PR) reviews? Our AI-powered PR Reviewer Bot streamlines your code review process by analyzing 
            PRs, detecting potential bugs, and ensuring coding standards—so your team can focus on building, not debugging.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <button className="bg-[#E6E6E6] text-black py-3 md:py-4 px-6 rounded-lg md:rounded-xl hover:bg-gray-100 transition-all">
                Connect your repo
            </button>
            
            <button className="bg-[#221D21] text-white text-sm font-semibold py-3.5  md:py-4.5 px-6 rounded-lg md:rounded-xl hover:bg-[#221d21cf] transition-all">
                Chat with a founder
            </button>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-gray-400 mb-16">
            <div className="flex items-center gap-1 text-[12px]">
                <img src="/icons/free-tier.png" alt="" />
                Free tier available
            </div>
            
            <div className="flex items-center gap-1 text-[12px]">
                <img src="/icons/free-tier.png" alt="" />
                No credit card required
            </div>
            </div>
        </div>

        {/* Banner images container - positioned relative to be after the checkmarks */}
        <div className="relative w-full max-w-4xl mx-auto h-40 md:h-80 my-8">
            {/* These images will overlap each other */}
            
            {/* Center/Main image */}
            <div className="absolute left-1/2 -translate-x-5  xl:-translate-x-1 -translate-y-2 md:-translate-y-20 w-[60%] h-auto z-30">
            <Image
                src="/banner-images/banner1.png"
                alt="Web assistant features"
                width={400}
                height={600}
                className="w-full h-full object-cover rounded-lg shadow-xl"
            />
            </div>
            
            {/* Left image */}
            <div className="absolute left-1/2 -translate-x-25  md:-translate-x-1/2 md:-translate-y-14 w-[60%] h-auto z-20">
            <Image
                src="/banner-images/banner2.png"
                alt="App features"
                width={400}
                height={600}
                className="w-full h-full object-cover rounded-lg shadow-xl"
            />
            </div>
            
            {/* Right image */}
            <div className="absolute -left-7 md:-left-10 xl:-left-14  translate-y-5 md:-translate-y-3 xl:translate-y-0 w-[60%] h-auto  z-10">
            <Image
                src="/banner-images/banner3.png"
                alt="Automation features"
                width={400}
                height={600}
                className="w-full h-full object-cover rounded-lg shadow-xl"
            />
            </div>
        </div>
        <div className='bg-gradient-to-b from-[#08090a00] to-[#08090A] h-[300px] md:h-[400px] w-full absolute -translate-y-72 md:-translate-y-90 z-40'></div>
        </div>
    );
    };
    export default Banner;