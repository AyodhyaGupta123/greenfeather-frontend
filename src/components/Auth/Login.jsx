import React from "react";
import { Link } from "react-router-dom";
import SocialButton from "./SocialButton";
import { FcGoogle } from "react-icons/fc";
import {
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white flex rounded-lg shadow-lg max-w-4xl w-full overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-bold mb-4">Sign in</h2>
          <p className="text-gray-500 mb-6">to access Sites</p>

          <input
            type="text"
            placeholder="Email address or mobile number"
            className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 mb-4">
            Next
          </button>

          <p className="text-gray-500 mb-3">Sign in using</p>
          <div className="flex gap-3">
            <SocialButton icon={<FcGoogle />} />
            <SocialButton icon={<FaFacebookF />} bgColor="bg-blue-600" />
            <SocialButton icon={<FaTwitter />} bgColor="bg-blue-400" />
          </div>

          <p className="mt-4 text-gray-500">
            Don't have a GreenFeather account?{" "}
            <Link
              to="/register"
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Sign up now
            </Link>
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-blue-50 flex flex-col justify-center items-center p-10">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.ziqmW9JBoD9NSSqj5M2juAHaFV?pid=Api&P=0&h=220"
            alt="Passwordless sign-in"
            className="mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Passwordless sign-in</h3>
          <p className="text-gray-600 text-center">
            Move away from risky passwords and experience one-tap access to
            GreenFeather. Download and install OneAuth.
          </p>
          <button className="mt-4 bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-50">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
