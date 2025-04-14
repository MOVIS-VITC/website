"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Carousel from "../components/Carousel";
import LogoScroller from "../components/InfiniteScroller/LogoScroller";
import { down, leaf, spark, book, star } from "../../public/assets";
import Image from "next/image";

export default function Home() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const objectives = [
    {
      id: 1,
      title: "Sustainable Solutions",
      description: "Developing eco-friendly technologies aligned with SDGs",
      icon: leaf
    },
    {
      id: 2,
      title: "Learning & Adaptability",
      description: "Continuous skill development and knowledge sharing",
      icon: book
    },
    {
      id: 3,
      title: "Innovation Everywhere",
      description: "Fostering creative problem-solving approaches",
      icon: spark
    },
    {
      id: 4,
      title: "Drive To Win & Achieve",
      description: "Competitive spirit with focus on excellence",
      icon: star
    }
  ];

  return (
    <section className="flex flex-col items-center font-poppins pt-4 sm:pt-12 px-4 sm:px-7 overflow-hidden bg-[#FFFEF3]">
      {/* Hero Section */}
      <motion.div 
        className="flex flex-col items-center text-center max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="border border-textAlt text-textAlt font-semibold text-xs sm:text-sm px-6 py-1 rounded-full mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Special Team Recognized By VIT Chennai
        </motion.div>

        <motion.h1 
          className="text-5xl sm:text-7xl lg:text-8xl font-bold text-heading mb-6 leading-tight"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          We are <span className="bg-gradient-to-r from-[#00A778] via-[#F3DE8A] to-[#ED6A5A] bg-clip-text text-transparent">movis.</span>
        </motion.h1>

        <motion.p 
          className="text-sm md:text-lg text-light font-medium mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          MOVIS is a dynamic community of innovators, developers, and researchers tackling real-world challenges through sustainable technology. 
          We bridge the gap between academia and industry by developing prototypes, filing patents, and competing in national/international events.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Link href="/Contact" className="w-full sm:w-auto">
            <button className="w-full bg-heading hover:bg-heading/90 border-2 border-heading text-white text-sm sm:text-base py-3 px-8 sm:px-12 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-95">
              Join Our Team
            </button>
          </Link>
          <Link href="/Projects" className="w-full sm:w-auto">
            <button className="w-full bg-transparent hover:bg-gray-50 border-2 border-heading text-heading text-sm sm:text-base py-3 px-8 sm:px-12 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-95">
              Explore Projects
            </button>
          </Link>
        </motion.div>

        <motion.div 
          className="mt-8 sm:hidden"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Image src={down} height={30} width={30} alt="Scroll down indicator" />
        </motion.div>
      </motion.div>

      {/* Video Showcase */}
      <motion.div 
        className="mt-12 sm:mt-20 w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        whileHover={{ scale: 1.01 }}
      >
        <iframe 
          className="w-full h-full" 
          src="https://drive.google.com/file/d/1t9435kibW70sxUqCl-L7wjJrD6GHWiYm/preview" 
          allow="autoplay"
          title="MOVIS Team Showcase"
        ></iframe>
      </motion.div>

      {/* Recognized By Section */}
      <motion.div 
        className="w-full mt-16 sm:mt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h3 className="text-center text-textAlt font-semibold text-sm mb-6">
          Members Recognized By
        </h3>
        <LogoScroller />
      </motion.div>

      {/* Objectives Section */}
      <motion.div 
        className="w-full max-w-6xl mt-16 sm:mt-28"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="border border-textAlt text-textAlt font-semibold text-xs sm:text-sm text-center px-6 py-1 rounded-full w-fit mx-auto"
          variants={item}
        >
          Our Objectives
        </motion.div>
        <motion.h2 
          className="text-center text-text font-bold text-3xl sm:text-4xl mt-4 mb-12"
          variants={item}
        >
          Our Core Values
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {objectives.map((obj) => (
            <motion.div 
              key={obj.id}
              className="border-2 border-out hover:border-heading/30 p-6 rounded-xl transition-all duration-300 hover:shadow-md"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <Image 
                    src={obj.icon} 
                    height={32} 
                    width={32} 
                    alt={obj.title}
                    className="text-heading"
                  />
                  <span className="text-lg font-medium text-heading">0{obj.id}</span>
                </div>
                <h3 className="font-bold text-xl sm:text-2xl leading-snug mb-2">
                  {obj.title}
                </h3>
                <p className="text-light text-sm sm:text-base mt-auto">
                  {obj.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recent Events Section */}
      <motion.div 
        className="w-full max-w-6xl mt-20 sm:mt-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="border border-textAlt text-textAlt font-semibold text-xs sm:text-sm text-center px-6 py-1 rounded-full w-fit mx-auto"
          variants={item}
        >
          Current Affairs
        </motion.div>
        <motion.h2 
          className="text-center text-text font-bold text-3xl sm:text-4xl mt-4 mb-12"
          variants={item}
        >
          Recent Events & Achievements
        </motion.h2>
        
        <Carousel />
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="w-full bg-gradient-to-r from-[#00A778]/10 via-[#F3DE8A]/10 to-[#ED6A5A]/10 rounded-2xl p-8 sm:p-12 mt-20 sm:mt-32 max-w-6xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-heading mb-4">
          Ready to Innovate With Us?
        </h2>
        <p className="text-light text-sm sm:text-base max-w-2xl mx-auto mb-6">
          Whether you want to join our team, collaborate on a project, or just learn more about our work, we'd love to hear from you.
        </p>
        <Link href="/Contact">
          <button className="bg-heading hover:bg-heading/90 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95">
            Get In Touch
          </button>
        </Link>
      </motion.div>
    </section>
  );
}