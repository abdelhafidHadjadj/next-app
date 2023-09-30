import React from 'react'
import { footerLinks } from '@/constants'
import Link from 'next/link'
import { CustomFooterProps } from '@/types'
import Image from 'next/image'
export const Footer = ({logo, containerStyle}: CustomFooterProps) => {
  return (
    <footer>

        <Image
        src={logo}
        alt='title'
        className='imgBox'
        />  
        
      <div className={containerStyle}>
        <ul>

        {
            footerLinks.map(item => 
            <Link href={item.link}>{item.text}</Link>    
                )
            }
            </ul>
        </div>
    </footer>
  )
}
