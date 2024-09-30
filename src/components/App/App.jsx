import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCategories } from '../../features/categories/categoriesSlice'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import AppRoutes  from '../Routes/Routes'
import Sidebar from '../Sidebar/Sidebar'

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch])

  return (
    <div className='app'>
      <Header/>
      
      <div className="container">
        <Sidebar/>
        <AppRoutes/>
      </div>

      <Footer/>
    </div>
  ) 
}
