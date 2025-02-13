import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth, UserProvider } from "../context/UserContext";

const LoginComp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); //get the login funtion from UserOCntext
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email); // Store email and go to home
  };

  return (
    <section className="bgGradient min-h-screen flex justify-center items-center">
      <div className="shadow-lg rounded-3xl mx-auto w-full max-w-md bg-gray-900 p-8 text-gray-100">
        <p className="text-center text-2xl font-bold">Login</p>
        <form className="mt-6">
          <div className="mt-1 text-lg">
            <label htmlFor="username" className="block text-gray-400 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-gray-700 bg-gray-900 p-3 text-gray-100 focus:border-purple-400 outline-none"
              placeholder="Enter your username"
            />
          </div>
          <div className="mt-4 text-lg">
            <label htmlFor="password" className="block text-gray-400 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-gray-700 bg-gray-900 p-3 text-gray-100 focus:border-purple-400 outline-none"
              placeholder="Enter your password"
            />
            <div className="flex justify-end text-sm text-gray-400 mt-2">
              <Link href="#" className="hover:underline text-gray-100">
                Forgot Password?
              </Link>
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-4 w-full bg-purple-400 p-3 text-gray-900 font-semibold rounded-md"
          >
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4">
          <div className="flex-1 h-px bg-gray-700"></div>
          <p className="px-3 text-sm text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            aria-label="Log in with Google"
            className="rounded-sm p-3 bg-transparent border-none"
          >
            <img src="/images/google.png" className="w-10 h-10" alt="Googles" />
          </button>
        </div>
        <p className="text-center text-lg text-gray-400 mt-4">
          Don't have an account?
          <Link href="#" className="text-gray-100 hover:underline ml-1">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginComp;
