"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { logo } from "../../public/assets";
import { menu } from "../../public/assets";
import { cross } from "../../public/assets";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";

const Navbar = () => {
  
  // To open hamburger menu
  const [menuOpen, setMenu] = useState(false);
  const isOpen = () => {
    setMenu(!menuOpen);
  }

  const MenuScreen = () => {
  return(
    <motion.div 
    className="fixed bg-neutral-40 backdrop-blur-3xl h-full w-full z-[99] top-0 flex flex-col items-center justify-center px-8 pt-14 pb-10 gap-10 "
    initial={{ opacity: 0 }}
    animate={{ opacity: 1  }}
    exit={{ opacity: 0  }}>
        <ul className="menu-buttons flex flex-col gap-8 text-4xl font-semibold font-poppins items-center ">
          <Link href="/" onClick={isOpen}>
            <li className="hover:bg-out rounded-lg py-2 px-3 transition transform active:scale-95 ease-in-out">
                <div className={getLinkStyle("/")}>Home</div>
            </li>
          </Link>
          <Link href="/About" onClick={isOpen}>
            <li className="hover:bg-out rounded-lg py-2 px-3 transition transform active:scale-95 ease-in-out">
                <div className={getLinkStyle("/About")}>About</div>
            </li>
          </Link>
          <Link href="/Projects" onClick={isOpen}>
            <li className="hover:bg-out rounded-lg py-2 px-3 transition transform active:scale-95 ease-in-out">
                <div className={getLinkStyle("/Projects")}>Projects</div>
            </li>
          </Link>
          <Link href="/Contact" onClick={isOpen}>
            <li className="hover:bg-out rounded-lg py-2 px-3 transition transform active:scale-95 ease-in-out">
                <div className={getLinkStyle("/Contact")}>Contact</div>
            </li>
          </Link>
        </ul>
        <div className="flex flex-row justify-end border-2 border-heading rounded-full p-2 ease-in-out">
          <button onClick={isOpen}>
              <Image
                src={cross} // Route of the image file
                height={30} // Desired size with correct aspect ratio
                width={30} // Desired size with correct aspect ratio
                alt="cross"
              />
          </button>
        </div>
    </motion.div>
  )
}


  // To highlight active link
  const currentPath = usePathname();
  const isCurrentPage = (path) => {
    return currentPath === path;
  };
  const getLinkStyle = (path) => {
    return isCurrentPage(path) ? "text-heading" : "text-[#555555]"; // Increase font size for the current page
  };
  
  // Navbar animations
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) =>{
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 350){
      setHidden(true);
    }
    else if((previous > latest && previous - latest > 5)){
      setHidden(false);
    }
    console.log(latest, " ", previous);
  });


  return (
    <motion.div className="sticky top-3 z-50"
    initial={{y:-50, opacity:0}}
    variants={{
      visible: {y: 0, opacity: 1},
      hidden: {y: -80, opacity: 0}
    }}
    animate={hidden ? "hidden":"visible"}
    transition={{
      duration: 0.45,
      stiffness: 2000,
      dampening: 200
    }}
    >
      <nav>
        <AnimatePresence>
          {menuOpen &&
            <MenuScreen/>
          }
        </AnimatePresence>
        <div className="flex flex-row justify-center items-center font-inter font-semibold mx-4">
          <div className="hidden md:flex flex-row items-center justify-between w-fit py-6 px-28 rounded-full gap-16 shadow-2xl bg-neutral">
            <Link href="/" className="transition transform active:scale-95 ease-in-out">
              <Image
                src={logo} // Route of the image file
                height={80} // Desired size with correct aspect ratio
                width={70} // Desired size with correct aspect ratio
                alt="Logo"
              />
            </Link>
            <ul className="flex flex-row gap-0">
              <Link href="/">
                <li className="hover:bg-out rounded-lg py-2 px-3 ">
                    <div className={getLinkStyle("/")}>Home</div>
                </li>
              </Link>
              <Link href="/About">
                <li className="hover:bg-out rounded-lg py-2 px-3 ">
                    <div className={getLinkStyle("/About")}>About</div>
                </li>
              </Link>
              <Link href="/Projects">
                <li className="hover:bg-out rounded-lg py-2 px-3 transition ">
                    <div className={getLinkStyle("/Projects")}>Projects</div>
                </li>
              </Link>
            </ul>
            <Link href="/Contact" className="flex">
              <button className="bg-black rounded-md text-white px-6 pt-2 pb-3 transition transform active:scale-95 ease-in-out">
                  <div>Contact</div>
              </button>
            </Link>
          </div>
          <div className="md:hidden flex flex-row items-center justify-between w-full py-5 px-8 rounded-full gap-12 shadow-2xl bg-neutral">
            <button className="invisible">
              <Image
                  src={menu} // Route of the image file
                  height={20} // Desired size with correct aspect ratio
                  width={20} // Desired size with correct aspect ratio
                  alt="Menu"
                />
            </button>
            <Link href="/" className="transition transform active:scale-95 ease-in-out">
              <Image
                src={logo} // Route of the image file
                height={80} // Desired size with correct aspect ratio
                width={70} // Desired size with correct aspect ratio
                alt="Logo"
              />
            </Link>
            <button className="hamburger hover:bg-out rounded-md py-2 px-2" onClick={isOpen}>
              <Image
                  src={menu} // Route of the image file
                  height={20} // Desired size with correct aspect ratio
                  width={20} // Desired size with correct aspect ratio
                  alt="Menu"
                />
            </button>
          </div>
        </div>
        
      </nav>
    </motion.div>
  );
};

export default Navbar;

