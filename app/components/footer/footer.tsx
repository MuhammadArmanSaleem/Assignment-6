import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, } from 'react-icons/fa';
const Footer = () => {
  return (
 
<footer>
  
  <div className="flex justify-between px-20 pt-44 mobile:flex-col mobile:items-center mobile:text-center mobile:px-4 mobile:pt-20">
    <div className="mobile:mb-4">
      <p className="font-semibold">Subscribe to our newsletter</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    <div className="input-field">
      <form className="flex items-center gap-4 mobile:flex-col mobile:gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-[265px] p-2 border border-gray-300 rounded-md mobile:w-full"
        />
        <button className="border-2 border-black text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white mobile:w-full">
          Subscribe
        </button>
      </form>
      <p className="text-xs pt-2 mobile:text-center">
        By subscribing you agree to our{" "}
        <a href="#" className="underline text-black">
          Privacy Policy
        </a>
      </p>
    </div>
  </div>


  <div className="flex justify-around mt-20 mobile:flex-col mobile:items-center mobile:gap-12">
    <div className="logo mobile:mb-6">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={100}
        height={100}
        className="mx-auto"
      />
    </div>

    <div className="mobile:text-center">
      <p className="font-semibold text-base">Courses</p>
      <ul className="mobile:mt-4">
        <li className="pt-3">Business</li>
        <li className="pt-3">Development</li>
        <li className="pt-3">Technology</li>
        <li className="pt-3">Design</li>
        <li className="pt-3">Programming</li>
      </ul>
    </div>

    <div className="mobile:text-center">
      <p className="font-semibold text-base">Resources</p>
      <ul className="mobile:mt-4">
        <li className="pt-3">Blog</li>
        <li className="pt-3">Help Center</li>
        <li className="pt-3">Tutorials</li>
        <li className="pt-3">Community</li>
      </ul>
    </div>

    <div className="mobile:text-center">
      <p className="font-semibold text-base">About Us</p>
      <ul className="mobile:mt-4">
        <li className="pt-3">Our Story</li>
        <li className="pt-3">Careers</li>
        <li className="pt-3">Press</li>
        <li className="pt-3">Contact</li>
      </ul>
    </div>
  </div>

  
  <div className="flex justify-between mt-28 px-20 mobile:flex-col mobile:items-center mobile:text-center mobile:mt-16 mobile:px-4">
    <div className="flex justify-around gap-4 py-5 mobile:flex-col mobile:items-center mobile:gap-2">
      <p>© 2023 Ddsgner. All rights reserved</p>
      <div className="flex gap-4 mobile:flex-col mobile:items-center mobile:gap-2">
        <a href="#" className="underline text-black">
          Privacy Policy
        </a>
        <a href="#" className="underline text-black">
          Terms of Service
        </a>
        <a href="#" className="underline text-black">
          Cookies Settings
        </a>
      </div>
    </div>

    <div className="social-icon flex gap-3 py-6 mobile:mt-4">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black"
      >
        <FaFacebook size={15} />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black"
      >
        <FaTwitter size={15} />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black"
      >
        <FaInstagram size={15} />
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black"
      >
        <FaLinkedin size={15} />
      </a>
    </div>
  </div>
</footer>

    
    );
  }
  
export default Footer