import React from 'react';
import treatment from '../../../images/treatment.png';

const FeaturedService = () => {
    return (
        <section className='features-services pb-0 pb-md-5 pt-5 my-5'>
            <div className="container mb-5">
                <div className="row mb-5">

                    <div className="col-md-5 mb-4 m-md-0">
                        <img className='img-fluid' src={treatment} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental Care, on your Term</h1>
                        <p className='text-secondary my-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et vero possimus consectetur, laboriosam delectus, velit dolores fugiat, illum ea eum quam. Praesentium nam vitae a ratione nulla voluptatem quo id.</p>

                        <button style={{backgroundColor: '#18d3b6', fontWeight: '600'}} className="btn text-white">Learn More</button>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeaturedService;