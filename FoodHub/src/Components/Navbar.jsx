import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { BiCategory, BiMenu } from "react-icons/bi";
import { IoCart } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-green-500 text-white">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2 md:px-8">
        {/* Logo + Location */}
        <div className="flex items-center gap-3">
          <h1 className="text-xl md:text-2xl font-bold">FoodHub</h1>

          <span className="hidden md:flex items-center text-xs underline cursor-pointer">
            Search Location <CiLocationOn className="ml-1" />
          </span>
        </div>

        {/* Search (desktop only) */}
        <input
          type="text"
          placeholder="Search items"
          className="hidden md:block bg-white text-black w-[30%] p-2 rounded-md
                     placeholder:text-gray-500 placeholder:text-xs"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7">
          <span className="flex items-center gap-1 cursor-pointer hover:translate-y-1 transition">
            <BiCategory /> Categories
          </span>

          <span className="flex items-center gap-1 cursor-pointer hover:translate-y-1 transition">
            <IoCart /> Cart
          </span>

          <button className="hover:translate-y-1 transition">
            Login
          </button>
        </div>

        {/* Mobile Icons */}
        <div className="flex md:hidden items-center gap-4">
          <IoCart className="text-xl cursor-pointer" />
          <button onClick={() => setOpen(!open)}>
            {open ? <MdClose size={24} /> : <BiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="px-4 pb-3 md:hidden">
        <input
          type="text"
          placeholder="Search items"
          className="w-full bg-white text-black p-2 rounded-md
                     placeholder:text-gray-500 placeholder:text-xs"
        />
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-green-600 px-4 py-4 space-y-4">
          <span className="flex items-center gap-2 cursor-pointer">
            <CiLocationOn /> Search Location
          </span>

          <span className="flex items-center gap-2 cursor-pointer">
            <BiCategory /> Categories
          </span>

          <span className="flex items-center gap-2 cursor-pointer">
            <IoCart /> Cart
          </span>

          <button className="w-full bg-white text-green-600 py-2 rounded-md font-medium">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
