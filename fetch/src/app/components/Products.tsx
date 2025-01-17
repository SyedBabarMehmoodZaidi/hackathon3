import React from 'react'
import card1 from "/public/Images/product-cover-5 (8).png"
import card2 from "/public/Images/product-cover-5 (9).png"
import card3 from "/public/Images/product-cover-5 (10).png"
import card4 from "/public/Images/product-cover-5 (11).png"
import card5 from "/public/Images/product-cover-5 (12).png"
import card6 from "/public/Images/product-cover-5 (13).png"
import card7 from "/public/Images/product-cover-5 (14).png"
import card8 from "/public/Images/product-cover-5 (15).png"
import Dots from "/public/Images/Dotss.png"
import Image from 'next/image'




const Products = () => {
  return (
    <div>
  <div className="flex flex-col items-center justify-center pt-28">
    <div className="text-center space-y-2">
      <p className="w-auto h-auto text-[20px] font-normal text-[#737373]">
        Featured Products
      </p>
      <h1 className="w-auto text-[24px] font-bold">
        BESTSELLER PRODUCTS
      </h1>
      <p className="w-auto h-auto text-[14px] font-normal text-[#737373]">
        Problems trying to resolve the conflict between
      </p>
    </div>

    {/* Image Grid: Responsive for small and large screens */}
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 mt-[80px] ">
      
        <div className="border p-4 rounded-lg flex flex-col items-center hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
          <Image
            src={card1}
            alt="card1"
            className="w-full h-auto mb-4"
          />
          <h1 className="text-lg font-bold mb-2">Graphic Designer</h1>
          <p className="text-gray-600 mb-1">English Department</p>
          <p className="text-sm">
            <span className="text-gray-500 line-through mr-2">$16.48</span>
            <span className="text-green-700 font-bold hover:text-green-900">$6.48</span>
          </p>
          <p className='mt-2'>
              <Image src={Dots} alt='Dot' width={82.23} height={16} />
            </p>
        </div>
    
 
        <div className="border p-4 rounded-lg flex flex-col items-center hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
          <Image
            src={card2}
            alt="card1"
            className="w-full h-auto mb-4"
          />
          <h1 className="text-lg font-bold mb-2">Graphic Designer</h1>
          <p className="text-gray-600 mb-1">English Department</p>
          <p className="text-sm">
            <span className="text-gray-500 line-through mr-2">$16.48</span>
            <span className="text-green-700 font-bold hover:text-green-900">$6.48</span>
          </p>
          <p className='mt-2'>
              <Image src={Dots} alt='Dot' width={82.23} height={16} />
            </p>
        </div>

        <div className="border p-4 rounded-lg flex flex-col items-center hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
          <Image
            src={card3}
            alt="card1"
            className="w-full h-auto mb-4"
          />
          <h1 className="text-lg font-bold mb-2">Graphic Designer</h1>
          <p className="text-gray-600 mb-1">English Department</p>
          <p className="text-sm">
            <span className="text-gray-500 line-through mr-2">$16.48</span>
            <span className="text-green-700 font-bold hover:text-green-900">$6.48</span>
          </p>
          <p className='mt-2'>
              <Image src={Dots} alt='Dot' width={82.23} height={16} />
            </p>
        </div>

        <div className="border p-4 rounded-lg flex flex-col items-center hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
          <Image
            src={card4}
            alt="card1"
            className="w-full h-auto mb-4"
          />
          <h1 className="text-lg font-bold mb-2">Graphic Designer</h1>
          <p className="text-gray-600 mb-1">English Department</p>
          <p className="text-sm">
            <span className="text-gray-500 line-through mr-2">$16.48</span>
            <span className="text-green-700 font-bold hover:text-green-900">$6.48</span>
          </p>
          <p className='mt-2'>
              <Image src={Dots} alt='Dot' width={82.23} height={16} />
            </p>
        </div>
        

        <div className="border p-4 rounded-lg flex flex-col items-center hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
          <Image
            src={card5}
            alt="card1"
            className="w-full h-auto mb-4"
          />
          <h1 className="text-lg font-bold mb-2">Graphic Designer</h1>
          <p className="text-gray-600 mb-1">English Department</p>
          <p className="text-sm">
            <span className="text-gray-500 line-through mr-2">$16.48</span>
            <span className="text-green-700 font-bold hover:text-green-900">$6.48</span>
          </p>
          <p className='mt-2'>
              <Image src={Dots} alt='Dot' width={82.23} height={16} />
            </p>
        </div>

        <div className="border p-4 rounded-lg flex flex-col items-center hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
          <Image
            src={card6}
            alt="card1"
            className="w-full h-auto mb-4"
          />
          <h1 className="text-lg font-bold mb-2">Graphic Designer</h1>
          <p className="text-gray-600 mb-1">English Department</p>
          <p className="text-sm">
            <span className="text-gray-500 line-through mr-2">$16.48</span>
            <span className="text-green-700 font-bold hover:text-green-900">$6.48</span>
          </p>
          <p className='mt-2'>
              <Image src={Dots} alt='Dot' width={82.23} height={16} />
            </p>
        </div>

        <div className="border p-4 rounded-lg flex flex-col items-center hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
          <Image
            src={card7}
            alt="card1"
            className="w-full h-auto mb-4"
          />
          <h1 className="text-lg font-bold mb-2">Graphic Designer</h1>
          <p className="text-gray-600 mb-1">English Department</p>
          <p className="text-sm">
            <span className="text-gray-500 line-through mr-2">$16.48</span>
            <span className="text-green-700 font-bold hover:text-green-900">$6.48</span>
          </p>
          <p className='mt-2'>
              <Image src={Dots} alt='Dot' width={82.23} height={16} />
            </p>
        </div>

        <div className="border p-4 rounded-lg flex flex-col items-center hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
          <Image
            src={card8}
            alt="card1"
            className="w-full h-auto mb-4"
          />
          <h1 className="text-lg font-bold mb-2">Graphic Designer</h1>
          <p className="text-gray-600 mb-1">English Department</p>
          <p className="text-sm">
            <span className="text-gray-500 line-through mr-2">$16.48</span>
            <span className="text-green-700 font-bold hover:text-green-900">$6.48</span>
          </p>
          <p className='mt-2'>
              <Image src={Dots} alt='Dot' width={82.23} height={16} />
            </p>
        </div>
        </div>
  </div>
</div>

  
  )
}

export default Products
