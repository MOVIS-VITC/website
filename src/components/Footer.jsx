"use client"

import Link from "next/link";
import Image from "next/image";
import { alt_logo, ig, link } from "../../public/assets";
import { usePathname } from "next/navigation";

const Footer = () => {

    const currentPath = usePathname();

    const getLinkStyle = (path) => {
        return path === currentPath ? "xl:text-lg text-heading font-semibold" : "xl:text-lg text-light font-medium"; // Apply class only if paths match
    };

    return (
        <section className="flex flex-col items-center font-poppins gap-12 mt-12 sm:mt-20 ">
            <div className="sm:mt-28 mt-12 w-full max-w-[1150px] flex flex-col sm:flex-row justify-between items-start xl:px-0 sm:px-16 px-7"> 
                <div className="basis-2/3 sm:mb-0 mb-8 flex flex-col w-full -mt-2 text-[2.5rem] lg:text-[3rem] xl:text-[4.5rem] text-textAlt font-semibold leading-[3rem] lg:leading-[3.5rem] xl:leading-[5rem] gap-32 h-full">
                    <div>Lorem ipsum <br/>dolor sit <span className="text-[#ED6A5A]">a met,</span><br/> <span className="text-[#F3DE8A]">consenter</span><br/> <span className="text-[#00A778]">adipescent.</span></div>
                </div>
                <div className="basis-1/3 flex flex-col justify-between items-stretch lg:mr-20 sm:gap-8 gap-4">
                    <div className="flex flex-col">
                        <div className="xl:text-base text-sm font-semibold mb-1 xl:mb-3">Pages</div>
                        <Link href="/">
                            <div className={getLinkStyle("/")}>Homepage</div>
                        </Link>
                        <Link href="/About" >
                            <div className={getLinkStyle("/About")}>About</div>
                        </Link>
                        <Link href="/Projects" >
                            <div className={getLinkStyle("/Projects")}>Projects</div>
                        </Link>
                        <Link href="/Contact" >
                            <div className={getLinkStyle("/Contact")}>Contact</div>
                        </Link>
                    </div>
                    <div className="flex flex-col">
                        <div className="xl:text-base text-sm font-semibold  mb-1 xl:mb-3">Address</div>
                        <div className="xl:text-lg text-light font-medium">Vellore Institute of Technology, Vandalur - Kelambakkam Road Chennai, Tamil Nadu - 600 127</div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <Image
                            src={ig} // Route of the image file
                            height={30} // Desired size with correct aspect ratio
                            width={30} // Desired size with correct aspect ratio
                            alt="Logo"
                        />
                        <Image
                        src={link} // Route of the image file
                        height={30} // Desired size with correct aspect ratio
                        width={30} // Desired size with correct aspect ratio
                        alt="Logo"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[1150px] flex flex-row items-center gap-12 sm:gap-24 xl:px-0 sm:px-16 px-7 justify-start">
                <Image
                        src={alt_logo} // Route of the image file
                        height={150} // Desired size with correct aspect ratio
                        width={150} // Desired size with correct aspect ratio
                        alt="Logo"
                        className="xl:w-36 w-32"
                />
            </div>
            <div className="w-full border-2 text-xs py-2 text-textAlt border-t-out flex flex-row justify-center">
                <p>Copyright © 2023, Meine Electric. All Rights Reserved. Icons by <u><a target="_blank" href="https://icons8.com/">Icons8</a></u></p>
            </div>
        </section>
    )
}

export default Footer