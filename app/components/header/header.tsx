import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin,} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
  return (
    <div>
      <div className="mobile:hidden socials grid sm:grid-cols-2 bg-slate-200 items-center px-7 h-[54px] border-b-2 border-black">
        
            <div className="contact p-3 text-xs ">
                <p>Phone Number:956 742 455 678   |  Email:info@ddsgnr.com</p>
            </div>

            <div className="social-icon flex space-x-3 justify-end p-3">
                            
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-black ">
                            <FaFacebook size={15} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-black ">
                            <FaTwitter size={15} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-black ">
                            <FaInstagram size={15} />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black ">
                            <FaLinkedin size={15} />
                        </a>
            </div>
         
      </div>

      <div className="nav-bar flex  justify-around bg-slate-200 h-[72px] mt-2 items-center">
      
                <div className="logo">
                        <Image
                        src="/images/logo.png" 
                        alt="Logo"
                        width={100}      
                        height={100}      
                        className="" 
                    />
                </div>
                    <div className="md:hidden mobile:text-2xl ">
                    <GiHamburgerMenu size={48} />
                    </div>
                    <div className="nav-link mobile:hidden">
                                    <nav className="flex gap-10 h-[36px] bg-white items-center">
                                        <Link href="/" className="hover:text-gray-400 pl-3">
                                        Home
                                        </Link>
                                        <Link href="/courses" className="hover:text-gray-400">
                                        Courses
                                        </Link>
                                        <Link href="/services" className="hover:text-gray-400">
                                        Services
                                        </Link>
                                        <Link href="/achievements" className="hover:text-gray-400">
                                        Achievements
                                        </Link>
                                        <Link href="/about" className="hover:text-gray-400">
                                        About Us
                                        </Link>
                                        <Link href="/testimonials" className="hover:text-gray-400">
                                        Testimonials
                                        </Link>
                                        <button className="border-2 border-black text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white">
                                            Login
                                        </button>
                                        <button className="bg-black text-white px-4 py-2 rounded-lg">
                                            Sign Up
                                        </button>
                                    </nav>

                        </div>  


        </div>          

    </div>
  )
}

export default Header
