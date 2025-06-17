import React from "react";
import { MagnifyingGlassIcon, UserCircleIcon, HeartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function TopHeader() {
  return (
    <div className="w-full flex flex-col items-center items-start bg-white text-sm mb-2">
      {/* Left: Jam operasional */}
      <div className="text-gray-700 w-full h-8 py-1 mb-1 whitespace-nowrap flex justify-between">
        BUKA SETIAP HARI 09:00 - 19:00 WIB
        <span className="flex items-center gap-1 text-gray-700">
          <span className="font-semibold">0821-8080-9090</span>
          <span className="mx-1">|</span>
          <span className="text-pink-600">sales@agreskomputer.com</span>
        </span>
      </div>
      {/* Center: Logo & Search */}
      <div className="flex-1 flex items-center justify-between gap-4 w-full">
        <Image src="/images/site-logo.png" alt="Logo" className="h-10 w-auto" width={100} height={100} />
        <div className="flex-1 max-w-xl mx-4">
          <div className="flex items-center border-2 border-pink-500 rounded-full overflow-hidden bg-white">
            <input
              className="flex-1 px-4 py-2 outline-none text-gray-700 bg-transparent"
              placeholder="Search for items..."
            />
            <button className="bg-pink-600 px-4 py-2 text-white flex items-center justify-center">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 whitespace-nowrap">
          <div className="flex flex-col items-end mr-2">
            
          </div>
          <button className="flex items-center gap-1 text-pink-700 font-semibold hover:underline">
            <UserCircleIcon className="w-6 h-6" /> Sign In
          </button>
          <button className="flex items-center gap-1 text-red-500 font-semibold hover:underline">
            <HeartIcon className="w-5 h-5" /> Favorite
          </button>
          <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-full px-4 py-2 shadow hover:scale-105 transition">SIMULASI PC</button>
          <button className="bg-gradient-to-r from-green-500 to-gray-900 text-white font-bold rounded-full px-4 py-2 shadow hover:scale-105 transition">PC READY!</button>
        </div>
      </div>
    </div>
  );
} 