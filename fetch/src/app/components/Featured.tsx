import React from "react";

import Image from "next/image"; // Import the Image component from next/image
import Footer from "./Footer";

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      title: "Loudest à la Madison #1 (L'Integrál)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      img: "/Images/f1.png",
      date: "22 April 2021",
      comments: 10,
      tag: "NEW",
    },
    {
      id: 2,
      title: "Loudest à la Madison #1 (L'Integrál)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      img: "/Images/f2.png",
      date: "22 April 2021",
      comments: 10,
      tag: "Trending",
    },
    {
      id: 3,
      title: "Loudest à la Madison #1 (L'Integrál)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      img: "/Images/f3.png",
      date: "22 April 2021",
      comments: 10,
      tag: "Hot",
    },
  ];

  return (
    <div className="bg-white py-10 mt-[150px]">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Featured Posts</h2>
        <p className="text-gray-500">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-5xl mx-auto ">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
            <div className="relative ">
              <Image
                src={post.img}
                alt={post.title}
                width={600} // Set the width of the image
                height={250} // Set the height of the image
                className="object-cover " // Maintain the aspect ratio with object-cover
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                {post.tag}
              </span>
            </div>

            <div className="p-3">
              <h3 className="text-md font-semibold text-gray-800">{post.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{post.description}</p>
              <div className="flex justify-between items-center text-gray-500 text-xs mt-4">
                <span>{post.date}</span>
                <span>{post.comments} comments</span>
              </div>
              <a
                href="#"
                className="text-blue-500 text-xs font-medium mt-4 inline-block hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default FeaturedPosts;
