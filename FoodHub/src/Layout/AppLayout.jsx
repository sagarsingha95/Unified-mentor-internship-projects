import React from 'react'
import Navbar from '../Components/Navbar';
import ImageSlider from '../Components/ImageSlider';
import Categories from '../Components/Categories';
import Footer from '../Components/Footer';
import PopularProducts from '../Components/PopularProducts';
import WhyFoodHub from '../Components/WhyFoodHub';


const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <ImageSlider />
      <Categories />
      <PopularProducts />
      <WhyFoodHub />
      <Footer />
    </div>
  )
}

export default AppLayout