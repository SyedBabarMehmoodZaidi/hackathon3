import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string; // Include _id in the Product interface
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

// Fetch data function
async function getData(): Promise<Product[]> {
  const fetchData = await client.fetch(
    `*[_type == 'product']{
      _id,
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
    <main className="flex min-h-screen flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-8">Trending Products</h1>
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
              <Link href={`/blog/${val._id}`}>
                <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                  View Details
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>
    </main>
  );
}
