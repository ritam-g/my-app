import Link from 'next/link'
import React from 'react'
import {ModeToggle} from './ToggoleTheme'

const NavBar = () => {
    return (
        <div className='flex justify-between font-bold text-2xl capitalize p-2'>
            <div>e-comm</div>

            <Link href={'/home'}>Home</Link>
            <Link href={'/products'}>Product</Link>
            <Link href={'/login'}>Login</Link>
            <ModeToggle />
        </div>
    )
}

export default NavBar
