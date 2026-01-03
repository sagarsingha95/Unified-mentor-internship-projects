import React from "react";
import Atta from "../assets/grocery/Atta_Rice_Dal.webp";
import CookingOil from "../assets/grocery/Cooking_Oil.png";
import Bread from "../assets/grocery/Dairy_bread_egg_1x.webp";
import DryFruits from "../assets/grocery/Dry_Fruits.webp";
import Ghee from "../assets/grocery/ghee_and_vanaspati_1x.webp";
import Masala from "../assets/grocery/Masala_Spices (1).webp";
import Masala1 from "../assets/grocery/Masala_Spices.webp";
import Organic from "../assets/grocery/Organic_Food.webp";

const Categories = () => {
  const groceries = [
    { id: 1, image: Atta, heading: "Atta, Rice & Flour" },
    { id: 2, image: CookingOil, heading: "Cooking Oil" },
    { id: 3, image: Bread, heading: "Bread & Eggs" },
    { id: 4, image: DryFruits, heading: "Dry Fruits" },
    { id: 5, image: Ghee, heading: "Ghee & Vanaspati" },
    { id: 6, image: Masala, heading: "Masala & Spices" },
    { id: 7, image: Masala1, heading: "Whole Grains" },
    { id: 8, image: Organic, heading: "Organic Food" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-10">
      {/* Small section heading */}
      <h1 className=" !text-[25px] text-gray-800 mb-4">
        Grocery & Kitchen
      </h1>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
        {groceries.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center cursor-pointer
                       hover:scale-105 transition-transform duration-200"
          >
            {/* Image Container */}
            <div className="w-28 h-28  rounded-2xl flex items-center justify-center">
              <img
                src={item.image}
                alt={item.heading}
                className="w-34 h-34 object-contain"
              />
            </div>

            {/* Category Name */}
            <span className="text-[14px] mt-2 text-gray-700">
              {item.heading}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
