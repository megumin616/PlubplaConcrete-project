import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ProductsAll from './ComponentsProducts/Products_All/ProductsAll'
import ProductsList from './ComponentsProducts/Products_List/ProductsList'
import Footer from '../../Components/Footer/Footer'

export default function Products() {
  return (
    <>
      <Navbar/>
      <ProductsAll/>
      <ProductsList/>
      <Footer/>
    </>
  )
}
