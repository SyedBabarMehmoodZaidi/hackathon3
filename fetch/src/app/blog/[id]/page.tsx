import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Dots from "/public/Images/Dotss.png";
import Add from "@/app/components/Add";
import Link from "next/link";

type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}; 

// Fetch data function based on ID
async function getProductData(id: string) {
  const fetchData = await client.fetch(
    `*[_type == 'product' && _id == $id]{
      _id,
      title,
      description,
      "imageUrl": productImage.asset->url,
      price
    }`,
    { id } 
  );

  return fetchData[0]; // Return the specific product object
}

export default async function ProductDetail({ params }: { params: Promise <{ id: string }> }) {
  const { id } = await params 
  const product: Product = await getProductData(id); // Fetch the specific product data

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="flex flex-col min-h-screen">
    <div className="container absolute top-[150px] lg:left-[100px] mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 font-Montserrat">
      
      {/* Left Section - Product Image */}
      <div className="flex-1 flex justify-center md:justify-start">
        <div className="relative">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={500}
            height={500}
            className="mx-auto lg:ml-28 block"
          />
        </div>
      </div>
  
      {/* Right Section - Product Details */}
      <div className="flex-1">
        <h1 className="text-2xl font-semibold text-gray-800 mt-4">{product.title}</h1>
        <p className="text-xl font-semibold text-black mt-1">${product.price}</p>
        <p className="text-sm text-gray-500 mt-2">
          Availability:{" "}
          <span className="text-[#23A6F0] font-medium">In Stock</span>
        </p>
  
        {/* Add component for product price */}
        <Add productPrice={product.price} />
  
        <p className="w-full md:w-[464px] mt-1 text-[#858585] text-[12px]">
          {product.description}
        </p>
  
        {/* Dots Image */}
        <p className="mt-8">
          <Image src={Dots} alt="Dot" width={150} height={30} />
        </p>
  
        {/* Add to Cart Button */}
        <Link href={`/blog/${id}/orderConfirmation`}>
          <button className="w-full md:w-[189px] h-[52px] rounded-[5px] flex justify-center items-center bg-[#23A6F0] text-white text-[14px] mt-4 hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  </div>
  
  );
}
