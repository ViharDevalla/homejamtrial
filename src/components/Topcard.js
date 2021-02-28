import React from 'react'
import Navbar from './Navbar';
import Element from '../assets/Elements.png'
import Stats from './Stats'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Topcard = () => {
    return (
        <div className='hero bg-gray-500 bg-cover bg-center min-h-full w-full'>
            <div className='overlay min-h-screen'>
                <Navbar/>
                <div className='m-0 w-full '>
                    <p className='text-white sm:ml-40 mt-40 sm:text-8xl m-10 libre text-5xl '>Cari Cari</p>
                    <p className='text-white text-xl sm:my-10 sm:m-40 m-10'>Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>
                    
                </div>
                <div className='element'>
                    <div className='subtract'/>
                    <div className='labelicon'>
                        <div className='lader'/>
                    </div>
                </div>
                <div className='' >
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite={false}
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 4,
                        partialVisibilityGutter: 40
                        },
                        mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                        },
                        tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                        }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                    >
                    <Stats />
                </Carousel>
                </div> 
            </div>
            
            
        </div>
    )
}

export default Topcard
