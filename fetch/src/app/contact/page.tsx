import Image from 'next/image'
import React from 'react'
import Family from '/public/Images/family.png'
import Twitter from '/public/Images/logos_twitter.png'
import Facebook from '/public/Images/logos_facebook.png'
import Instagram from '/public/Images/logos_instagram.png'
import Linkedin from '/public/Images/logos_linkedin.png'
import Phone from '/public/Images/phone.png'
import Location from '/public/Images/location.png'
// Removed Message import as it is unused
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <div className="h-screen">
      <div className="flex flex-col lg:flex-row h-[80%]">
  <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start space-y-4 lg:pl-[176px] sm:pl-[10px]">
    <p className="text-[16px] font-bold text-[#252B42] text-center lg:text-left">CONTACT US</p>
    <h1 className="max-w-[496px] font-bold text-[58px] text-[#252B42] text-center lg:text-left">
      Get in touch{' '}
      today!
    </h1>
    <p className="max-w-[376px] text-[20px] font-normal text-[#252B42] text-center lg:text-left">
      We know how large objects will act,
      but things on a small scale
    </p>
    <p className="font-bold text-[#252B42] text-center lg:text-left">Phone : +451 215 215 </p>
    <p className="font-bold text-[#252B42] text-center lg:text-left">Fax : +451 215 215</p>

    <div className="flex justify-center items-center gap-[34px]">
      <Image src={Twitter} alt="twitter" width={30} height={24.49} />
      <Image src={Facebook} alt="facebook" width={30} height={30} />
      <Image src={Instagram} alt="instagram" width={30} height={30} />
      <Image src={Linkedin} alt="linkedin" width={30} height={29.88} />
    </div>
  </div>
  
  <div className="flex justify-center items-center w-full lg:w-1/2 mt-10">
    <Image src={Family} alt="Image description" width={450} height={600} />
  </div>
</div>

      </div>

      <div>
  <p className="font-bold text-[14px] text-[#252B42] text-center mt-56">
    VISIT OUR OFFICE
  </p>
  <h1 className="font-bold text-[40px] text-[#252B42] text-center">
    We help small businesses with big ideas
  </h1>
</div>

<div className="flex flex-col lg:flex-row justify-center items-center gap-8 pt-20">
  
  <div className="w-[327px] h-[343px] flex flex-col items-center justify-center gap-4 hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
    <Image src={Phone} alt="phoneicon" width={72} height={72} />
    <p className="text-[14px] font-bold text-[#252B42]">
      georgia.young@example.com
    </p>
    <p className="text-[14px] font-bold text-[#252B42]">
      georgia.young@ple.com
    </p>
    <h1 className="text-[16px] font-bold text-[#252B42]">Get Support</h1>
    <button className="w-[189px] h-[54px] rounded-[37px] flex items-center justify-center border border-[#23A6F0] text-[#23A6F0] text-[14px] font-bold">
      Submit Request
    </button>
  </div>

  
  <div className="w-[328px] h-[403px] flex flex-col items-center justify-center bg-[#252B42] text-white gap-4 hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
    <Image src={Location} alt="location" width={72} height={72} />
    <p className="text-[14px] font-bold">georgia.young@example.com</p>
    <p className="text-[14px] font-bold">georgia.young@ple.com</p>
    <h1 className="text-[16px] font-bold">Get Support</h1>
    <button className="w-[189px] h-[54px] rounded-[37px] flex items-center justify-center border border-[#23A6F0] text-[#23A6F0] text-[14px] font-bold">
      Submit Request
    </button>
  </div>


  <div className="w-[327px] h-[343px] flex flex-col items-center justify-center gap-4 hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
    <Image src={Phone} alt="phoneicon" width={72} height={72} />
    <p className="text-[14px] font-bold text-[#252B42]">
      georgia.young@example.com
    </p>
    <p className="text-[14px] font-bold text-[#252B42]">
      georgia.young@ple.com
    </p>
    <h1 className="text-[16px] font-bold text-[#252B42]">Get Support</h1>
    <button className="w-[189px] h-[54px] rounded-[37px] flex items-center justify-center border border-[#23A6F0] text-[#23A6F0] text-[14px] font-bold ">
      Submit Request
    </button>
  </div>
</div>

<div className="pt-20 space-y-8">
  <p className="font-bold text-[16px] text-[#252B42] text-center">
    WE Can&apos;t WAIT TO MEET YOU
  </p>
  <h1 className="font-bold text-[58px] text-[#252B42] text-center">
    Lets Talk
  </h1>
  <div className="flex justify-center items-center">
    <button className="w-[189px] h-[52px] rounded-[5px] flex justify-center items-center bg-[#23A6F0] text-white text-[14px] hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
      Try it free now
    </button>
  </div>
</div>


      <Footer />
    </div>
  )
}

export default page
