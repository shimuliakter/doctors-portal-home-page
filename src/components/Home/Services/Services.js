import React from 'react';
import fluride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitenning from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitenning',
        img: whitenning
    }
]

const Services = () => {
    return (
        <section className='services-container mt-5'>
            <div className='text-center'>
                <h5 style={{ color: '#18d3b6', fontWeight: '700' }}>OUR SERVICES</h5>
                <h2 style={{ fontWeight: '700' }}>Services We Provide</h2>
            </div>

            <div className='d-flex justify-content-center'>
                <div className='w-75 row mt-5 pt-5'>
                    {
                        serviceData.map(service => <ServiceDetail service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;