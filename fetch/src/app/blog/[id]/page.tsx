import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Dots from "/public/Images/Dotss.png";
import Add from "@/app/components/Add";
import Link from "next/link";

// Fetch data function based on ID
async function getProductData(id: string) {
  const fetchData = await client.fetch(
    `*[_type == 'product' && _id == $id]{
      title,
      description,
      "imageUrl": productImage.asset->url,
      price,
    }`,
    { id }
  );

  return fetchData[0]; // Return the first product object
}

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const { id } = params; // Get product id from the URL
  const product = await getProductData(id); // Fetch product details

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container absolute top-[200px] lg:left-[100px] mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 font-Montserrat">
        <div className="flex-1">
          <div className="relative">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={300}
              height={300}
              className="mx-auto lg:ml-28 block"
            />
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-gray-800 mt-4">{product.title}</h1>
          <p className="text-xl font-semibold text-black mt-4">${product.price}</p>
          <p className="text-sm text-gray-500 mt-2">
            Availability:{" "}
            <span className="text-[#23A6F0] font-medium">In Stock</span>
          </p>
          <Add />
          <p className="w-[464px] h-[40px] mt-10 text-[#858585] font- text-[12px]">
            {product.description}
          </p>
          <p className="mt-36">
            <Image src={Dots} alt="Dot" width={150} height={30} />
          </p>
          <Link href={`/blog/${id}/orderConfirmation`}>
            <button className="w-[189px] h-[52px] rounded-[5px] flex justify-center items-center bg-[#23A6F0] text-white text-[14px] hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
