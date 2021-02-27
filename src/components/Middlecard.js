import React from 'react'
import Showcard from './Showcard'
import benny from '../assets/benny.png';
import andrea from '../assets/andrea.png';
import vijay from '../assets/vijay.png';
import shilpa from '../assets/shilpa.png';
const Middlecard = () => {
    return (
        <div className="p-10 plainback bg-cover">
            <div className="flex pt-96 px-32">
            <p className="text-white text-4xl libre">Upcoming Shows</p>
            <a href='/' className="text-white ml-auto text-lg text-yellow-400">View all</a>
            </div>
            <div className="flex mx-28 ">
            <Showcard image={benny} genre='Folk' name="Benny Dayal"/>
            <Showcard image={vijay} genre='Bollywood' name="Vijay Yesudas"/>
            <Showcard image={andrea} genre='Folk' name="Andrea Jeremiah"/>
            <Showcard image={shilpa} genre='Folk' name="Shilpa Rao"/>
            </div>
            
        </div>
    )
}

export default Middlecard
