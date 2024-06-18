"use client"

import { motion, stagger} from "framer-motion";
import Link from "next/link";
import Carousel from "../components/Carousel";
import LogoScroller from "../components/InfiniteScroller/LogoScroller";
import { down, leaf, spark, book, star} from "../../public/assets"
import Image from "next/image";

export default function Home() {

  return (
    <section className="flex flex-col items-center font-poppins pt-4 sm:pt-12 xl:px-0 px-7 overflow-hidden">
      <motion.div className="flex flex-col items-center"
      initial={{y: 20,opacity:0}}
      animate={{y: 10, opacity:1}}
      transition={{
        duration: 0.35,
        stiffness: 2000,
        dampening: 200,
        delay: 0.25
      }}
      >
        <div className="border-[1px] border-textAlt text-textAlt font-semibold text-xs sm:text-sm text-center px-8 py-1 rounded-full">
          Special Team Recognized By VIT Chennai
        </div>
        <div className="lg:text-8xl sm:text-7xl text-5xl font-bold text-heading mt-6 text-center">
          We are <span className="movis bg-gradient-to-r from-[#00A778] via-[#F3DE8A] to-[#ED6A5A] bg-clip-text text-transparent">movis.</span>
        </div>
        <div className="text-center text-sm md:text-xl text-light font-medium mt-6 max-w-[850px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <br className="sm:block hidden"/> magna aliqua.
        </div>
        <div className="mt-6 sm:hidden">
          <Image
            src={down} // Route of the image file
            height={30} // Desired size with correct aspect ratio
            width={30} // Desired size with correct aspect ratio
            alt="arrow"
          />
        </div>
      </motion.div>

      <div className="flex flex-col w-full justify-center items-center sm:flex-row gap-0 sm:gap-4">
        <motion.div className="flex flex-col justify-center mt-12 sm:mt-24 sm:w-fit w-full sm:flex-row gap-4"
        initial={{y: 20,opacity:0}}
        animate={{y: 0, opacity:1}}
        transition={{
          duration: 0.15,
          stiffness: 2000,
          dampening: 200,
          delay: 0.5,
        }}>
          <Link href="/Contact" className="sm:w-fit w-full">
            <button className="sm:w-fit w-full flex-grow bg-heading border-2 sm:text-base text-sm border-heading text-neutral py-3 px-16 rounded-lg font-semibold transition transform active:scale-95 ease-in-out">Get In Touch</button>
          </Link>
        </motion.div>                                 
        <motion.div className="flex flex-col justify-center mt-4 sm:mt-24 sm:w-fit w-full sm:flex-row gap-4"
        initial={{y: 20,opacity:0}}
        animate={{y: 0, opacity:1}}
        transition={{
          duration: 0.15,
          stiffness: 2000,
          dampening: 200,
          delay: 0.6,
        }}>
          <Link href="/Projects" className="sm:w-fit w-full">
            <button className="sm:w-fit w-full flex-grow bg-neutral border-2 sm:text-base text-sm border-heading text-heading py-3 px-12 rounded-lg font-semibold font-poppins transition transform active:scale-95 ease-in-out">See Our Projects</button>
          </Link>
        </motion.div>
      </div>

      <motion.div className="mt-12 sm:mt-24 max-w-[1200px] w-full aspect-video"
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{
        duration: 0.35,
        stiffness: 2000,
        dampening: 200,
        delay: 0.9,
      }}>
        <iframe className="max-w-[1200px] w-full aspect-video rounded-2xl" src="https://drive.google.com/file/d/1t9435kibW70sxUqCl-L7wjJrD6GHWiYm/preview" allow="autoplay"></iframe>
      </motion.div>     

      <div className="text-base mt-8 sm:mt-20 font-poppins font-semibold text-textAlt ">Members Recognized By</div>
      <LogoScroller />

      <div className="w-full  max-w-[1150px] flex flex-col items-center">
        <div className="mt-12 mb-4 sm:mt-24 border-[1px] w-fit  border-textAlt text-textAlt font-semibold text-xs sm:text-sm text-center px-8 py-1 rounded-full">
          Our Objectives
        </div>
        <div className="text-center text-text font-semibold text-4xl mb-8">
          Aim
        </div>
        <div className="text-text flex flex-col lg:flex-row font-inter gap-4 w-full">
          <div className="w-full flex flex-row lg:flex-col lg:justify-between border-2 border-out p-6 rounded-xl gap-8 lg:gap-52">
            <Image
              src={leaf} // Route of the image file
              height={30} // Desired size with correct aspect ratio
              width={30} // Desired size with correct aspect ratio
              alt={leaf}
              className="hidden md:block"
            />
            <div className="flex flex-col gap-1">
              <div className="font-medium text-lg">01</div>
              <div className="font-semibold text-xl leading-6">Sustainable <br/>Solutions</div>
            </div>
          </div>
          <div className="w-full flex flex-row lg:flex-col justify-end lg:justify-between border-2 border-out p-6 rounded-xl gap-8 lg:gap-52">
            <Image
              src={book} // Route of the image file
              height={30} // Desired size with correct aspect ratio
              width={30} // Desired size with correct aspect ratio
              alt={leaf}
              className="hidden md:block"
            />
            <div className="flex flex-col gap-1">
              <div className="font-medium text-lg">02</div>
              <div className="font-semibold text-xl leading-6">Learning and<br/>Adaptibility</div>
            </div>
          </div>
          <div className="w-full flex flex-row lg:flex-col lg:justify-between border-2 border-out p-6 rounded-xl gap-8 lg:gap-52">
            <Image
              src={spark} // Route of the image file
              height={30} // Desired size with correct aspect ratio
              width={30} // Desired size with correct aspect ratio
              alt={leaf}
              className="hidden md:block"

            />
            <div className="flex flex-col gap-1">
              <div className="font-medium text-lg">03</div>
              <div className="font-semibold text-xl leading-6">Innovation <br/>Everywhere</div>
            </div>
          </div>
          <div className="w-full flex flex-row lg:flex-col justify-end lg:justify-between border-2 border-out p-6 rounded-xl gap-8 lg:gap-52">
            <Image
              src={star} // Route of the image file
              height={30} // Desired size with correct aspect ratio
              width={30} // Desired size with correct aspect ratio
              alt={leaf}
              className="hidden md:block"

            />
            <div className="flex flex-col gap-1">
              <div className="font-medium text-lg">04</div>
              <div className="font-semibold text-xl leading-6">Drive To <br/>Win & Achieve</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  max-w-[1150px] flex flex-col items-center">
        <div className="mt-12 mb-4 sm:mt-24 border-[1px] w-fit  border-textAlt text-textAlt font-semibold text-xs sm:text-sm text-center px-8 py-1 rounded-full">
          Current Affairs
        </div>
        <div className="text-center text-text font-semibold text-4xl mb-8">
          Recent Events
        </div>
        
      </div>

      <Carousel />
    </section>
  )
}