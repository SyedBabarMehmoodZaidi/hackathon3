import React from 'react'
import Image from "next/image";
import arrow from "/public/Images/vectorright.png";
import Sofa from "/public/Images/sofa.png";
import ChairThumbnail from "/public/Images/chairthumbnail.jpg";
import SofaThumbnail from "/public/Images/sofathumbnail.jpg";
import Dots from '/public/Images/Dotss.png'
import Heart from '/public/Images/heart.png'
import Cart from '/public/Images/cart.png'
import Eye from '/public/Images/eye.png'
import Room from '/public/Images/room.png'
import c1 from '/public/Images/c1.png'
import c2 from '/public/Images/c2.png'
import c3 from '/public/Images/c3.png'
import c4 from '/public/Images/c4.png'
import c5 from '/public/Images/c5.png'
import c6 from '/public/Images/c6.png'
import c7 from '/public/Images/c7.png'
import c8 from '/public/Images/c8.png'
import Desktopclient from '/public/Images/desktop-clients-1.png'
import Footer from '../components/Footer';




const Pages = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        {/* Your existing page content */}
        <div className="w-[1440px] h-[92px] py-[24px] bg-[#FAFAFA]">
          <div className="w-[1033px] h-[44px] absolute top-[190px] left-[130px] flex gap-[30px]">
            <div className="flex items-center gap-[15px]">
              <div className=" font-bold text-[14px] leading-[24px] text-[#252B42]">
                Home
              </div>
              <Image src={arrow} alt="arrow" width={8.26} height={6} />
              <h6 className="font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
                Shop
              </h6>
            </div>
          </div>
        </div>

       

     <div className="container absolute top-[200px] lg:left-[100px] mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 font-Montserrat">
       {/* Left Section - Image Slider */}
       <div className="flex-1">
       
        <div className="relative">
          <Image src={Sofa} alt="Product Image" className="rounded-lg" width={506} height={450}/>
            
       </div>
         
        {/* Thumbnails */}
        <div className="flex mt-4 gap-4">
           <Image src={ChairThumbnail} alt="Thumbnail 1" width={100} height={75} className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"/>
               
           <Image src={SofaThumbnail} alt="Thumbnail 2" width={100} height={75} className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500" />
                
          </div>
         
          </div>

          {/* Right Section - Product Details */}
          <div className="flex-1">
            <h1 className="text-2xl font-semibold text-gray-800 mt-4">Floating Phone</h1>
            {/* Price and Details */}
            <p className="text-xl font-semibold text-black mt-4">$1,139.33</p>
            <p className="text-sm text-gray-500 mt-2">
              Availability:{" "}
              <span className="text-[#23A6F0] font-medium">In Stock</span>
            </p>
            <p className="w-[464px] h-[60px] mt-10 text-[#858585] font-normal text-[14px]">
            Met minim Mollie non desert Alamo est sit cliquey dolor 
            do met sent. RELIT official consequent door ENIM RELIT Mollie. 
            Excitation venial consequent sent nostrum met.
            </p>
            <p className="mt-8  text-[#858585] w-[445px]">
              _______________________________________________________
            </p>
        
            <p className='mt-10'>
              <Image src={Dots} alt='Dot' width={150} height={30} />
            </p>
            
            <div className='flex justify-start items-center gap-6 mt-12'>
            
            <button  className='w-[189px] h-[52px] rounded-[5px] flex justify-center items-center bg-[#23A6F0] text-white text-[14px] hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer'>
              Select Options
              </button>

            <Image src={Heart} alt='heart' width={20} height={20}/>
            <Image src={Cart} alt='cart' width={20} height={20}/>
            <Image src={Eye} alt='eye' width={20} height={20}/>
            </div>

          </div>
        </div>

        <div className=" flex justify-start items-start space-x-8 mt-[1200px] lg:mt-[750px] pl-24">
  {/* First Div */}
  <div className='w-[337px] h-[392px]'>
    <Image src={Room} alt="room" width={337} height={392} />
  </div>

  {/* Second Div */}
  <div className='space-y-8'>
    <h1 className="w-[304px] h-[32px] text-[24px] font-bold ">The quick fox jumps over</h1>
    <div className="w-[332px] h-[392px] text-[14px] font-normal space-y-4">
      <p>
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
      </p> 
      <p>
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
      </p>
      <p>
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
      </p>
    </div>
  </div>

  {/* Third Div */}
  <div className='space-y-6'>
    <h1 className="w-[304px] h-[32px] font-bold text-[24px]">The quick fox jumps over</h1>
    <p className="w-[274px] h-[24px] font-bold text-[14px]">The quick fox jumps over the lazy dog</p>
    <p className="w-[274px] h-[24px] font-bold text-[14px]">The quick fox jumps over the lazy dog</p>
    <p className="w-[274px] h-[24px] font-bold text-[14px]">The quick fox jumps over the lazy dog</p>
    <p className="w-[274px] h-[24px] font-bold text-[14px]">The quick fox jumps over the lazy dog</p>
    <h1 className="w-[304px] h-[32px] font-bold text-[24px]">The quick fox jumps over</h1>
    <p className="w-[274px] h-[24px] font-bold text-[14px]">The quick fox jumps over the lazy dog</p>
    <p className="w-[274px] h-[24px] font-bold text-[14px]">The quick fox jumps over the lazy dog</p>
    <p className="w-[274px] h-[24px] font-bold text-[14px]">The quick fox jumps over the lazy dog</p>
  </div>
</div>

   
<div className="mt-12">
  <h1 className="w-[299px] h-[32px] font-bold text-[24px] mx-auto lg:ml-[138px] text-center lg:text-left">
    BEST SELLER PRODUCT
  </h1>

  <div className="mt-12">
   
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
      <Image src={c1} alt="croceryimage" width={238} height={442} className='hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer'/>
      <Image src={c2} alt="croceryimage" width={241} height={442} className='hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer'/>
      <Image src={c3} alt="croceryimage" width={240} height={442} className='hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer'/>
      <Image src={c4} alt="croceryimage" width={240} height={442} className='hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer'/>
    </div>

    
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6">
      <Image src={c5} alt="croceryimage" width={238} height={442} className='hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer'/>
      <Image src={c6} alt="croceryimage" width={241} height={442} className='hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer'/>
      <Image src={c7} alt="croceryimage" width={240} height={442} className='hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer'/>
      <Image src={c8} alt="croceryimage" width={240} height={442} className='hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer'/>
    </div>
  </div>
</div>


    <div className='mt-12'>
      <Image src={Desktopclient} alt='logo' width={1440} height={175}/>
    </div>
    <div>

    </div>
       
      </div> 
      <Footer />    
    </div>
  );
}

export default Pages;