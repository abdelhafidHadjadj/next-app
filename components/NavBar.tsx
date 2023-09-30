import Link from 'next/link'
import React from 'react'
import { navBarLinks } from '@/constants'
import { CustomNavBarProps } from '@/types'
import Image from 'next/image'
import { CustomButton } from '.'
import { log } from 'console'
const NavBar = ({logo, containerStyle}: CustomNavBarProps) => {
  
  return (
    <header className={containerStyle}>
        <nav>

        <Image
        src={logo}
        alt='textLogo'

        />
        <ul>
        {
            navBarLinks.map( item => 
                <Link 
                key={item.text}
                href={item.link}>{item.text}</Link>
                )
            }
        </ul>

        </nav>
        <CustomButton title="Sign Up" disabled={false} containerStyle='border p-2' btnType='button'/>
    </header>  

)}

export default NavBar