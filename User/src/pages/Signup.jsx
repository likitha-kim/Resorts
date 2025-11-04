import React from 'react';

export default function Signup() {
    return (
        <div className="flex h-[700px] w-full">
            <div className="w-full hidden md:inline-block">
                <img
                    className="h-full w-full object-cover"
                    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png"
                    alt="leftSideImage"
                />
            </div>

            <div className="w-full flex flex-col items-center justify-center">
                <form className="md:w-96 w-80 flex flex-col items-center justify-center">
                    <h2 className="text-4xl text-gray-900 font-medium">Sign up</h2>
                    <p className="text-sm text-gray-500/90 mt-3">
                        Create your account to continue
                    </p>

                    {/* Google Login */}
                    <button
                        type="button"
                        className="w-full mt-8 bg-gray-500/10 flex items-center justify-center h-12 rounded-full"
                    >
                        <img
                            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
                            alt="googleLogo"
                        />
                    </button>

                    <div className="flex items-center gap-4 w-full my-5">
                        <div className="w-full h-px bg-gray-300/90"></div>
                        <p className="text-sm text-gray-500/90 whitespace-nowrap">
                            or sign up with email
                        </p>
                        <div className="w-full h-px bg-gray-300/90"></div>
                    </div>

                    {/* ✅ Username Field with Correct Icon */}
                    <div className="flex items-center w-full border border-gray-300/60 h-12 rounded-full pl-6 gap-2">
                        <svg width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.5 8.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0 2c-3.037 0-6.5 1.397-6.5 3.5V15H15v-1c0-2.103-3.463-3.5-6.5-3.5Z"
                                fill="#6B7280"
                            />
                        </svg>
                        <input
                            type="text"
                            placeholder="Username"
                            className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="flex items-center w-full border border-gray-300/60 h-12 rounded-full pl-6 gap-2 mt-6">
                        <svg width="16" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
                                fill="#6B7280"
                            />
                        </svg>
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="flex items-center mt-6 w-full border border-gray-300/60 h-12 rounded-full pl-6 gap-2">
                        <svg width="13" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
                                fill="#6B7280"
                            />
                        </svg>
                        <input
                            type="password"
                            placeholder="Password"
                            className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full"
                            required
                        />
                    </div>

                    {/* Options */}
                    <div className="w-full flex items-center justify-between mt-8 text-gray-500/80 text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input className="h-4 w-4" type="checkbox" />
                            Remember me
                        </label>
                        <a className="underline" href="#">Forgot password?</a>
                    </div>

                    {/* Submit */}
                    <button type="submit" className="mt-8 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};
