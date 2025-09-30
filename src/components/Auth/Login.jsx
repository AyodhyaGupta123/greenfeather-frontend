import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialButton from "./SocialButton";
import { FcGoogle } from "react-icons/fc";
import {
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();

  const API_BASE = (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_API_URL)
    ? `${import.meta.env.VITE_API_URL}/api/users`
    : "http://localhost:5000/api/users";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const contentType = response.headers.get("content-type") || "";
      const isJson = contentType.includes("application/json");
      const data = isJson ? await response.json() : { message: await response.text() };
      if (!response.ok) throw new Error(data?.message || "Login failed");
      localStorage.setItem("auth", JSON.stringify(data));
      const from = (location && location.state && location.state.from) || null;
      if (from) {
        const dest = typeof from === "string" ? from : (from.pathname || "/");
        navigate(dest, { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    } catch (err) {
      const msg = (err && (err.message || "")).toString();
      if (msg.includes("Failed to fetch") || msg.includes("NetworkError") || msg.includes("ERR_CONNECTION_REFUSED")) {
        setError("Cannot reach server. Please start the backend or check VITE_API_URL.");
      } else {
        setError(msg || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white flex rounded-lg shadow-lg max-w-4xl w-full overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-bold mb-4">Sign in</h2>
          <p className="text-gray-500 mb-6">to access Sites</p>

          {error && (
            <div className="mb-4 text-red-600 bg-red-50 border border-red-200 rounded p-3">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
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
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoComplete="current-password"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full p-3 rounded-md text-white mb-2 ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

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
