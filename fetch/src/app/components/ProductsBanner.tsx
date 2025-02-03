import React from 'react'
import Image from 'next/image'
import GreenMan from '/public/Images/greenman.png'
import Link from 'next/link'
const ProductBanner = () => {
  return (
  
    <div className="w-full rounded-[5px] bg-[#23856D] top-[3200px] border overflow-hidden">
  <div className="w-full h-[709px] flex flex-col sm:flex-row items-center justify-center py-[60px] px-5 sm:px-0">
    {/* Left section (Text) */}
    <div className="w-full sm:w-[509px] text-center sm:text-left flex flex-col gap-[30px]">
      {/* On small devices, the order will be from top to bottom */}
      <h4 className="text-[20px] text-white">{/* Text might be too long, so it's placed first */}SUMMER 2020</h4>
      <h1 className="text-[58px] font-bold text-white">Vita Classic Product</h1>
      <p className="text-[14px] font-medium text-white">
        We know how large objects will act, We know how are objects will act, We know
      </p>
      <h3 className="text-[24px] text-white">$16.48</h3>
      <div className="flex justify-center sm:justify-start gap-[34px]">
      <Link href="/blog">
        <button className="w-[184px] h-[52px] rounded-[5px] px-[40px] bg-[#2DC071] hover:bg-green-700 py-[15px] flex gap-[10px] hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
          <h1 className="text-[14px] text-white justify-center">ADD TO CART</h1>
        </button>
        </Link>
      </div>
    </div>

    {/* Right section (Image) */}
    <div className="w-full sm:w-[510px] mt-4 sm:mt-0 flex justify-center">
      <Image src={GreenMan} alt="picman" layout="intrinsic" />
    </div>
  </div>
</div>


  )
}

export default ProductBanner
