"use client";

import Link from "next/link";
import Image from "next/image";
import { alt_logo, ig, link } from "../../public/assets";
import { usePathname } from "next/navigation";

const Footer = () => {
  const currentPath = usePathname();

  const getLinkStyle = (path) => {
    return `text-lg transition-colors duration-200 ${
      path === currentPath 
        ? "text-textAlt font-semibold" 
        : "text-light font-medium hover:text-textAlt"
    }`;
  };

  const footerLinks = [
    { name: "Homepage", path: "/" },
    { name: "About", path: "/About" },
    { name: "Projects", path: "/Projects" },
    { name: "Contact", path: "/Contact" }
  ];

  const socialLinks = [
    { icon: ig, alt: "Instagram", url: "https://www.instagram.com/movisvitcc/" },
    { icon: link, alt: "LinkedIn", url: "https://www.linkedin.com/company/movisvitcc/" }
  ];

  return (
    <footer className="w-full bg-white mt-20 sm:mt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-b border-out">
          {/* Logo and Description */}
          <div className="flex flex-col items-start">
            <Image
              src={alt_logo}
              height={150}
              width={150}
              alt="MOVIS Logo"
              className="w-32 md:w-36 mb-6"
              priority
            />
            <p className="text-light text-base mb-6">
              Innovating for a sustainable future through robotics and technology.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col">
            <h3 className="text-base font-semibold mb-4 text-heading">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <span className={getLinkStyle(link.path)}>
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col">
            <h3 className="text-base font-semibold mb-4 text-heading">Contact Us</h3>
            <address className="not-italic text-light text-base mb-6">
              Vellore Institute of Technology<br />
              Vandalur - Kelambakkam Road<br />
              Chennai, Tamil Nadu - 600 127<br />
              India
            </address>
            
            <div className="flex flex-col">
              <h3 className="text-base font-semibold mb-4 text-heading">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.alt}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-75 transition-opacity"
                  >
                    <Image
                      src={social.icon}
                      height={30}
                      width={30}
                      alt={social.alt}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-4 text-center">
          <p className="text-xs text-textAlt">
            Copyright © {new Date().getFullYear()}, MOVIS. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;