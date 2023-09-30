
import { useRouter } from 'next/navigation'
import React from 'react'


 const ProductDetails = ({ params }: { params: { id: string } }) => {
  
  const id = params.id

  return (
    <div>{id}</div>
  )
}

export default ProductDetails