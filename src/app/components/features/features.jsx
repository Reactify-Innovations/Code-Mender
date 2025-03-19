import React from 'react';


const Features = () => {
return (
    <div id="features" className=" text-white w-full py-12 md:py-20">
    <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Features</h2>
        <p className="text-gray-400 text-sm px-4 md:text-md max-w-2xl mx-auto">
            Our AI code reviewer gives instant feedback to save you time and effort.
            Catch unwanted prompts or logic errors early on and fix them on the spot.
        </p>
        </div>

        {/* Features Grid */}
        <div className="w-[95%] lg:w-[80%] mx-auto">
            <div className='flex flex-col lg:flex-row justify-center items-center w-full gap-6 mb-6'>
        {/* Customized rule-based reviews */}
        <div className="bg-[#16161A] rounded-3xl p-6 flex flex-col xl:h-[300px] w-full">
            <div className="bg-[#26262B] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <img src="/features-images/Icon.png" alt="" />
            </div>
            <h3 className="text-md md:text-lg font-semibold mb-2">Customized rule-based reviews</h3>
            <p className="text-gray-400 text-[12px] md:text-sm flex-grow w-full  lg:w-[65%] z-10">
            Instead of relying on pre-set, one-size-fits-all reviews, you can build your
            criteria in plain language and our AI applies them across your projects. See
            rules example
            </p>
            <div className="hidden lg:flex justify-end absolute lg:translate-x-43 xl:translate-x-47 lg:translate-y-9 xl:translate-y-13 lg:w-[200px] xl:w-auto overflow-hidden">
            <div className=""> <img src="/features-images/Image3.png" alt="" className='' /> </div>
            </div>
        </div>

        {/* Team collaboration */}
        <div className="bg-[#16161A] rounded-3xl p-6 flex lg:h-[250px] xl:h-[300px] w-full">
            <div>
            <div className="bg-[#26262B] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <img src="/features-images/Icon1.png" alt="" />
            </div>
            <h3 className="text-md md:text-lg font-semibold mb-2">Team collaboration</h3>
            <p className="text-gray-400 text-[12px] md:text-sm flex-grow w-full md:w-[55%]">
            Invite your team  members, work together in the same repo and
            collaborate on creating custom rules.
            </p>

            </div>
            <div className="hidden lg:flex justify-end absolute lg:translate-x-53 lg:translate-y-10 xl:translate-x-53 xl:translate-y-7 z-20 lg:w-[160px] xl:w-auto ">
            <img src="/features-images/Image1.png" alt=""/>
            </div>
        </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-6'>
            <div className='flex flex-col gap-6 lg:w-[120%]'>
        {/* Language-agnostic support */}
        <div className="bg-[#16161A] rounded-3xl p-6 flex flex-col h-full">
            <div className="bg-[#26262B] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <img src="/features-images/Icon2.png" alt="" />
            </div>
            <h3 className="text-md md:text-lg font-semibold mb-2">Language-agnostic support</h3>
            <p className="text-gray-400 text-[12px] md:text-sm flex-grow ">
            Forget about swapping tools or setups when working across
            different programming languages, code mender can work with
            any language.
            </p>
        </div>

        {/* Context-aware analysis */}
        <div className="bg-[#16161A] rounded-3xl p-6 flex flex-col h-full">
            <div className="bg-[#26262B] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <img src="/features-images/Icon5.png" alt="" />
            </div>
            <h3 className="text-md md:text-lg font-semibold mb-2">Context-aware analysis</h3>
            <p className="text-gray-400 text-[12px] md:text-sm flex-grow">
            Our code reviewer understands the context behind your code
            and gives suggestions.
            </p>
            <div className=" flex items-center mt-4 ">
            <img src="/features-images/img.png" alt="" />
            </div>
        </div>
        </div>

        <div className='flex flex-col md:flex-row gap-6'>

         {/* PR integration */}
        <div className="bg-[#16161A] rounded-3xl p-6 flex flex-col h-full ">
            <div className="bg-[#26262B] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <img src="/features-images/Icon3.png" alt="" />
            </div>
            <h3 className="text-md md:text-lg font-semibold mb-2">PR integration</h3>
            <p className="text-gray-400 text-[12px] md:text-sm flex-grow ">
            Our tool integrates with GitHub, GitLab, and other pull request
            systems. Once you submit a pull request, it automatically reviews
            the code, flags issues, and leaves comments.
            </p>

            <div className='hidden lg:flex justify-end absolute lg:translate-x-1 lg:translate-y-104 lg:h-[180px]  xl:translate-x-1 xl:translate-y-72 xl:h-[200px]'>
                <img src="/features-images/Image2.png" alt="" />
            </div>
        </div>

        {/* Real-time feedback via CLI */}
        <div className="bg-[#16161A] rounded-3xl p-6 flex flex-col h-full">
            <div className="bg-[#26262B] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <img src="/features-images/Icon4.png" alt="" />
            </div>
            <h3 className="text-md md:text-lg font-semibold mb-2 xl:w-[70%]">Real-time feedback via CLI</h3>
            <p className="text-gray-400 text-[12px] md:text-sm flex-grow">
            With real-time feedback right in the CLI, you can
            address issues on the spot by running code
            analysis directly from the terminal. Find and fix the
            bottlenecks, stay on track.
            </p>

            <div className='hidden lg:flex absolute lg:-translate-x-5 lg:translate-y-80 lg:w-[250px] xl:-translate-x-5 xl:translate-y-70 xl:w-[280px]'>
                <img src="/features-images/1st.png" alt="" />
            </div>
            <div className='hidden lg:flex absolute lg:-translate-x-5 lg:translate-y-88 lg:w-[250px] xl:-translate-x-5 xl:translate-y-80 z-10 xl:w-[280px]'>
                <img src="/features-images/2nd.png" alt="" />
            </div>
            <div className='hidden lg:flex absolute lg:-translate-x-5 lg:translate-y-95 lg:w-[250px] xl:-translate-x-5 xl:translate-y-87 z-20 xl:w-[280px]'>
                <img src="/features-images/3rd.png" alt="" />
            </div>
        </div>
        </div>

        </div>
        </div>

    </div>
    </div>
);
};

export default Features;