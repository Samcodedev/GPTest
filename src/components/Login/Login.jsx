import React, { useState } from "react";
import { auth, googleProvide } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import Cookies from "universal-cookie";
import google from "../../assets/icons/google.svg";

const cookie = new Cookies();

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isSignup, setIsSignup] = useState(false);

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, googleProvide);
      cookie.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-800 to-blue-900">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <p className="mt-4 text-sm text-center mb-10">
          {isSignup ? "Already have an account? " : "Don't have an account? "}
          <span
            className="font-bold text-main cursor-pointer text-[#3855B3] hover:underline"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Login" : "create an account"}
          </span>
        </p>

        <button
          onClick={signInWithGoogle}
          className="w-full flex items-center justify-center gap-2 border border-[#5657584d] p-3 rounded-md hover:bg-gray-100"
        >
          <img src={google} alt="Google" className="w-5 h-5" />
          {isSignup ? "Sign Up" : "Login"} with Google
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Username/ Email
          </label>
          <input
            type="text"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-[#5657584d] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="flex justify-between text-sm font-medium text-gray-600">
            Password{" "}
            <a href="#" className="text-blue-600 text-xs">
              Remember me
            </a>
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-[#5657584d] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4 flex items-center">
          <input type="checkbox" className="mr-2" />
          <span className="text-sm text-gray-600">Keep me logged in</span>
        </div>

        <button
          type="submit"
          className="w-full bg-[#3855B3] cursor-pointer text-white p-2 rounded-md hover:bg-blue-700 transition"
        >
          {isSignup ? "Sign Up" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
