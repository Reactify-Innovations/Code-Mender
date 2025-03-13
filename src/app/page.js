"use client"; 
import { motion } from "framer-motion";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import Checkmarks from "./components/checkmarks/checkmarks";
import Pattern from "./components/pattern-examples/pattern";
import Features from "./components/features/features";
import Sections from "./components/sections/sections";
import Slider from "./components/sliders/slider";
import BotDownload from "./components/botDownload/botDownload";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }} // Start with opacity 0
      animate={{ opacity: 1 }} // Animate to opacity 1
      transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
    >
      <Navbar />
      <Banner />
      <Checkmarks />
      <Pattern />
      <Features />
      <Sections />
      <Slider />
      <BotDownload />
      <Footer />
    </motion.main>
  );
}
