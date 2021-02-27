import React from 'react'
import Logo from '../assets/logo.png'
import Shop from '../assets/shop.png'
const Navbar = () => {
    return (
        <div className='flex w-full h-14 p-2 px-32'>
            <img src={Logo} alt='logo' className=' '/>
            <div className='ml-auto p-2' >
                <a href='/' className='text-gray-100 p-2 ml-auto'>Search</a>
                <a href='/' className='text-gray-100 p-2 ml-auto'>Help</a>
                <a href='/' className='text-gray-100 p-2 ml-auto mr-10'>Account</a>
                <img src={Shop} alt='shop' className='inline ml-auto h-6' />
            </div>
                
            
        </div>
    )
}

export default Navbar
