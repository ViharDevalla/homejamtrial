import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Showcard from './Showcard'
import benny from '../assets/benny.png';
import andrea from '../assets/andrea.png';
import vijay from '../assets/vijay.png';
import shilpa from '../assets/shilpa.png';
const Middlecard = () => {
    return (
        <div className="sm:p-10 plainback sm:bg-cover m-0 p-5 pr-0">
            {/* <div className="flex sm:pt-96 sm:px-0 lg:px-32 m-0 pt-56"> */}
            <div className="flex sm:pt-10 sm:px-0 lg:px-32 m-0 pt-20">
            
            <p className="text-white sm:text-4xl libre sm:p-5 text-xl">Upcoming Shows</p>
            <a href='/' className="text-white ml-auto sm:pr-10 text-xs pr-8 sm:text-lg text-yellow-400 place-self-center sm:text-sm">View all</a>
            </div>
            <div className="sm:mx-28 mx-10 pb-10 ">
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
                    
                    <Showcard image={benny} genre='Folk' name="Benny Dayal"/>
                    <Showcard image={vijay} genre='Bollywood' name="Vijay Yesudas"/>
                    <Showcard image={andrea} genre='Folk' name="Andrea Jeremiah"/>
                    <Showcard image={shilpa} genre='Folk' name="Shilpa Rao"/>


                </Carousel>
            </div>
            {/* <div className="block sm:mx-18 lg:mx-28 sm:flex ">
            <Showcard image={benny} genre='Folk' name="Benny Dayal"/>
            <Showcard image={vijay} genre='Bollywood' name="Vijay Yesudas"/>
             <Showcard image={andrea} genre='Folk' name="Andrea Jeremiah"/>
            <Showcard image={shilpa} genre='Folk' name="Shilpa Rao"/>
            </div> */}
            
        </div>
    )
}

export default Middlecard
