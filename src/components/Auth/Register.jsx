import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialButton from "./SocialButton";
import { FcGoogle } from "react-icons/fc";
import {
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_BASE = (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_API_URL)
    ? `${import.meta.env.VITE_API_URL}/api/users`
    : "http://localhost:5000/api/users";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!name || !email || !password) {
      setError("Please fill all fields.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const contentType = response.headers.get("content-type") || "";
      const isJson = contentType.includes("application/json");
      const data = isJson ? await response.json() : { message: await response.text() };
      if (!response.ok) throw new Error(data?.message || "Signup failed");
      localStorage.setItem("auth", JSON.stringify(data));
      navigate("/", { replace: true });
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white flex rounded-lg shadow-lg max-w-4xl w-full overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-bold mb-4">Sign up</h2>
          <p className="text-gray-500 mb-6">Create your account</p>

          {error && (
            <div className="mb-4 text-red-600 bg-red-50 border border-red-200 rounded p-3">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoComplete="name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoComplete="email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoComplete="new-password"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full p-3 rounded-md text-white ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>
          </form>

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
