"use client";
import React from "react";
import Logo from "./Logo";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const Header = () => {
  const { data: session } = useSession();
  console.log("session", session);
  const logedIn = session?.user;
  return (
    <div className="bg-bodyColor h-20">
      <div className="h-full flex items-center md:gap-x-5 justify-between md:justify-start max-w-screen-xl mx-auto px-4 xl:px-0 py-10">
        <Logo />
        {/*Search field */}
        <div className="w-full bg-white hidden md:flex items-center gap-x-1  border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600 group">
          <FiSearch className="text-gray-500 group-focus-within:text-darkText duration-200" />
          <input
            type="text"
            placeholder="Search for Product"
            className="placeholder:text-sm flex-1 outline-none"
          />
        </div>
        {/*Cart */}
        <div className="cursor-pointer bg-black hover:bg-slate-700 p-2 rounded-full flex items-center gap-x-2 text-slate-100 hover:text-white justify-center hover:border-orange-500 relative">
          <MdOutlineShoppingCart className="text-2xl" />
          <span className="absolute -right-2 -top-1 w-5 h-5 bg-white text-orange-600 rounded-full text-xs font-semibold flex items-center justify-center shadow-xl shadow-black">
            0
          </span>
        </div>
        {/* User Image */}
        {logedIn && (
          <Image
            src={session?.user?.image as string}
            alt="user image"
            height={50}
            width={50}
            className="rounded-full object-cover"
          />
        )}
        {/* Login/signin */}
        <div
          onClick={() => {
            logedIn ? signOut() : signIn();
          }}
          className="bg-bgLight flex text-gray-500 items-center p-1.5 gap-x-1 rounded-full hover:bg-white border-[1px] border-gray-200 hover:border-orange-500 duration-100 cursor-pointer"
        >
          {!logedIn ? (
            <AiOutlineUser className="text-2xl" />
          ) : (
            <FiLogOut className="text-2xl" />
          )}
          <p className="text-sm font-semibold ">
            {!logedIn ? "Login/Register" : "Logout"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
