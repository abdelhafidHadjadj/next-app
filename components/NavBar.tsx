import Link from 'next/link'
import React from 'react'
import { navBarLinks } from '@/constants'
import { CustomNavBarProps } from '@/types'
import Image from 'next/image'
import { CustomButton } from '.'
import { log } from 'console'
import { useRouter } from 'next/navigation'
const NavBar = ({logo, containerStyle}: CustomNavBarProps) => {
  function handleClick() {
    const router = useRouter()
    
  }

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

        <CustomButton title="Sign Up" disabled={false} containerStyle='border p-2' btnType='button'/>
        </nav>
    </header>  

)}

export default NavBar