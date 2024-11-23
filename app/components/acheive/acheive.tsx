import React from 'react'

const Acheive = () => {
  return (
    <div>

      
        <div className="text-center mt-48">
  <h2 className="font-bold text-5xl">Our Achievements</h2>
  <p className="mx-24 text-lg py-12 mobile:hidden">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
  </p>
  <p className="mx-24 text-lg py-12 lg:hidden">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
  </p>
</div>

<div className="grid grid-cols-4 mobile:grid-cols-2 mobile:place-content-evenly gap-8">
  <div className="h-[80px] py-1 w-[296px] text-center">
    <h3 className="font-bold text-5xl">+200</h3>
    <p className="text-lg pt-2">Courses</p>
  </div>

  <div className="h-[80px] py-1 w-[296px] text-center">
    <h3 className="font-bold text-5xl">50K</h3>
    <p className="text-lg pt-2">Mentors</p>
  </div>

  <div className="h-[80px] py-1 w-[296px] text-center">
    <h3 className="font-bold text-5xl">370K</h3>
    <p className="text-lg pt-2">Students</p>
  </div>

  <div className="h-[80px] py-1 w-[296px] text-center">
    <h3 className="font-bold text-5xl">100+</h3>
    <p className="text-lg pt-2">Recognition</p>
  </div>
</div>









         <div className="text-center mt-48 mobile:hidden">
        <h2 className="font-bold text-5xl">Our Achivements</h2>
        <p className="mx-24 text-lg py-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
      </div> 
          
         <div className=" grid grid-cols-4 mobile:hidden">
        
          <div className="h-[80px] py-1 w-[296px] text-center">
            <h3 className="font-bold text-5xl">+200</h3>
            <p className="pl-50 text-lg pt-2">Courses</p>
          </div>
        
          <div className="h-[80px] py-1 w-[296px] text-center">
            <h3 className="font-bold text-5xl">50K</h3>
            <p className="pl-50 text-lg pt-2">Mentors</p>
          </div>
        
          <div className="h-[80px] py-1 w-[296px] text-center">
            <h3 className="font-bold text-5xl">370K</h3>
            <p className="pl-50 text-lg pt-2">Students</p>
          </div>
        
          <div className="h-[80px] py-1 w-[296px] text-center">
            <h3 className="font-bold text-5xl">100+</h3>
            <p className="pl-50 text-lg pt-2">Recognition</p>
          </div>

         </div>
        

    </div>
  )
}

export default Acheive