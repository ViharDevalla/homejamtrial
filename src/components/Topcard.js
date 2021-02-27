import React from 'react'
import Navbar from './Navbar';
import Element from '../assets/Elements.png'

const Topcard = () => {
    return (
        <div className='hero bg-gray-500 bg-cover min-h-screen'>
            <div className='overlay min-h-screen'>
                <Navbar/>
                <p className='text-white m-40 text-8xl libre'>Cari Cari
                <p className='text-white text-xl my-10 rem40'>Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>
                </p>
                <div className='element'>
                    <div className='subtract'/>
                    <div className='labelicon'>
                        <div className='lader'/>
                    </div>
                </div>
                <div className='' >
                    <img src={Element} alt='stats' className='p-24 float-center absolute '></img>
                </div> 
            </div>
            
            
        </div>
    )
}

export default Topcard
