"use client";

export default function BotDownload() {

    return(
        <>
        <div className="h-[300px] md:h-[600px] w-full flex justify-center items-center">
            <div>
                <img src="/bg.png" alt="" />
            </div>

            <div className="text-white absolute flex flex-col md:flex-row items-center justify-around gap-6 md:gap-0 w-full h-50% z-30 px-2 xl:px-40">
                <p className="text-sm md:text-2xl xl:text-5xl font-bold"> <span>Personalized</span> <br /> AI PR Reviewer Bot</p>

                <button className="bg-white hover:bg-[#ffffffd4] transition duration-200 ease-in-out text-black text-sm md:text-lg font-semibold rounded-xl py-3 px-3 flex items-center gap-2"> 
                    <img src="/Icon.png" alt="" />
                    Add to Chrome it's Free</button> 
            </div>
        </div>
        </>
    );
}