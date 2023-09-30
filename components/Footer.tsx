import React from 'react'
import { footerLinks } from '@/constants'
import Link from 'next/link'
export const Footer = () => {
  return (
    <footer>
        <h1>Footer</h1>
        <ul>

        {
            footerLinks.map(item => 
            <Link href={item.link}>{item.text}</Link>    
                )
            }
            </ul>
    </footer>
  )
}
