import React from 'react'
import Image from 'next/image'
const Banner = () => {
  return (
    <div>
    

                     
                        <div className="banner flex flex-col md:flex-row justify-between items-center md:items-start">
  <div className="text mt-16 md:mt-72 text-center md:text-left">
    <h1 className="text-4xl md:text-5xl mx-4 md:mx-16">Learn new skills <br />online with ease</h1>
    <p className="pt-6 mx-4 md:mx-16">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>

    <div className="btn mt-8 flex mobile:justify-center gap-6 md:pl-16  md:mt-14">
      <button className="bg-black text-white px-6 py-2 rounded-md">
        Start Learning
      </button>
      <button className="border-2 border-black text-black px-6 py-2 rounded-md hover:bg-black hover:text-white">
        Explore Courses
      </button>
    </div>
  </div>

  <div className="image mt-8 md:mt-0">
    <Image
      src="/images/image.png"
      alt="Learning"
      width={640}
      height={900}
    />
  </div>
</div>


    </div>
  )
}

export default Banner
