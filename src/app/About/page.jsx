"use client"

import Image from "next/image";
import LogoScroller from "../../components/InfiniteScroller/LogoScroller";
import EmployeeCard from "../../components/EmployeeCard";
import EmployeeCardII from "../../components/EmployeeCardII";
import { down, placeholder } from "../../../public/assets";
import { useState, useRef } from "react";
import { motion,  useScroll,  useTransform,  MotionValue, } from "framer-motion";

const Leads = [
  { name: 'Alice', link: placeholder, dept: 'Member' },
  { name: 'Alice', link: placeholder, dept: 'Member' },
  { name: 'Alice', link: placeholder, dept: 'Member' },
  { name: 'Alice', link: placeholder, dept: 'Member' },
  { name: 'Alice', link: placeholder, dept: 'Member' },
  { name: 'Alice', link: placeholder, dept: 'Member' },
  { name: 'Alice', link: placeholder, dept: 'Member' },
];

const Faculty = [
  { name: 'Alice', link: placeholder, dept: 'Member' },
  { name: 'Alice', link: placeholder, dept: 'Member' },
];

const Members = [
  { name: 'Alice', link: placeholder, dept: 'Member' },
  { name: 'Alice', link: placeholder, dept: 'Member' },
  { name: 'Alice', link: placeholder, dept: 'Member' },
  { name: 'Alice', link: placeholder, dept: 'Member' },
  { name: 'Alice', link: placeholder, dept: 'Member' },
  { name: 'Alice', link: placeholder, dept: 'Member' },
  { name: 'Alice', link: placeholder, dept: 'Member' },
  { name: 'Alice', link: placeholder, dept: 'Member' },
  { name: 'Alice', link: placeholder, dept: 'Member' },
  { name: 'Alice', link: placeholder, dept: 'Member' },
];

function useParallax(value) {
  return useTransform(value, [0, 1], ["5%", "60%"]);
}

export default function About() {

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleHeight = () => {
    setIsCollapsed(!isCollapsed);
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress);

    return (
      <section ref={ref} className="flex flex-col items-center font-poppins sm:mt-24 mt-12  overflow-hidden">
        
        <motion.div 
        initial={{y: 20,opacity:0}}
        animate={{y: 10, opacity:1}}
        transition={{
          duration: 0.35,
          stiffness: 2000,
          dampening: 200,
          delay: 0.25
        }}
          className="text-5xl flex flex-col items-center px-7 xl:px-0">
          <div className="lg:text-6xl text-5xl font-bold text-heading mt-4 text-center">
            About <span className="movis bg-gradient-to-r from-[#00A778] via-[#F3DE8A] to-[#ED6A5A] bg-clip-text text-transparent">movis.</span>
          </div>
          <div className="text-center text-sm md:text-xl text-light font-medium mt-2 max-w-[850px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </motion.div>

        <Image className="md:hidden mb-6 mt-4" src={down}></Image>

        <div className="sm:mt-24 mt-12 w-full max-w-[1150px] flex flex-col items-center gap-12 sm:gap-24 xl:px-0 sm:px-16 px-7">
          <div className="flex sm:flex-row flex-col w-full md:gap-12 gap-8">
            <div className="aspect-[4/5] sm:aspect-video grow rounded-lg sm:rounded-2xl bg-out basis-3/4"></div> 
            <motion.div style={{ y }} className="flex flex-col basis-1/4 gap-1">
              <h1 className="font-semibold text-2xl text-textAlt">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
              <h2 className="font-inter text-sm text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum.</h2>
            </motion.div>
          </div>
          <div className="flex flex-col sm:flex-row-reverse w-full md:gap-12 gap-8">
            <div className="aspect-[4/5] sm:aspect-video grow rounded-lg sm:rounded-2xl bg-out basis-3/4"></div> 
            <motion.div style={{ y }} className="flex flex-col basis-1/4 gap-1 -mt-12">
              <h1 className="font-semibold text-2xl text-textAlt">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
              <h2 className="font-inter text-sm text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum.</h2>
            </motion.div>
          </div>
        </div>

        <div className="lg:hidden sm:mt-24 mt-12 w-full max-w-[1150px] flex flex-col items-center gap-12 sm:gap-24 xl:px-0 sm:px-16 px-7">
          <div className="flex sm:flex-row flex-col w-full md:gap-12 gap-8">
            <div className="aspect-[4/5] sm:aspect-video grow rounded-lg sm:rounded-2xl bg-out basis-3/4"></div> 
            <div className="flex flex-col basis-1/4 gap-1">
              <h1 className="font-semibold text-2xl text-textAlt">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
              <h2 className="font-inter text-sm text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum.</h2>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row-reverse w-full md:gap-12 gap-8">
            <div className="aspect-[4/5] sm:aspect-video grow rounded-lg sm:rounded-2xl bg-out basis-3/4"></div> 
            <div className="flex flex-col basis-1/4 gap-1">
              <h1 className="font-semibold text-2xl text-textAlt">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
              <h2 className="font-inter text-sm text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum.</h2>
            </div>
          </div>
        </div>

        <div className="w-full  max-w-[1150px] flex flex-col items-center xl:px-0  px-7">
          <div className="mt-16 mb-4 sm:mt-24 border-[1px] w-fit  border-textAlt text-textAlt font-semibold text-xs sm:text-sm text-center px-8 py-1 rounded-full">
            Current Roster
          </div>
          <div className="text-center text-text font-semibold text-4xl mb-8">
            Meet The Team
          </div>
          
          <div className="text-2xl w-full text-textAlt text-left font-semibold">Leads</div>
          <div className="hidden lg:grid grid-cols-4 gap-8 w-full mt-4">
            {Leads.map((member, index) => {
              return <EmployeeCard key={index} name={member.name} link={member.link} dept={member.dept} />
            })}
          </div>
          <div className={`relative grid lg:hidden md:grid-cols-2 grid-cols-1 grid-flow-row gap-4 w-full mt-4 ${isCollapsed ? 'max-h-96 overflow-y-hidden' : 'h-auto'}`}>
            {Leads.map((member, index) => (
              <div key={index}>
                <EmployeeCardII key={index} length={member.length} name={member.name} link={member.link} dept={member.dept} />
              </div>
            ))}
            <button onClick={toggleHeight} className="absolute bottom-0 left-1/2">
              <Image src={down} alt="down arrow" width={10} height={10} />
            </button>
          </div>

          <div className="text-2xl w-full text-textAlt text-left font-semibold mt-10">Faculty Advisors</div>
          <div className="hidden lg:grid grid-cols-4 gap-8 w-full mt-4">
            {Faculty.map((member, index) => {
              return <EmployeeCard key={index} name={member.name} link={member.link} dept={member.dept} />
            })}
          </div>
          <div className="grid lg:hidden md:grid-cols-2 grid-cols-1 grid-flow-row gap-4 w-full mt-4">
            {Faculty.map((member, index) => {
              return (
                <div >
                  <EmployeeCardII key={index} length={member.length} name={member.name} link={member.link} dept={member.dept} />
                </div>
              );
            })}
          </div>

          <div className="text-2xl w-full text-textAlt text-left font-semibold mt-10">Team</div>
          <div className="hidden lg:grid grid-cols-3 grid-flow-row gap-4 w-full mt-4">
            {Members.map((member, index) => {
              const isLoneElement = (Members.length) % 3 === 1 && index === Members.length - 1;
              const wrapperClass = isLoneElement ? 'col-start-2 col-end-3' : 'wrapper';

              return (
                <div className={wrapperClass}>
                  <EmployeeCardII key={index} length={member.length} name={member.name} link={member.link} dept={member.dept} />
                </div>
              );
            })}
          </div>
          <div className="grid lg:hidden md:grid-cols-2 grid-cols-1 grid-flow-row gap-4 w-full mt-4">
            {Members.map((member, index) => {
              return (
                <div >
                  <EmployeeCardII key={index} length={member.length} name={member.name} link={member.link} dept={member.dept} />
                </div>
              );
            })}
          </div>

          <div className="text-2xl w-full text-textAlt text-left font-semibold mt-10">Advisory</div>
          <div className="lg:grid hidden grid-cols-3 grid-flow-row gap-4 w-full mt-4">
            {Members.map((member, index) => {
              const isLoneElement = (Members.length) % 3 === 1 && index === Members.length - 1;
              const wrapperClass = isLoneElement ? 'col-start-2 col-end-3' : 'wrapper';

              return (
                <div className={wrapperClass}>
                  <EmployeeCardII key={index} length={member.length} name={member.name} link={member.link} dept={member.dept} />
                </div>
              );
            })}
          </div>
          <div className="grid lg:hidden md:grid-cols-2 grid-cols-1 grid-flow-row gap-4 w-full mt-4">
            {Members.map((member, index) => {
              return (
                <div >
                  <EmployeeCardII key={index} length={member.length} name={member.name} link={member.link} dept={member.dept} />
                </div>
              );
            })}
          </div>

          

        </div>
        
      </section>
    )
  }