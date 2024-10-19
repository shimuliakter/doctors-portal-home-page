import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';



const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10003 USA',
        icon: faLocationDot,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '+15697854124',
        icon: faPhoneVolume,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className='d-flex justify-content-center'>
            <div className='w-75 row'>
            {
                infosData.map(info => <InfoCard info={info} />)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;