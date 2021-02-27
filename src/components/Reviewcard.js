import React from 'react'

const Reviewcard = (props) => {
    return (
        <div className='revcard'>
            <div className='revcardover'>
                <div className='flex'>
                    <img src={props.image} alt={props.name} className='p-8 pl-5'/>
                    <div className='inline-block '>
                        <p className='text-white place-self-top p-8 pl-1 libre text-sm'>{props.name}</p>
                        <p className='text-yellow-500 place-self-top -m-7 ml-1 rubik'>{props.address}</p>
                    </div>
                </div>
                <p className='text-white p-5 pt-0 nunito'>
                    {props.content}
                </p>
            </div>            
        </div>
    )
}

export default Reviewcard
