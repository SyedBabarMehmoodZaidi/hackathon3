"use client"


import React, { useState } from 'react'

const Add = () => {

    const [quantity,setQuantity] = useState(1);

     // Temporary
    const stock = 4 

    const handleQuantity = (type: "i" | "d") => {
        if(type==="d" && quantity > 1){
            setQuantity((prev)=> prev - 1);
        }
        if(type==="i" && quantity < stock){
            setQuantity((prev)=> prev + 1);
        }
    }

  return (
    <div className='flex flex-col gap-4'>
        <h4 className='font-medium'>Choose a Qunatity</h4>
        <div className="flex justify-between">
            <div className="flex items-center gap-4">
            <div className="bg-gray-100 py-2 px-4 rounded-3xl flex justify-between items-center w-32">
                <button className='cursor-pointer text-xl' onClick={()=>handleQuantity("d")}>-</button>
                {quantity}
                <button className='cursor-pointer text-xl' onClick={()=>handleQuantity("i")}>+</button>
            </div>
            <div className="text-xs">Only <span className='text-orange-500'>4 items</span> left! <br /> {"Don't"} miss it</div>
            </div>
        </div>
      
    </div>
  )
}

export default Add