import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterByPrice } from '../../features/products/productsSlice'
import Banner from '../Banner/Banner'
import Categories from '../Categories/Categories'
import Poster from '../Poster/Poster'
import Products from '../Products/Products'

const selectProducts = (state) => state.products;
const selectCategories = (state) => state.categories;


export const Home = () => {
  const dispatch = useDispatch();
  
  const { list, filtered } = useSelector(selectProducts);
  const categories = useSelector(selectCategories);

  useEffect(() => {
    if (!list.length) return;

    dispatch(filterByPrice(100));
  }, [dispatch, list.length]);

  return (
    <>
      <Poster/>
      <Products products={list} amount={5} title="Trending"/>
      <Categories products={categories.list} amount={5} title="Worth seeing"/>
      <Banner/>
      <Products products={filtered} amount={5} title="Less then 100$"/>
    </>
  );
}

