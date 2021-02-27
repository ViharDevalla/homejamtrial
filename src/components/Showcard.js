import React from 'react'
import arrow from '../assets/arrow.png'
import ticket from '../assets/ticket.png'
const Showcard = (props) => {
    return (
        <div className="card">
            <div className="cardover">
                <img src={props.image} alt={props.name}className='pb-1'/>
                <pre className="bg-yellow-300 p-1 m-4 text-xs inline libre"> {props.genre} </pre>
                <p className="text-lg text-white p-1 ml-3 m-1 libre">{props.name}</p>
                <div className="inline-flex">
                    <a  href="/ "className="text-xs text-blue-400 p-1 ml-3 m-1 libre">More Info </a>
                    <img src={arrow} alt='arrow' className="h-3 place-self-center"/>
                    <img src={ticket} alt='ticket' className="ml-24 h-5 place-self-center"/>
                </div>

            </div>
        </div>
    )
}

export default Showcard
