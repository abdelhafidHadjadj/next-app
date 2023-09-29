import Link from 'next/link'
import React from 'react'
import { navBarLinks } from '@/constants'
import { CustomNavBarProps } from '@/types'
const NavBar = ({logo, containerStyle}: CustomNavBarProps) => {
  return (
  
    <header>
        <span>
            <img src={logo} alt="" />
        </span>
        <div>

        {
            navBarLinks.map( item => 
                <Link 
                key={item.title}
                href={item.link}>{item.title}</Link>
            )
        }
        </div>

    </header>  

)}

export default NavBar