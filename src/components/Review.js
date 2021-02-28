import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Reviewcard from './Reviewcard'
import review1 from '../assets/review1.png'
import review2 from '../assets/review2.png'
import review3 from '../assets/review3.png'

import it from '../assets/🇮🇹.png'
import us from '../assets/🇺🇸.png'


const Review = () => {
    return (
        <div className="sm:p-10 plainback bg-cover">
            <div className="flex sm:pt-10 sm:px-32">
                <p className="text-white sm:text-4xl libre p-5 text-xl ">Reviews</p>
                <pre className="text-white ml-auto pr-10 sm:text-lg text-sm text-white-400 place-self-center nunito">1 - 21  &larr;  &rarr; </pre>
            </div>
            <hr className="ml-5 -mt-5 sm:mx-36 sm:w-12"/>
            <div className="sm:mx-28 mx-10 pb-10 mt-5">
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
                    items: 3,
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
                    
                <Reviewcard name="Hellen Jummy" image={review1} country={us} address="Palo Alto, CA" content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. '/>
                <Reviewcard name="Isaac Oluwatemilorun" image={review2} country={it} address="Palo Alto, CA" content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. '/>
                <Reviewcard name="Hellen Jummy" image={review3} country={us} address="Palo Alto, CA" content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. '/>
                    
                </Carousel>
            </div>

            {/* <div className="block sm:mx-28 box-content sm:flex mx-10 pb-10">
            <Reviewcard name="Hellen Jummy" image={review1} country={us} address="Palo Alto, CA" content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. '/>
            <Reviewcard name="Isaac Oluwatemilorun" image={review2} country={it} address="Palo Alto, CA" content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. '/>
            <Reviewcard name="Hellen Jummy" image={review3} country={us} address="Palo Alto, CA" content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. '/>
            </div> */}
        </div>
    )
}

export default Review
