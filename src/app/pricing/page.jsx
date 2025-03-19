    // Pricing.jsx
    "use client"
    
    import { GitPullRequest, Database, Users, Clock, Code, FileText, BarChart3, Settings, ShieldCheck, Brain, UserCog } from 'lucide-react';
    import Navbar from "../components/navbar/navbar";
    import Footer from "../components/footer/footer";
    import FAQ from '../components/FAQ/FAQ';



const Pricing = () => {
return (
    <>
    <Navbar/>
    <div className="w-full py-16 px-4 bg-[#08090A]">
    <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Pricing</h1>
        <p className="text-xl text-white mb-2">14-day free trial on all plans</p>
        <p className="text-sm text-gray-400">No credit card required</p>
    </div>

    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
        {/* Free Plan */}
        <div className="rounded-2xl p-8 bg-[#0d0e10] border border-[#313138] flex flex-col">
        <div className="mb-6">
            <h2 className="text-lg text-white font-thin mb-2">Free</h2>
            <h3 className="text-3xl font-bold text-white mb-4 lg:mb-9 ">Free</h3>
            <p className="text-sm text-gray-300 ">Free for everyone getting started with code mender.</p>
        </div>

        <button className="w-full py-3 font-medium rounded-md bg-[#E6E6E6] text-black hover:bg-gray-200 transition-colors mt-4">
            Connect your repo
        </button>

        <div className="mt-8 flex-grow">
            <div className="flex items-start mt-4">
            <GitPullRequest className="w-5 h-5 text-white mr-3 mt-0.5" />
            <span className="text-sm text-white">Pull Request summaries</span>
            </div>
            <div className="flex items-start mt-4">
            <Database className="w-5 h-5 text-white mr-3 mt-0.5" />
            <span className="text-sm text-white">Unlimited repositories</span>
            </div>
            <div className="flex items-start mt-4">
            <Users className="w-5 h-5 text-white mr-3 mt-0.5" />
            <span className="text-sm text-white">Unlimited engineers</span>
            </div>
        </div>

        <div className="mt-4 pt-4 border-t border-[#313138]">
            <p className="text-xs text-gray-400">*Includes a 14-day free trial of the Team plan.</p>
            <p className="text-xs text-gray-400">*No credit card required.</p>
        </div>
        </div>

        {/* Monthly Plan */}
        <div className="rounded-2xl p-8 bg-[#0d0e10] border border-[#313138] flex flex-col">
        <div className="mb-6">
            <h2 className="text-lg text-white font-thin mb-2">Monthly</h2>
            <h3 className="text-3xl font-bold text-white mb-4 lg:mb-9 xl:mb-4">$20/per engineer</h3>
            <p className="text-sm text-gray-300">Best for teams with multiple repositories and individual engineers</p>
        </div>

        <button className=" w-full py-3 font-medium rounded-md bg-[#E6E6E6] text-black hover:bg-gray-200 transition-colors mt-4">
            Try for free
        </button>

        <div className="mt-8 flex-grow">
            <div className="flex items-start mt-4">
            <Clock className="w-5 h-5 text-white mr-3 mt-0.5" />
            <span className="text-sm text-white">14-day free trial</span>
            </div>
            <div className="flex items-start mt-4">
            <Code className="w-5 h-5 text-white mr-3 mt-0.5" />
            <span className="text-sm text-white">Unlimited code reviews</span>
            </div>
            <div className="flex items-start mt-4">
            <Database className="w-5 h-5 text-white mr-3 mt-0.5" />
            <span className="text-sm text-white">Unlimited repositories</span>
            </div>
            <div className="flex items-start mt-4">
            <Settings className="w-5 h-5 text-white mr-3 mt-0.5" />
            <span className="text-sm text-white">Unlimited custom rules</span>
            </div>
            <div className="flex items-start mt-4">
            <BarChart3 className="w-5 h-5 text-white mr-3 mt-0.5" />
            <span className="text-sm text-white">Analytics</span>
            </div>
        </div>
        </div>

        {/* Yearly Plan */}
        <div className="rounded-2xl p-8 bg-[#0d0e10] border border-[#313138] flex flex-col">
        <div className="mb-6">
            <h2 className="text-lg text-white font-thin mb-2">Yearly</h2>
            <h3 className="text-3xl font-bold text-white mb-4">Custom pricing</h3>
            <p className="text-sm text-gray-300">Built for larger teams. Find out how code mender can be integrated into your existing infrastructure.</p>
        </div>

        <button className="w-full py-3 font-medium rounded-md bg-[#E6E6E6] text-black hover:bg-gray-200 transition-colors mt-4">
            Let's chat
        </button>

        <div className="mt-8 flex-grow">
            <div className="flex items-start mt-4">
            <FileText className="w-5 h-5 text-white mr-3 mt-0.5" />
            <span className="text-sm text-white">Everything in Team plan</span>
            </div>
            <div className="flex items-start mt-4">
            <Users className="w-5 h-5 text-white mr-3 mt-0.5" />
            <span className="text-sm text-white">Unlimited engineers</span>
            </div>
            <div className="flex items-start mt-4">
            <Database className="w-5 h-5 text-white mr-3 mt-0.5" />
            <span className="text-sm text-white">Self-hosting option</span>
            </div>
            <div className="flex items-start mt-4">
            <ShieldCheck className="w-5 h-5 text-white mr-3 mt-0.5" />
            <span className="text-sm text-white">SSO login</span>
            </div>
            <div className="flex items-start mt-4">
            <Brain className="w-5 h-5 text-white mr-3 mt-0.5" />
            <span className="text-sm text-white">Your LLM</span>
            </div>
            <div className="flex items-start mt-4">
            <UserCog className="w-5 h-5 text-white mr-3 mt-0.5" />
            <span className="text-sm text-white">Dedicated CSM</span>
            </div>
        </div>
        </div>
    </div>
    </div>
    <FAQ/>
    <Footer/>
    </>
);
};

export default Pricing;