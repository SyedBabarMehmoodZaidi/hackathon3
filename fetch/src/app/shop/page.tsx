
import arrow from "/public/Images/vectorright.png";
import cart1 from "/public/Images/cart3.png";
import cart2 from "/public/Images/cart2.png";
import cart3 from "/public/Images/cart1.png";
import cat4 from "/public/Images/card-item (3).png";
import cat5 from "/public/Images/card-item (4).png";
import frame from "/public/Images/Frame 31.png";
import clients from "/public/Images/desktop-clients-1.png";
import fb from "/public/Images/facebook.png";
import instagram from "/public/Images/instagram.png";
import twitter from "/public/Images/twitter.png";
import card1 from "/public/Images/product-cover-5 (8).png"
import card2 from "/public/Images/product-cover-5 (9).png"
import card3 from "/public/Images/product-cover-5 (10).png"
import card4 from "/public/Images/product-cover-5 (11).png"
import card5 from "/public/Images/product-cover-5 (12).png"
import card6 from "/public/Images/product-cover-5 (13).png"
import card7 from "/public/Images/product-cover-5 (14).png"
import card8 from "/public/Images/product-cover-5 (15).png"
import card9 from "/public/Images/product-cover-5 (16).png"
import card10 from "/public/Images/product-cover-5 (17).png"
import card11 from "/public/Images/product-cover-5 (18).png"
import card12 from "/public/Images/product-cover-5 (19).png"
import Dots from "/public/Images/Dotss.png"
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

interface Product {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

// // Fetch data function
// async function getData(): Promise<Product[]> {
//   const fetchData = await client.fetch(
//     `*[_type == 'product']{
//       title,
//       description,
//       "imageUrl": productImage.asset->url,
//       price
//     }`
//   );

//   return fetchData;
// }

// // Blog Component
// export default async function Blog() {
//   const data: Product[] = await getData();


// Fetch data function
async function getData(): Promise<Product[]> {
  const fetchData = await client.fetch(
    `*[_type == 'product']{
      title,
      description,
      "imageUrl": productImage.asset->url,
      price
    }`
  );

  return fetchData;
}



// Blog Component
export default async function Blog() {
  const data: Product[] = await getData();

  return (
    <main className="flex flex-col min-h-screen">
      
      <section className="flex-grow">
      <div>
       {/* Shop Section */}
       <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 w-full h-[92px] py-[24px] flex flex-col items-center">
         <div className="w-[1049px] h-[44px] flex gap-[1000px] items-center py-[40px] ">
           {/* Shop Title */}
           <div className="w-full h-[32px] flex justify-center items-center mb-[8px]">
             <h2 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
               Shop
             </h2>
           </div>
           {/* Breadcrumb */}
           <div className="w-full h-[44px] flex justify-center items-center gap-[5px]">
            <div className="flex items-center gap-[15px]">
               <div className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                 Home
               </div>
               <Image src={arrow} alt="arrow" width={8.26} height={6} />
               <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
                 Shop
               </h6>
             </div>
           </div>
         </div>
       </div>
       {/* category */}
       <div className="w-full bg-[#FAFAFA]">
   <div className="max-w-[1088px] mx-auto relative top-[200px] pb-[48px]">
     <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
       <div className="hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
      <Image src={cart1} alt="1" />
       </div>
      <div className="hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
       <Image src={cart2} alt="2" />
       </div>
       <div className="hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
       <Image src={cart3} alt="3" />
       </div>
       <div className="hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
       <Image src={cat4} alt="4" />
       </div>
       <div className="hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
       <Image src={cat5} alt="5" />
       </div>
     </div>
   </div>
 </div>

       {/* Popularity */}
       <div className="w-[1440px] h-[98px] absolute justify-center top-[500px] mt-12 hidden lg:block">
         <div className="w-[1050px] h-[98px] absolute left-[195px] py-[24px] flex gap-[80px]">
           <div className="w-[1040px] h-[50px] flex justify-between">
             <div className="font-montserrat font-bold text-[14px] leading-[24px] text-[#737373]">
               Showing all 12 results
             </div>
           </div>
           <div className="w-[177px] h-[46px]  px-[1px] flex gap-[15px] justify-center">
             <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#737373]">
               Views:
             </h6>
             <Image src={frame} alt="frame" className="flex justify-center" />
           </div>
           <div className="w-[252px] flex gap-[15px]">
             <button className="w-[141px] h-[50px] border border-[#DDDDDD]">
               <p className="font-Montserrat text-[14px] leading-[28px] text-[#737373]">
                 Popularity
               </p>
             </button>
             <button className="w-[94px] h-[50px]  gap-[10px] bg-[#23A6F0] ">
               <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-white">
                 Filter
               </h6>
             </button>
           </div>
         </div>
       </div>
      
       {/* Clients */}
      
       <div className="mt-96">
       <Image src={clients} alt="clients" className="absolute top-[650px]"/>
       </div>

         </div>
      </section>

       {/* Footer */}
       <footer className="bg-white absolute top-[800px] left-[100px] hidden lg:block">
         <section className="bg-[#ffffff] py-10">
           <div className="max-w-screen-xl mx-auto flex justify-between items-center">
             <div className="flex flex-col">
               <h1 className="text-[#252b42] text-2xl font-bold leading-loose tracking-tight">Bandage</h1>
             </div>
             <div className="flex gap-6">
               <Image src={fb} alt="fb" className="w-6 h-6" />
               <Image src={instagram} alt="instagram" className="w-6 h-6" />
               <Image src={twitter} alt="twitter" className="w-6 h-6" />
             </div>
           </div>
         </section>
         <div className="border-t border-[#e6e6e6]" />
         <section className="bg-white py-12">
           <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
             <div>
               <h2 className="text-[#252b42] text-base font-bold">Company Info</h2>
               <nav className="flex flex-col gap-2.5 mt-3">
                 <a href="#" className="text-[#727272] text-sm font-bold">About Us</a>
                 <a href="#" className="text-[#727272] text-sm font-bold">Careers</a>
                 <a href="#" className="text-[#727272] text-sm font-bold">We Are Hiring</a>
                 <a href="#" className="text-[#727272] text-sm font-bold">Blog</a>
               </nav>
             </div>
             <div>
               <h2 className="text-[#252b42] text-base font-bold">Legal</h2>
               <nav className="flex flex-col gap-2.5 mt-3">
                 <a href="#" className="text-[#727272] text-sm font-bold">Terms of Service</a>
                 <a href="#" className="text-[#727272] text-sm font-bold">Privacy Policy</a>
                 <a href="#" className="text-[#727272] text-sm font-bold">Cookies</a>
                 <a href="#" className="text-[#727272] text-sm font-bold">Refund Policy</a>
               </nav>
             </div>
             <div>
               <h2 className="text-[#252b42] text-base font-bold">Features</h2>
               <nav className="flex flex-col gap-2.5 mt-3">
                 <a href="#" className="text-[#727272] text-sm font-bold">Business Marketing</a>
                 <a href="#" className="text-[#727272] text-sm font-bold">User Analytics</a>
                 <a href="#" className="text-[#727272] text-sm font-bold">Live Chat</a>
                 <a href="#" className="text-[#727272] text-sm font-bold">Unlimited Support</a>
               </nav>
             </div>
             <div>
               <h2 className="text-[#252b42] text-base font-bold">Resources</h2>
               <nav className="flex flex-col gap-2.5 mt-3">
                 <a href="#" className="text-[#727272] text-sm font-bold">iOS & Android</a>
                 <a href="#" className="text-[#727272] text-sm font-bold">Watch a Demo</a>
                 <a href="#" className="text-[#727272] text-sm font-bold">Customers</a>
                 <a href="#" className="text-[#727272] text-sm font-bold">API</a>
               </nav>
            </div>
             <div>
               <h2 className="text-[#252b42] text-base font-bold">Get In Touch</h2>
               <div className="mt-3">
                 <div className="relative mb-4">
                   <input
                    type="email"
                    className="w-full h-12 px-4 border border-[#e6e6e6] rounded-lg bg-[#f8f8f8] text-[#727272] text-sm font-normal"
                    placeholder="Your Email"
                  />
                  <button className="absolute right-0 top-0 h-12 px-4 bg-[#23a6f0] text-white text-sm font-bold rounded-lg">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>


     

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 mt-[400px]">
      
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
      
              <div className="border p-4 rounded-lg flex flex-col items-center hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
                <Image
                  src={card9}
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
                  src={card10}
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
                  src={card11}
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
                  src={card12}
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
      
       {/* Trending Products Section */}
       <section className="p-6 bg-gray-50 mt-20">
        <h1 className="text-3xl font-bold mb-8 text-center">Latest Trending Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
          {data.length > 0 ? (
            data.map((val: Product, i: number) => (
              <div
                key={i}
                className="border p-4 rounded-lg flex flex-col items-center hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer"
              >
                <Image
                  src={val.imageUrl}
                  alt={val.title}
                  width={300}
                  height={300}
                  className="w-full h-[250px] object-cover mb-4 rounded-lg"
                />
                <h2 className="text-lg font-bold mb-2">{val.title}</h2>
                <p className="text-green-700 font-bold mb-2">${val.price}</p>
                <Link href={`/blog/${val.title}`}>
                  <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded transition duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No products found.</p>
          )}
        </div>
      </section>

      
     <div className="flex justify-center items-center mb-24 mt-12">

   <div className="border-2 border-gray-300 hover:bg-[#23A6F0] hover:text-white text-gray-500 px-4 py-2 hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
     First
     </div>

   <div className="border-2 border-gray-300 hover:bg-[#23A6F0] hover:text-white text-[#23A6F0] px-4 py-2 hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
     1
     </div>

   <div className="border-2 border-gray-300 hover:bg-[#23A6F0] hover:text-white text-[#23A6F0] px-4 py-2 hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
     2
     </div>

   <div className="border-2 border-gray-300 hover:bg-[#23A6F0] hover:text-white text-[#23A6F0] px-4 py-2 hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
     3
     </div>

   <div className="border-2 border-gray-300 hover:bg-[#23A6F0] hover:text-white text-[#23A6F0] px-4 py-2 hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
     Next
     </div>

 </div>
     
    </main>
  );
}
