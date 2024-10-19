import React from 'react';
import quote from '../../../images/quote.svg';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';
import Testimonial from '../Testimonial/Testimonial';



const testimonialData = [
    {
        name: 'Wilson Harry',
        quote: "It ia a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using 'Content Headers,content",
        from: 'California',
        img: people1
    },
    {
        name: 'Ema Gomez',
        quote: "It ia a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using 'Content Headers,content",
        from: 'California',
        img: people2
    },
    {
        name: 'Aliza Farari',
        quote: "It ia a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using 'Content Headers,content",
        from: 'California',
        img: people3
    }
]

const Testimonials = () => {
    return (
        <section className='testimonials my-5 py-5'>
            <div className="container">

                <div className='d-flex justify-content-between'>
                    <div className="section-header">
                        <h5 style={{ color: '#18d3b6' }} className='text-uppercase'>Testimonial</h5>
                        <h1>What Our Patients <br /> Says</h1>
                    </div>

                    <div>
                        <img className='w-75' src={quote} alt="" />
                    </div>
                </div>

                <div className='row g-3'>
                    {
                        testimonialData.map((testimonial, index) => (
                            <Testimonial key={index} testimonial={testimonial} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;