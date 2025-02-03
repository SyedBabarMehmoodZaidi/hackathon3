import Image from "next/image";
import React from "react";
import login from "/public/Images/login4.png";

const LoginPage = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-cyan-800">
      <div className="container max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        
          {/* Medium & Large Screens */}
          <div className="hidden md:flex flex-wrap">
            {/* Left Side - Image */}
            <div className="md:w-1/2 hidden sm:block">
              <Image
                src={login}
                alt="Login"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full md:w-1/2 flex items-center p-8">
              <div className="w-full">
                <div className="flex items-center mb-6">
                  <i className="fas fa-cubes text-3xl text-orange-500 mr-3"></i>
                  <span className="text-2xl font-extrabold">Exclusive</span>
                </div>

                <h5 className="text-lg font-medium mb-4 text-gray-700">
                  Sign into your account
                </h5>

                <form>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600 mb-1">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      id="email"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-600 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      id="password"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <button
                    type="button"
                    className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900"
                  >
                    Login
                  </button>

                  <div className="mt-4 text-center">
                    <a href="#!" className="text-sm text-gray-500">
                      Forgot password?
                    </a>
                  </div>

                  <p className="text-sm text-gray-600 text-center mt-4">
                    Don&apos;t have an account?{" "}
                    <a href="#!" className="text-blue-600 font-medium">
                      Register here
                    </a>
                  </p>

                  <div className="flex justify-center gap-4 text-sm text-gray-500 mt-4">
                    <a href="#!">Terms of use</a> | <a href="#!">Privacy policy</a>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Small Screens */}
          <div className="sm:hidden flex items-center justify-center h-auto min-h-screen">
            <div className="text-center w-full px-6 py-12">
              <h5 className="text-lg font-medium mb-4 text-gray-700">
                Sign into your account
              </h5>

              <form>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-600 mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-600 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    id="password"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>

                <button
                  type="button"
                  className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900"
                >
                  Login
                </button>

                <div className="mt-4 text-center">
                  <a href="#!" className="text-sm text-gray-500">
                    Forgot password?
                  </a>
                </div>

                <p className="text-sm text-gray-600 text-center mt-4">
                  Don&apos;t have an account?{" "}
                  <a href="#!" className="text-blue-600 font-medium">
                    Register here
                  </a>
                </p>

                <div className="flex justify-center gap-4 text-sm text-gray-500 mt-4">
                  <a href="#!">Terms of use</a> | <a href="#!">Privacy policy</a>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LoginPage;
