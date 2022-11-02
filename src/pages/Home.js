import React from 'react'
import About from '../components/About'
import BestProducts from '../components/BestProducts'
import Category from '../components/Category'
import CategoryProducts from '../components/CategoryProducts'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Slider/>
    <Category/>
    <CategoryProducts/>
    <About/>
    <BestProducts />
    <Footer/>
    </>
  )
}

export default Home