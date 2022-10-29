import React from 'react'
import About from '../components/About'
import Category from '../components/Category'
import CategoryProducts from '../components/CategoryProducts'
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
    </>
  )
}

export default Home