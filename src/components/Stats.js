import React from 'react'

const Stats = (props) => {
    return (
        <div className="circle">
            <img src={props.image} alt='stat' className='h-30 p-12 pt-10 pl-20' />
            <p className='text-white text-2xl p-2 pl-20 ml-3 -mt-10'>1</p>
            <p className='text-white text-lg p-3 -ml-1 pl-20 -mt-3'>Label</p>
        </div>
    )
}

export default Stats
