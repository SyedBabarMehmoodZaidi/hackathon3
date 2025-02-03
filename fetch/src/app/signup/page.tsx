import Image from "next/image";
import React from "react";
import signup from "/public/Images/signup2.jpg";

const SignupPage = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-cyan-800">
      <div className="container max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        
          {/* Medium & Large Screens */}
          <div className="flex flex-wrap">
            {/* Left Side - Image */}
            <div className="hidden sm:block sm:w-1/2">
              <Image
                src={signup}
                alt="Signup"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side - Signup Form */}
            <div className="w-full sm:w-1/2 p-8 shadow-lg flex flex-col justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl font-semibold text-black">Signup</h2>
              </div>
              <form className="mt-6 flex flex-col gap-5">
                <input
                  type="text"
                  placeholder="Full name"
                  required
                  className="h-14 w-full rounded-md border px-4 text-lg text-gray-900  border-gray-300"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  className="h-14 w-full rounded-md border px-4 text-lg text-gray-900 border-gray-300"
                />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="h-14 w-full rounded-md border px-4 text-lg text-gray-900 border-gray-300"
                />
                <div className="flex items-center gap-2 text-black">
                  <input
                    type="checkbox"
                    id="signupCheck"
                    className="h-4 w-4 cursor-pointer"
                  />
                  <label htmlFor="signupCheck" className="cursor-pointer">
                    I accept all terms & conditions
                  </label>
                </div>
                <button
                  type="button"
                  className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SignupPage;




 