import React from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Signup() {
  return (
    <div
      className="relative flex items-center justify-center h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('./signup.jpg')"// your resort image
      }}
    >
      {/* Soft overlay for blending */}
      <div className="absolute inset-0 bg-white/40 "></div>

      {/* Animated light border */}
      <div className="relative z-10 p-[2px] rounded-2xl bg-gradient-to-r from-amber-200 via-rose-100 to-emerald-200 animate-[borderFlow_10s_linear_infinite]">
        <form className="relative z-10 md:w-96 w-80 flex flex-col items-center justify-center bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-semibold text-slate-800">Sign up</h2>
          <p className="text-sm text-slate-500 mt-2">
            Create your account to continue
          </p>

          {/* Google Button */}
          <button
            type="button"
            className="w-full mt-8 bg-gradient-to-r from-amber-100 to-rose-100 border border-white/60 flex items-center justify-center h-12 rounded-full hover:scale-105 transition-all"
          >
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
              alt="googleLogo"
            />
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 w-full my-5 text-slate-500">
            <div className="w-full h-px bg-slate-300"></div>
            <p className="text-sm whitespace-nowrap">or sign up with email</p>
            <div className="w-full h-px bg-slate-300"></div>
          </div>

          {/* Username */}
          <div className="flex items-center w-full border border-slate-300 h-12 rounded-full pl-6 pr-4 gap-2 focus-within:border-amber-300 bg-white/30 transition-all">
            <FaUserAlt className="text-slate-500 text-sm" />
            <input
              type="text"
              placeholder="Username"
              className="bg-transparent text-slate-700 placeholder-slate-400 outline-none text-sm w-full"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center w-full border border-slate-300 h-12 rounded-full pl-6 pr-4 gap-2 mt-6 focus-within:border-amber-300 bg-white/50 transition-all">
            <MdEmail className="text-slate-500 text-base" />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent text-slate-700 placeholder-slate-400 outline-none text-sm w-full"
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center mt-6 w-full border border-slate-300 h-12 rounded-full pl-6 pr-4 gap-2 focus-within:border-amber-300 bg-white/50 transition-all">
            <FaLock className="text-slate-500 text-sm" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent text-slate-700 placeholder-slate-400 outline-none text-sm w-full"
              required
            />
          </div>

          {/* Options */}
          <div className="w-full flex items-center justify-between mt-8 text-slate-600 text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input className="h-4 w-4 accent-amber-300" type="checkbox" />
              Remember me
            </label>
            <a className="underline hover:text-amber-500" href="#">
              Forgot password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full text-white font-semibold bg-gradient-to-r from-amber-400 to-rose-400 hover:from-amber-300 hover:to-rose-300 shadow-lg transition-all"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
