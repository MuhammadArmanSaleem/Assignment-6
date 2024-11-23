import React from 'react'
import Image from 'next/image'

const Company = () => {
  return (
    <div className="bg-slate-200 h-[228px] flex flex-col md:flex-row justify-around items-center">
  <div className="pl-3 text-3xl font-bold text-center md:text-left">
    <h1 className="block">Trusted by 2000+ companies worldwide</h1>
    <h1 className="md:hidden">[social proof to build credibility]</h1>
  </div>

  <div className="mt-4 md:mt-0">
    <Image
      src="/images/logos.png"
      alt="Logo"
      width={880}
      height={56}
      className="block md:inline"
    />
  </div>
</div>

  
  )
}

export default Company
