import React from 'react'
import { useSelector } from 'react-redux'
import Banner from '../Banner/Banner'
import Categories from '../Categories/Categories'
import Poster from '../Poster/Poster'
import Products from '../Products/Products'

export const Home = () => {
  const { products, categories } = useSelector((state) => state)

  return (
    <>
      <Poster/>
      <Products products={products.list} amount={5} title="Trending"/>
      <Categories products={categories.list} amount={5} title="Worth seeing"/>
      <Banner/>
    </>
  )
}
