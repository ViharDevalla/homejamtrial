import React from 'react'

const Reviewcard = (props) => {
    return (
        <div className='revcard'>
            <div className='revcardover'>
                <div className='flex'>
                    <img src={props.image} alt={props.name} className='p-8 pl-5 pr-3'/>
                    <div className='inline-block pr-1'>
                        <p className='text-white place-self-top p-8 pr-0 pl-0 libre sm:text-sm text-xs'>{props.name}</p>
                        <div className='flex -m-5'>
                            <img src={props.country} alt='country' className='h-5 place-self-center ml-5'/>
                            <p className='text-yellow-500 place-self-center -m-9 ml-1 rubik sm:text-base text-xs'>{props.address}</p>
                        </div>
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
