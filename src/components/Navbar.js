import React from 'react'
import Logo from '../assets/logo.png'
import Shop from '../assets/shop.png'
const Navbar = () => {
    return (
        <div className='flex sm:w-full sm:h-14 sm:p-2 sm:px-32 px-5'>
            <img src={Logo} alt='logo' className='sm:max-h-10 max-h-10'/>
            <div className='sm:p-2 p-1 ml-auto' >
                <a href='/' className='text-gray-100 sm:p-2 ml-auto p-1 text-xs'>Search</a>
                <a href='/' className='text-gray-100 sm:p-2 ml-auto p-1 text-xs'>Help</a>
                <a href='/' className='text-gray-100 sm:p-2 ml-auto sm:mr-10 mr-5 text-xs'>Account</a>
                <img src={Shop} alt='shop' className='inline sm:ml-auto sm:h-6 h-3' />
            </div>
                
            
        </div>
    )
}

export default Navbar
