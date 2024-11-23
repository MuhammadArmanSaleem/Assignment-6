import React from 'react'
import Image from 'next/image'
import { FaCircle } from "react-icons/fa";
import { VscArrowCircleLeft } from "react-icons/vsc";
import { VscArrowCircleRight } from "react-icons/vsc";


const Custom = () => {
  return (
    <div className="bg-slate-200 mobile:pt-52">
  <div className="pt-40 px-8">
    <h2 className="font-bold text-5xl mobile:hidden">Customer Testimonials</h2>
    <h2 className="font-bold text-5xl mobile:flex mobile:justify-center md:hidden">
      What Our Students Say
    </h2>
    <p className="text-lg py-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>

  <div className="grid grid-cols-3 gap-6 mobile:grid-cols-1 mobile:items-center place-items-center px-8">
   
    <div className="container h-[322px] w-[363px] border-2 border-black">
      <div className="box">
        <div className="star-ico">
          <span className="text-xl flex gap-2 px-6 pt-2">★★★★★</span>
        </div>
        <p className="text-lg px-6 py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare.
        </p>
        <div className="p-sec flex items-center justify-around pb-5">
          <Image
            src="/images/pp-1.png"
            alt="James Nduku"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div className="p-intro text-left">
            <p className="text-base font-semibold">James Nduku</p>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
    </div>

    
    <div className="container h-[322px] w-[363px] border-2 border-black mobile:hidden">
      <div className="box">
        <div className="star-ico">
          <span className="text-xl flex gap-2 px-6 pt-2">★★★★★</span>
        </div>
        <p className="text-lg px-6 py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare.
        </p>
        <div className="p-sec flex items-center justify-around pb-5">
          <Image
            src="/images/pp-1.png"
            alt="Jane Doe"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div className="p-intro text-left">
            <p className="text-base font-semibold">erik kikembol</p>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </div>
    </div>

    
    <div className="container h-[322px] w-[363px] border-2 border-black mobile:hidden">
      <div className="box">
        <div className="star-ico">
          <span className="text-xl flex gap-2 px-6 pt-2">★★★★★</span>
        </div>
        <p className="text-lg px-6 py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare.
        </p>
        <div className="p-sec flex items-center justify-around pb-5">
          <Image
            src="/images/pp-1.png"
            alt="John Smith"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div className="p-intro text-left">
            <p className="text-base font-semibold">Stephen Kerubo</p>
            <p>Product Manager</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="flex justify-between items-center px-12 pb-12 mt-8">
   
    <div className="flex gap-2">
      <FaCircle size={8} className="cursor-pointer" />
      <FaCircle size={8} className="cursor-pointer" />
      <FaCircle size={8} className="cursor-pointer" />
      <FaCircle size={8} className="cursor-pointer" />
      <FaCircle size={8} className="cursor-pointer" />
    </div>
   
    <div className="flex gap-4">
      <VscArrowCircleLeft
        size={48}
        className="cursor-pointer hover:text-gray-700"
      />
      <VscArrowCircleRight
        size={48}
        className="cursor-pointer hover:text-gray-700"
      />
    </div>
  </div>
</div>

  )
}

export default Custom