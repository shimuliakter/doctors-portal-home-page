import React from 'react';
import doctor from '../../../images/doctor-small.png';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Doctor from '../Doctor/Doctor';

const doctorData = [
    {
        name: 'Dr.Caudi',
        phone: '+61 452 200 126',
        img: doctor,
        icon: faPhone 
    },
    {
        name: 'Dr.Rashed Kabir',
        phone: '+61 452 200 120',
        img: doctor,
        icon: faPhone 
    },
    {
        name: 'Dr.John Mitchel',
        phone: '+61 452 200 122',
        img: doctor,
        icon: faPhone 
    }
];

const Doctors = () => {
    return (
        <section className='doctor-section py-5'>
            <div className="container py-5">
                <h5 style={{ color: '#18d3b6' }} className='text-center'>Our Doctors</h5>

                <div className='row py-5'>
                    {
                        doctorData.map(doctor => <Doctor doctor={doctor} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;