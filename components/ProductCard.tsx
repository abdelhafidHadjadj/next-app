import { ProductCardProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({imgUrl, title, link, price, rating, containerStyle}: ProductCardProps) => {
  return (
    <Link href={link} className={containerStyle}>
        <Image
        src={imgUrl}
        alt={title}
        width={100}
        height={100}
        />
        <div>
            <h1>{title}</h1>
            <div>
            {rating}
            </div>
            <span>{price}</span>
        </div>

    </Link>
  )
}

export default ProductCard