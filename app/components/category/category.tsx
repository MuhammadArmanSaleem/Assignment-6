import React from 'react'
import Image from 'next/image'
const Category = () => {
  return (
    <div>
       

      <div className="cat-txt mt-28 mx-8 sm:mx-20 lg:mx-72 text-center">
        <h2 className="font-bold text-5xl">Explore Courses By Category</h2>
        <p className="mt-5 text-lg">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
      </div>

      <div className="cat-boxes grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-5 place-items-center">
       
        <div className="bg-slate-200 w-[410px] h-[132px] p-4 flex justify-between mt-10">
          <Image src="/images/design.png" alt="Design & Development" width={100} height={100} />
          <div className="box-txt py-4 pr-16">
            <p className="font-semibold text-lg">Design & Development</p>
            <p className="text-lg font-normal">50+ Courses Available</p>
          </div>
        </div>

        
        <div className="bg-slate-200 w-[410px] h-[132px] p-4 flex justify-between mt-10">
          <Image src="/images/market.png" alt="Marketing" width={100} height={100} />
          <div className="box-txt py-4 pr-16">
            <p className="font-semibold text-lg">Marketing</p>
            <p className="text-lg font-normal">50+ Courses Available</p>
          </div>
        </div>

       
        <div className="bg-slate-200 w-[410px] h-[132px] p-4 flex justify-between mt-10">
          <Image src="/images/dev.png" alt="Development" width={100} height={100} />
          <div className="box-txt py-4 pr-16">
            <p className="font-semibold text-lg">Development</p>
            <p className="text-lg font-normal">50+ Courses Available</p>
          </div>
        </div>

        
        <div className="bg-slate-200 w-[410px] h-[132px] p-4 flex justify-between mt-10 mobile:hidden">
          <Image src="/images/commu.png" alt="Communication" width={100} height={100} />
          <div className="box-txt py-4 pr-16">
            <p className="font-semibold text-lg">Communication</p>
            <p className="text-lg font-normal">50+ Courses Available</p>
          </div>
        </div>

        <div className="bg-slate-200 w-[410px] h-[132px] p-4 flex justify-between mt-10 mobile:hidden">
          <Image src="/images/dig-mark.png" alt="Digital Marketing" width={100} height={100} />
          <div className="box-txt py-4 pr-16">
            <p className="font-semibold text-lg">Digital Marketing</p>
            <p className="text-lg font-normal">50+ Courses Available</p>
          </div>
        </div>

        <div className="bg-slate-200 w-[410px] h-[132px] p-4 flex justify-between mt-10 mobile:hidden">
          <Image src="/images/self-dev.png" alt="Self Development" width={100} height={100} />
          <div className="box-txt py-4 pr-16">
            <p className="font-semibold text-lg">Self Development</p>
            <p className="text-lg font-normal">50+ Courses Available</p>
          </div>
        </div>

        <div className="bg-slate-200 w-[410px] h-[132px] p-4 flex justify-between mt-10 mobile:hidden">
          <Image src="/images/busi.png" alt="Business" width={100} height={100} />
          <div className="box-txt py-4 pr-16">
            <p className="font-semibold text-lg">Business</p>
            <p className="text-lg font-normal">50+ Courses Available</p>
          </div>
        </div>

        <div className="bg-slate-200 w-[410px] h-[132px] p-4 flex justify-between mt-10 mobile:hidden">
          <Image src="/images/finan.png" alt="Finance" width={100} height={100} />
          <div className="box-txt py-4 pr-16">
            <p className="font-semibold text-lg">Finance</p>
            <p className="text-lg font-normal">50+ Courses Available</p>
          </div>
        </div>

        <div className="bg-slate-200 w-[410px] h-[132px] p-4 flex justify-between mt-10 mobile:hidden">
          <Image src="/images/Consul.png" alt="Consulting" width={100} height={100} />
          <div className="box-txt py-4 pr-16">
            <p className="font-semibold text-lg">Consulting</p>
            <p className="text-lg font-normal">50+ Courses Available</p>
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

export default Category