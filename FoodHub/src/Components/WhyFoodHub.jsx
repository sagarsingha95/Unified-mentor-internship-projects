import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiPayMoney, GiChefToque } from "react-icons/gi";

const WhyFoodHub = () => {
  const benefits = [
    {
      id: 1,
      icon: <CiDeliveryTruck size={40} className="text-green-500" />,
      title: "Fast Delivery",
      description: "Get your groceries delivered to your doorstep quickly and reliably.",
    },
    {
      id: 2,
      icon: <GiPayMoney size={40} className="text-green-500" />,
      title: "Best Prices",
      description: "Enjoy competitive pricing and exciting daily deals.",
    },
    {
      id: 3,
      icon: <GiChefToque size={40} className="text-green-500" />,
      title: "Quality Products",
      description: "We ensure fresh and high-quality products in every order.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
        Why Choose FoodHub?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {benefits.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-medium mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyFoodHub;
