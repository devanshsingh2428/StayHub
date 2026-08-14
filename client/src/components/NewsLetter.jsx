import React from "react";
import { assets } from "../assets/assets";

function NewsLetter() {
  return (
    <div>
      <div class="flex flex-col items-center m-auto w-85/100 max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16  lg:mx-auto my-30 bg-gray-900 text-white">
        <div class="flex flex-col justify-center items-center text-center">
          <h1 class="text-4xl md:text-[40px] font-playfair">Stay Inspired</h1>
          <p class="text-sm md:text-base text-gray-500/90 mt-2 max-w-xl">
            Join our newsletter and be the first to discover new updates,
            exclusive offers, and inspiration.
          </p>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
          <input
            type="text"
            class="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none max-w-66 w-full"
            placeholder="Enter your email"
          />
          <button class="flex items-center justify-center cursor-pointer gap-2 group bg-black px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all">
            Subscribe
            <img src={assets.arrowIcon} className="invert"  alt="" />
          </button>
        </div>
        <p class="text-gray-500 mt-6 text-xs text-center">
          By subscribing, you agree to our Privacy Policy and consent to receive
          updates.
        </p>
      </div>
    </div>
  );
}

export default NewsLetter;
