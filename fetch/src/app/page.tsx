import React from 'react'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Products from './components/Products'
import ProductBanner from './components/ProductsBanner'
import Banner from './components/Banner2'
import FeaturedPosts from './components/Featured'


const page = () => {
  return (
    <div>
       <Hero />
      <Cards />
      <Products />
      <ProductBanner />
      <Banner />
      <FeaturedPosts />
    </div>
  )
}

export default page