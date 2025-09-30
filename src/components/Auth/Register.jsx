import React from "react";
import { Link } from "react-router-dom";
import SocialButton from "./SocialButton";
import { FcGoogle } from "react-icons/fc";
import {
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white flex rounded-lg shadow-lg max-w-4xl w-full overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-bold mb-4">Sign up</h2>
          <p className="text-gray-500 mb-6">Create your account</p>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 mb-4">
            Sign Up
          </button>

          <p className="text-gray-500 mb-3">Or sign up using</p>
          <div className="flex gap-3">
            <SocialButton icon={<FcGoogle />} />
            <SocialButton icon={<FaFacebookF />} bgColor="bg-blue-600" />   
            <SocialButton icon={<FaTwitter />} bgColor="bg-blue-400" />
          </div>

          <p className="mt-4 text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-blue-50 flex flex-col justify-center items-center p-10">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.LjPV7bXPkIaPcgYFwtATfwHaEK?pid=Api&P=0&h=220"
            alt="Register illustration"
            className="mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Quick & Secure Sign-up</h3>
          <p className="text-gray-600 text-center">
            Join GreenFeather and get secure, passwordless access. Experience
            one-tap login using OneAuth.
          </p>
          <button className="mt-4 bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-50">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
