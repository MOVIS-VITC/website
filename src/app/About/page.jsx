"use client"

import Image from "next/image";
import LogoScroller from "../../components/InfiniteScroller/LogoScroller";
import EmployeeCard from "../../components/EmployeeCard";
import EmployeeCardII from "../../components/EmployeeCardII";
import { down } from "../../../public/assets";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Members = [
  { name: 'Kautilya Sai Nath', link: '/assets/members/Kautilya_Sai_Nath.jpeg', dept: 'Mechanical', tagline: 'I served as the Mechanical Lead for Team MOVIS, and my experience with the team has significantly enhanced my skills as a mechatronics engineer. Through the competitions we participated in, I not only honed my technical abilities but also developed strong leadership skills. Being a part of Team MOVIS allowed me to connect with like-minded, passionate makers and engineers. It was a truly rewarding experience, and I look forward to welcoming new members to join and excel with us.' },
  { name: 'OJAS DHAR', link: '/assets/members/ojas_dhar.webp', dept: 'Electrical', tagline: 'Engineering, creating, innovating and tinkering with things beings me unsurpassed joy and a strong sense of fulfillment. As the Electronics lead of the team, Team Movis Welcomes you and wishes you success in your future engineering endeavours!' },
  { name: 'Lathika G S', link: '/assets/members/Lathika_GS.jpg', dept: 'Programming', tagline: 'I am Lathika from Team Movis, a passionate programmer and tech enthusiast. At Movis, we thrive on innovation, pushing the boundaries of technology through hackathons and real-world problem-solving. Our team specializes in developing AI-driven solutions, integrating cutting-edge tools to create impactful applications. We believe in continuous learning, collaboration, and transforming ideas into reality.' },
  { name: 'Vivek', link: '/assets/members/Vivek_Choudhry.jpg', dept: 'Programming', tagline: 'Eat. Sleep. Train. Deploy. Innovate. Repeat.' },
  { name: 'S.G.Ratheesh Raghavender', link: '/assets/members/SG_Ratheesh_Raghavender.jpg', dept: 'Electrical', tagline: 'Be like water' },
  { name: 'Aadhithyaa Kumar', link: '/assets/members/Aadhithyaa_Kumar.jpg', dept: 'Electrical', tagline: 'Be Curious, Be Determined and Be a Student.' },
  { name: 'Mithunvel KL', link: '/assets/members/Mithunvel_KL.jpg', dept: 'Electrical', tagline: "When the going gets tough, I'm already halfway there—no excuses, just results."},
  { name: 'Vanshita Gupta S', link: '/assets/members/Vanshita_Gupta.jpg', dept: 'Programming', tagline: "At Team Movis, we believe in pushing the boundaries of AI, robotics, and intelligent systems. Through programming, machine learning, and innovation, we aim to bridge the gap between technology and real-world impact. Let's build, learn, and create the future together!" },
  { name: 'Deepali Banka', link: '/assets/members/Deepali_Banka.jpg', dept: 'Programming', tagline: "I just woke up man. Can't think of anything rn" },
  { name: 'Dishita', link: '/assets/members/Dishita.jpg', dept: 'Electrical', tagline: "We are a group of innovators, engineers, and space enthusiasts striving to design, build, and launch cutting-edge aerospace solutions. On behalf of Team MOVIS, we want to inspire others to dream big, explore the unknown, and never stop questioning. Space is not just a destination—it's a challenge that brings out the best in human ingenuity." },
  { name: 'AMRIT SS', link: '/assets/members/Amrit_SS.jpg', dept: 'Electrical', tagline: 'Trust the process!' },
  { name: 'Darsan Y G', link: '/assets/members/Darsan_Y_G.jpg', dept: 'Mechanical', tagline: 'All the best' },
  { name: 'Pranav', link: '/assets/members/Pranav_P.jpeg', dept: 'Programming', tagline: 'Robotics Engineer. "In physics, as in life, the path of least resistance is often the least interesting"' },
  { name: 'Leroy Alex Jacob', link: '/assets/members/Leroy_Alex_Jacob.jpg', dept: 'Mechanical', tagline: 'What was once said to be impossible, is now reality' },
  { name: 'Twinkle Meziah A', link: '/assets/members/Twinkle_Meziah.jpg', dept: 'Electrical', tagline: 'Be like water' },
  { name: 'RATISH R A', link: '/assets/members/Ratish_R _A.jpg', dept: 'Programming', tagline: '"When life gets tough, you gotta neural network your way through it—because even the hardest problems can be solved with a little deep learning!"' },
  { name: 'Sonal', link: '/assets/members/Sonal.jpg', dept: 'Electrical', tagline: "I'm passionate about electrical engineering and excited to contribute to innovative projects. On behalf of the team, we're committed to pushing boundaries and learning together." },
  { name: 'Mirudhula', link: '/assets/members/Mirudhula_Sankar.jpg', dept: 'Programming', tagline: "Hello everyone! I'm Mirudhula, a second-year B.Tech CSE (AIML) student and part of Team Movis at VIT Chennai. As a member of the Programming Department, I collaborate with seniors and peers on hackathons and projects, working alongside the Mechanical and Electrical departments too. Together, we build innovative solutions and it's great to be a part of Movis!" },
  { name: 'Nakshatra Aich', link: '/assets/members/Nakshatra_Aich.jpg', dept: 'Social Media', tagline: 'Movis is a place to find like minded individuals' },
  { name: 'Param Patel', link: '/assets/members/Param_Patel.jpg', dept: 'Mechanical', tagline: 'Wakanda forever' },
  { name: 'Mithil Girish', link: '/assets/members/mithilgirish.JPG', dept: 'Programming', tagline: 'Code. Design. Capture. Build. Repeat.' },
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
    <section ref={ref} className="flex flex-col items-center font-poppins sm:mt-24 mt-12 overflow-hidden">
      
      <motion.div 
        initial={{y: 20, opacity:0}}
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
          Team Movis is a passionate group of innovators, engineers, and tech enthusiasts thriving on innovation and pushing the boundaries of technology through hackathons and real-world problem-solving.
        </div>
      </motion.div>

      <Image 
        className="md:hidden mb-6 mt-4" 
        src={down} 
        alt="Scroll down"
        width={24}
        height={24}
      />

      <div className="hidden sm:mt-28 mt-12 w-full max-w-[1150px] sm:flex flex-col items-center gap-12 sm:gap-24 xl:px-0 sm:px-16 px-7">
        <div className="flex sm:flex-row flex-col w-full md:gap-12 gap-8">
          <motion.div 
            initial={{y: 20, opacity:0}}
            animate={{y: 10, opacity:1}}
            transition={{
              duration: 0.35,
              stiffness: 2000,
              dampening: 200,
              delay: 0.4
            }}
            className="aspect-[4/5] sm:aspect-video grow rounded-lg sm:rounded-2xl bg-out basis-3/4">
              <img src="/assets/pics/robo1.jpg" alt="Team MOVIS" className="w-full h-full object-cover rounded-lg sm:rounded-2xl"/>

              </motion.div> 
          <motion.div 
            initial={{y: 20, opacity:0}}
            animate={{y: 10, opacity:1}}
            transition={{
              duration: 0.35,
              stiffness: 2000,
              dampening: 200,
              delay: 0.5
            }}
            style={{ y }} 
            
            className="flex flex-col basis-1/4 gap-1 mt-4">
              
            <h1 className="font-semibold text-2xl text-textAlt">Our team specializes in developing AI-driven solutions</h1>
            <h2 className="font-inter text-sm text-light">We integrate cutting-edge tools to create impactful applications, believing in continuous learning, collaboration, and transforming ideas into reality.</h2>
          </motion.div>
        </div>
        <div className="flex flex-col sm:flex-row-reverse w-full md:gap-12 gap-8">
          <motion.div
            initial={{y: 20, opacity:0}}
            animate={{y: 10, opacity:1}}
            transition={{
              duration: 0.35,
              stiffness: 2000,
              dampening: 200,
              delay: 0.4
            }}
            className="aspect-[4/5] sm:aspect-video grow rounded-lg sm:rounded-2xl bg-out basis-3/4">
                        <img src="/assets/pics/space1.jpg" alt="Team MOVIS" className="w-full h-full object-cover rounded-lg sm:rounded-2xl"/>

              </motion.div> 
          <motion.div 
            initial={{y: 20, opacity:0}}
            animate={{y: 10, opacity:1}}
            transition={{
              duration: 0.35,
              stiffness: 2000,
              dampening: 200,
              delay: 0.5
            }}
            style={{ y }} 
            className="flex flex-col basis-1/4 gap-1 -mt-12">
            <h1 className="font-semibold text-2xl text-textAlt">We're a group of innovators, engineers, and space enthusiasts</h1>
            <h2 className="font-inter text-sm text-light">We strive to design, build, and launch cutting-edge aerospace solutions, inspiring others to dream big and explore the unknown.</h2>
          </motion.div>
        </div>
      </div>

      <div className="lg:hidden sm:mt-24 mt-12 w-full max-w-[1150px] flex flex-col items-center gap-12 sm:gap-24 xl:px-0 sm:px-16 px-7">
        <motion.div 
          initial={{y: 20, opacity:0}}
          animate={{y: 10, opacity:1}}
          transition={{
            duration: 0.35,
            stiffness: 2000,
            dampening: 200,
            delay: 0.4
          }}
          className="flex sm:flex-row flex-col w-full md:gap-12 gap-8">
          <div className="aspect-[4/5] sm:aspect-video grow rounded-lg sm:rounded-2xl bg-out basis-3/4">
          </div> 
          <div className="flex flex-col basis-1/4 gap-1">
            <h1 className="font-semibold text-2xl text-textAlt">Our team specializes in developing AI-driven solutions</h1>
            <h2 className="font-inter text-sm text-light">We integrate cutting-edge tools to create impactful applications, believing in continuous learning, collaboration, and transforming ideas into reality.</h2>
          </div>
        </motion.div>
        <motion.div 
          initial={{y: 20, opacity:0}}
          animate={{y: 10, opacity:1}}
          transition={{
            duration: 0.35,
            stiffness: 2000,
            dampening: 200,
            delay: 0.4
          }}
          className="flex flex-col sm:flex-row-reverse w-full md:gap-12 gap-8">
          <div className="aspect-[4/5] sm:aspect-video grow rounded-lg sm:rounded-2xl bg-out basis-3/4"></div> 
          <div className="flex flex-col basis-1/4 gap-1">
            <h1 className="font-semibold text-2xl text-textAlt">We're a group of innovators, engineers, and space enthusiasts</h1>
            <h2 className="font-inter text-sm text-light">We strive to design, build, and launch cutting-edge aerospace solutions, inspiring others to dream big and explore the unknown.</h2>
          </div>
        </motion.div>
      </div>

      <div className="w-full max-w-[1150px] flex flex-col items-center xl:px-0 px-7">
        
        <div className="mt-16 mb-4 sm:mt-24 border-[1px] w-fit border-textAlt text-textAlt font-semibold text-xs sm:text-sm text-center px-8 py-1 rounded-full">
          Current Roster
        </div>
        <div className="text-center text-text font-semibold text-4xl mb-8">
          Meet The Team
        </div>
        
        {/* All Members */}
        <div className="text-2xl w-full text-textAlt text-left font-semibold">Members</div>
        <div className="hidden lg:grid grid-cols-3 gap-8 w-full mt-4">
          {Members.map((member, index) => {
            const isLoneElement = (Members.length) % 3 === 1 && index === Members.length - 1;
            const wrapperClass = isLoneElement ? 'col-start-2 col-end-3' : 'wrapper';

            return (
              <div key={index} className={wrapperClass}>
                <EmployeeCardII 
                  name={member.name} 
                  link={member.link} 
                  dept={member.dept} 
                  tagline={member.tagline}
                  width={300}  // Add a default width
                  height={300} // Add a default height
                />
              </div>
            );
          })}
        </div>
        <div className={`relative grid lg:hidden md:grid-cols-2 grid-cols-1 grid-flow-row gap-4 w-full mt-4 ${isCollapsed ? 'max-h-96 overflow-y-hidden' : 'h-auto'}`}>
          {Members.map((member, index) => (
            <div key={index}>
              <EmployeeCardII 
                name={member.name} 
                link={member.link} 
                dept={member.dept} 
                tagline={member.tagline}
                width={300}  // Add a default width
                height={300} // Add a default height
              />
            </div>
          ))}
          <button onClick={toggleHeight} className={`${isCollapsed? 'bg-gradient-to-b from-transparent via-neutral to-neutral w-full absolute -bottom-1 flex items-center justify-center left-1/2 transform -translate-x-1/2': 'hidden'}`}>
            <div className="text-center py-2 px-4 text-xs font-semibold text-textAlt pt-8">Show More</div>
          </button>
        </div>
      </div>
    </section>
  )
}