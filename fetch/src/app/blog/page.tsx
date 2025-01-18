import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

// Fetch data function
async function getData() {
  const fetchData = await client.fetch(
    `*[_type == 'product']{
      title,
      description,
      "imageUrl": productImage.asset->url,
      price,
   
    }`
  );

  return fetchData;
}

// Blog Component
export default async function Blog() {
  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl font-bold mb-8">Sanity Tutorial</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.length > 0 ? (
          data.map((val: any, i: number) => (
            <div
              key={i}
              className="bg-gray-800 text-white p-4 flex flex-col items-center rounded-2xl"
            >
              <Image
                src={val.imageUrl}
                alt={val.name}
                width={128}
                height={128}
                className="w-32 h-32 object-cover mb-4 rounded-2xl"
              />
              <h2 className="text-2xl font-semibold mb-2">{val.title}</h2>
              <p className="text-green-600 font-bold py-2 px-4 rounded hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
                ${val.price}
              </p>
              
              <Link href={`/blog/${val._id}`}>
                <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded p-4 mt-4 hover:shadow-xl hover:scale-[1.10] transition duration-300 cursor-pointer">
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


