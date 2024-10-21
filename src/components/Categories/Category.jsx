import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductsQuery } from '../../features/api/apiSlice'

const Category = () => {
  const {id} = useParams()

  useEffect(() => {

  }, [])

  const {data} = useGetProductsQuery({ categoryId: id})

  console.log(data)

  return (
    <div>
      
    </div>
  )
}

export default Category