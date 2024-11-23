import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaRegStar } from "react-icons/fa6";
const Courses = () => {
  return (
    <div>
       <div className="text-center mt-48">
  <h2 className="font-bold text-5xl">Courses</h2>
  <p className="mx-24 text-lg py-6">Your Ultimate Guide to learning.</p>
</div> 

<div className="course-rec pt-7">
  <nav className="flex gap-10 h-[36px] bg-white justify-center">
    <Link href="/" className="hover:text-gray-400 pl-3">Popular</Link>
    <Link href="/courses" className="hover:text-gray-400">Recommended</Link>
    <Link href="/services" className="hover:text-gray-400">Best Price</Link>
  </nav>
</div>

<div className="c-sec grid gap-5 grid-cols-3 grid-rows-2 place-items-center mobile:grid-cols-1 mobile:grid-rows-3 mobile:gap-4">
 
  <div className="h-[534px] w-[416px] bg-slate-200 my-9">
    <Image src="/images/c-img.png" alt="Logo" width={416} height={300} />
    <div className="pl-2">
      <p className="float-end font-medium my-3 pr-5">5.0</p>
      <FaRegStar className="float-end mx-2 my-4" />
      <p className="text-sm font-semibold pt-2">Design</p>
      <h5 className="font-bold text-2xl pt-2">UX/UI Design 201</h5>
      <p className="text-base font-normal pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
      <div className="pt-7 flex justify-self-start">
        <button className="border-2 border-black text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white">
          Enroll Now
        </button>
        <span className="px-2 py-2 text-base font-medium">$400</span>
      </div>
    </div>
  </div>

  
  <div className="h-[534px] w-[416px] bg-slate-200 my-9">
    <Image src="/images/c-img.png" alt="Logo" width={416} height={300} />
    <div className="pl-2">
      <p className="float-end font-medium my-3 pr-5">5.0</p>
      <FaRegStar className="float-end mx-2 my-4" />
      <p className="text-sm font-semibold pt-2">Programming</p>
      <h5 className="font-bold text-2xl pt-2">Introduction to Python</h5>
      <p className="text-base font-normal pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
      <div className="pt-7 flex justify-self-start">
        <button className="border-2 border-black text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white">
          Enroll Now
        </button>
        <span className="px-2 py-2 text-base font-medium">$400</span>
      </div>
    </div>
  </div>

 
  <div className="h-[534px] w-[416px] bg-slate-200 my-9">
    <Image src="/images/c-img.png" alt="Logo" width={416} height={300} />
    <div className="pl-2">
      <p className="float-end font-medium my-3 pr-5">5.0</p>
      <FaRegStar className="float-end mx-2 my-4" />
      <p className="text-sm font-semibold pt-2">Business</p>
      <h5 className="font-bold text-2xl pt-2">Data Analysis for Beginners</h5>
      <p className="text-base font-normal pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
      <div className="pt-7 flex justify-self-start">
        <button className="border-2 border-black text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white">
          Enroll Now
        </button>
        <span className="px-2 py-2 text-base font-medium">$400</span>
      </div>
    </div>
  </div>

  
  <div className="h-[534px] w-[416px] bg-slate-200 my-9 mobile:hidden">
    <Image src="/images/c-img.png" alt="Logo" width={416} height={300} />
    <div className="pl-2">
      <p className="float-end font-medium my-3 pr-5">5.0</p>
      <FaRegStar className="float-end mx-2 my-4" />
      <p className="text-sm font-semibold pt-2">Art</p>
      <h5 className="font-bold text-2xl pt-2">Art Specialization</h5>
      <p className="text-base font-normal pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
      <div className="pt-7 flex justify-self-start">
        <button className="border-2 border-black text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white">
          Enroll Now
        </button>
        <span className="px-2 py-2 text-base font-medium">$400</span>
      </div>
    </div>
  </div>

  <div className="h-[534px] w-[416px] bg-slate-200 my-9 mobile:hidden">
    <Image src="/images/c-img.png" alt="Logo" width={416} height={300} />
    <div className="pl-2">
      <p className="float-end font-medium my-3 pr-5">5.0</p>
      <FaRegStar className="float-end mx-2 my-4" />
      <p className="text-sm font-semibold pt-2">Law</p>
      <h5 className="font-bold text-2xl pt-2">Rule of Law</h5>
      <p className="text-base font-normal pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
      <div className="pt-7 flex justify-self-start">
        <button className="border-2 border-black text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white">
          Enroll Now
        </button>
        <span className="px-2 py-2 text-base font-medium">$400</span>
      </div>
    </div>
  </div>

  <div className="h-[534px] w-[416px] bg-slate-200 my-9 mobile:hidden">
    <Image src="/images/c-img.png" alt="Logo" width={416} height={300} />
    <div className="pl-2">
      <p className="float-end font-medium my-3 pr-5">5.0</p>
      <FaRegStar className="float-end mx-2 my-4" />
      <p className="text-sm font-semibold pt-2">Tech</p>
      <h5 className="font-bold text-2xl pt-2">Introduction to Webflow</h5>
      <p className="text-base font-normal pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
      <div className="pt-7 flex justify-self-start">
        <button className="border-2 border-black text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white">
          Enroll Now
        </button>
        <span className="px-2 py-2 text-base font-medium">$400</span>
      </div>
    </div>
  </div>
</div>


<div className="btn flex justify-center items-center mt-12">
  <button className="border-2 border-black text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white">
    View All Courses
  </button>
</div>

    </div>
  )
}

export default Courses