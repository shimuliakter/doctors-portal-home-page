import React from 'react';

const Testimonial = ({ testimonial }) => {
    return (
        <div className='col-md-4 my-5'>
            
            <div className='testimonial-card p-4 shadow rounded'>
                <p className='text-secondary'>{testimonial.quote}</p>

                <div className='d-flex align-items-center'>

                    <div>
                        <img className='w-75' src={testimonial.img} alt="" />
                    </div>

                    <div>
                        <h4 style={{color: '#18d3b6', fontSize: '16px'}}>{testimonial.name}</h4>
                        <p className='text-secondary' style={{fontSize: '14px'}}>{testimonial.from}</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Testimonial;