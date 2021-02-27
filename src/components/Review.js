import React from 'react'
import Reviewcard from './Reviewcard'
import review1 from '../assets/review1.png'
import review2 from '../assets/review2.png'
import review3 from '../assets/review3.png'
import Carousel from 'react-bootstrap/Carousel'
const Review = () => {
    return (
        <div className="p-10 plainback bg-cover">
            <div className="flex pt-10 px-32">
            <p className="text-white text-4xl libre">Reviews</p>
            <a href='/' className="text-white ml-auto text-lg text-yellow-400">View all</a>
            </div>
            <div className="flex mx-28 ">
            <Reviewcard name="Hellen Jummy" image={review1} address="Palo Alto, CA" content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. '/>
            <Reviewcard name="Isaac Oluwatemilorun" image={review2} address="Palo Alto, CA" content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. '/>
            <Reviewcard name="Hellen Jummy" image={review3} address="Palo Alto, CA" content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. '/>
            </div>
        </div>
    )
}

export default Review
