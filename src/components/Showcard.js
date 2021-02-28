import React from 'react'
import arrow from '../assets/arrow.png'
import ticket from '../assets/ticket.png'
import tickethover from '../assets/ticketactive.png'

const Showcard = (props) => {
    return (
        <div className="card">
            <div className="cardover">
                <img src={props.image} alt={props.name}className='pb-1'/>
                <pre className="bg-yellow-300 p-1 m-4 text-xs inline libre"> {props.genre} </pre>
                <p className="text-lg text-white sm:p-2 p-1 ml-3 m-1 libre">{props.name}</p>
                <div className="inline-flex pr-2">
                    <a  href="/ "className=" text-blue-400 p-1 sm:ml-3 m-2 ml-3 libre textxxs">More Info </a>
                    <img src={arrow} alt='arrow' className="h-2 sm:h-3 place-self-center ml-auto"/>
                    <img src={ticket} alt='ticket' className="ml-20 sm:ml-32 h-5 sm:h-5 place-self-center"/>
                </div>

            </div>
        </div>
    )
}

export default Showcard
