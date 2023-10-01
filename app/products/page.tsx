import React from 'react'
import data from "../dataTest.json"
import ProductCard from '@/components/ProductCard';
const Products = () => {
  console.log(data);
  
  return (
    <main className='productSection'>
      {
        data.map(pr => 
          <ProductCard 
          containerStyle='productCard'
          link={"products/"+pr.id} 
          title={pr.ProductName} 
          imgUrl={pr.imgUrl} 
          price={pr.price} 
          rating={pr.rating}/>
          )
      }
    </main>
  )
}

export default Products