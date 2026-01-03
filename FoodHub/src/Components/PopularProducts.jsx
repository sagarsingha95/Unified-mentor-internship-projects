import React, { useRef } from "react";
import Product1 from "../assets/popularProducts/amul_cool.jpg";
import Product2 from "../assets/popularProducts/amul.webp";
import Product3 from "../assets/popularProducts/chips.jpg";
import Product4 from "../assets/popularProducts/chocolate.jpg";
import Product5 from "../assets/popularProducts/cocalcola.webp";
import Product6 from "../assets/popularProducts/everest.jpg";
import Product7 from "../assets/popularProducts/fortuneoil.jpg";
import Product8 from "../assets/popularProducts/maggie.jpg";
import Product9 from "../assets/popularProducts/saffola.jpg";
import Product10 from "../assets/popularProducts/tide.jpg";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PopularProductsSlider = () => {
  const products = [
    { id: 1, image: Product1, name: "Amul Cool", price: "₹250" },
    { id: 2, image: Product2, name: "Amul Butter", price: "₹180" },
    { id: 3, image: Product3, name: "Chips Pack", price: "₹120" },
    { id: 4, image: Product4, name: "Chocolate", price: "₹500" },
    { id: 5, image: Product5, name: "Coca-Cola", price: "₹60" },
    { id: 6, image: Product6, name: "Everest Masala", price: "₹400" },
    { id: 7, image: Product7, name: "Fortune Oil", price: "₹350" },
    { id: 8, image: Product8, name: "Maggie", price: "₹50" },
    { id: 9, image: Product9, name: "Saffola Oil", price: "₹450" },
    { id: 10, image: Product10, name: "Tide Detergent", price: "₹300" },
  ];

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 relative">
      <h2 className="text-lg md:!text-[25px] font-semibold mb-4">Popular Products</h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-0 h-full bg-white bg-opacity-80 flex items-center justify-center p-1 z-10 hover:bg-opacity-100 transition"
        >
          <IoIosArrowBack size={24} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-0 h-full bg-white bg-opacity-80 flex items-center justify-center p-1 z-10 hover:bg-opacity-100 transition"
        >
          <IoIosArrowForward size={24} />
        </button>

        {/* Scrollable products */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scroll-smooth py-2 hide-scrollbar"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 
                         w-full sm:w-1/2 md:w-1/3 lg:w-1/5
                         bg-white rounded-xl shadow hover:shadow-lg transition p-2 cursor-pointer
                         flex flex-col items-center"
            >
              {/* Image */}
              <div className="w-full h-24 flex items-center justify-center mb-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Name */}
              <h3 className="!text-[15px] md:text-[13px] font-medium text-gray-800 text-center mb-1">
                {product.name}
              </h3>

              {/* Price */}
              <p className="text-green-600 font-semibold text-[11px] mb-2 text-center">
                {product.price}
              </p>

              {/* Button */}
              <button className="w-full bg-green-500 text-white py-1 text-[10px] rounded hover:bg-green-600 transition">
                Add
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default PopularProductsSlider;
