import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaTwitter,} from 'react-icons/fa';
import { TbWorld } from "react-icons/tb";


const Team = () => {
  return (
    <div className="bg-slate-200 h-[896px]">
  <div className="text-center mt-28 pt-16">
    <h2 className="font-bold text-5xl">Our Team</h2>
    <p className="mx-24 text-lg py-8">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>

  <div className="p-sec grid grid-cols-3 grid-rows-2 mobile:grid-cols-1 mobile:grid-rows-3 mobile:items-center gap-6 place-items-center">

    <div className="h-[273px] w-[394px] text-center pt-10">
      <Image
        src="/images/pp-1.png"
        alt="James Nduku"
        width={100}
        height={100}
        className="mx-auto rounded-full"
      />
      <p className="text-xl font-semibold py-4">James Nduku</p>
      <p>Marketing Coordinator</p>
      <div className="icons flex justify-center gap-4 pt-4">
        <FaFacebook size={15} />
        <FaTwitter size={15} />
        <TbWorld size={15} />
      </div>
    </div>


    <div className="h-[273px] w-[394px] text-center pt-10">
      <Image
        src="/images/pp-1.png"
        alt="James Nduku"
        width={100}
        height={100}
        className="mx-auto rounded-full"
      />
      <p className="text-xl font-semibold py-4">James Nduku</p>
      <p>Marketing Coordinator</p>
      <div className="icons flex justify-center gap-4 pt-4">
        <FaFacebook size={15} />
        <FaTwitter size={15} />
        <TbWorld size={15} />
      </div>
    </div>


    <div className="h-[273px] w-[394px] text-center pt-10">
      <Image
        src="/images/pp-1.png"
        alt="James Nduku"
        width={100}
        height={100}
        className="mx-auto rounded-full"
      />
      <p className="text-xl font-semibold py-4">James Nduku</p>
      <p>Marketing Coordinator</p>
      <div className="icons flex justify-center gap-4 pt-4">
        <FaFacebook size={15} />
        <FaTwitter size={15} />
        <TbWorld size={15} />
      </div>
    </div>

   
    <div className="h-[273px] w-[394px] text-center pt-10 mobile:hidden">
      <Image
        src="/images/pp-1.png"
        alt="James Nduku"
        width={100}
        height={100}
        className="mx-auto rounded-full"
      />
      <p className="text-xl font-semibold py-4">James Nduku</p>
      <p>Marketing Coordinator</p>
      <div className="icons flex justify-center gap-4 pt-4">
        <FaFacebook size={15} />
        <FaTwitter size={15} />
        <TbWorld size={15} />
      </div>
    </div>


    <div className="h-[273px] w-[394px] text-center pt-10 mobile:hidden">
      <Image
        src="/images/pp-1.png"
        alt="James Nduku"
        width={100}
        height={100}
        className="mx-auto rounded-full"
      />
      <p className="text-xl font-semibold py-4">James Nduku</p>
      <p>Marketing Coordinator</p>
      <div className="icons flex justify-center gap-4 pt-4">
        <FaFacebook size={15} />
        <FaTwitter size={15} />
        <TbWorld size={15} />
      </div>
    </div>


    <div className="h-[273px] w-[394px] text-center pt-10 mobile:hidden">
      <Image
        src="/images/pp-1.png"
        alt="James Nduku"
        width={100}
        height={100}
        className="mx-auto rounded-full"
      />
      <p className="text-xl font-semibold py-4">James Nduku</p>
      <p>Marketing Coordinator</p>
      <div className="icons flex justify-center gap-4 pt-4">
        <FaFacebook size={15} />
        <FaTwitter size={15} />
        <TbWorld size={15} />
      </div>
    </div>
  </div>
</div>

  
  )
}

export default Team