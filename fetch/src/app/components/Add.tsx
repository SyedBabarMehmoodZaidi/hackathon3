"use client"

import React, { useState } from 'react'

// Define the prop type
interface AddProps {
  productPrice: number;  // Define productPrice type
}

const Add = ({ productPrice }: AddProps) => {
  const [quantity, setQuantity] = useState(1);
  const stock = 4;  // Available stock

  // Handle quantity changes
  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
    if (type === "i" && quantity < stock) {
      setQuantity(prev => prev + 1);
    }
  }

  // Calculate the total amount
  const totalAmount = quantity * productPrice;

  return (
    <div className='flex flex-col gap-4'>
      <h4 className='font-medium'>Choose a Quantity</h4>
      <div className="flex justify-start items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex justify-between items-center w-32">
            <button className='cursor-pointer text-xl' onClick={() => handleQuantity("d")}>-</button>
            {quantity}
            <button className='cursor-pointer text-xl' onClick={() => handleQuantity("i")}>+</button>
          </div>
          <div className="text-xs">Only <span className='text-orange-500'>{stock} items</span> left! <br /> {"Don't"} miss it</div>
        </div>
      
      <div className="mt-4 flex flex-col items-start bg-gray-100 p-4 rounded-lg shadow-lg">
  <h4 className="font-medium text-xl text-gray-800">Total Amount</h4>
  <p className="text-2xl font-semibold text-[#23A6F0] mt-2">
    ${totalAmount.toFixed(2)} {/* Ensure 2 decimal places */}
  </p>
</div>

</div>
    </div>
  )
}

export default Add;
