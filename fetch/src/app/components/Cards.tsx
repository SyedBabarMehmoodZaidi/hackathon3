import Image from 'next/image'
import React from 'react'

import CardMan from '/public/Images/CardsMan.png'
import CardWomen from '/public/Images/cardwomen.png'
import CardWomen1 from '/public/Images/cardwomen1.png'
import CardKids from '/public/Images/cardskids.png'

const Cards = () => {
  return (
    <div className="bg-white py-10 px-5 pt-24">
  <h2 className="text-center text-xl font-bold mb-2">EDITOR&apos;S PICK</h2> {/* Use &apos; for the apostrophe */}
  <p className="text-center text-gray-500 mb-8">
    Problems trying to resolve the conflict between
  </p>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-start">
    <div className="flex justify-center mb-4 sm:col-span-2 md:col-span-2 md:row-span-2">
      <Image 
        src={CardMan} 
        alt="man" 
        width={510} 
        height={500} 
        layout="intrinsic"
      />
    </div>

    <div className="flex justify-center mb-4 sm:col-span-2 md:col-span-1 md:row-span-2">
      <Image 
        src={CardWomen} 
        alt="women" 
        width={240} 
        height={500} 
        layout="intrinsic"
      />
    </div>

    <div className="flex justify-center mb-4 sm:col-span-2 md:col-span-1">
      <Image 
        src={CardWomen1} 
        alt="women1" 
        width={240} 
        height={242} 
        layout="intrinsic"
      />
    </div>

    <div className="flex justify-center sm:col-span-2 md:col-span-1">
      <Image 
        src={CardKids} 
        alt="kids" 
        width={240} 
        height={242} 
        layout="intrinsic"
      />
    </div>
  </div>
</div>

  )
}

export default Cards