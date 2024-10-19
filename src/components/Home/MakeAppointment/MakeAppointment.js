import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className='make-appointment'>
            <div className="container">
                <div className="row">

                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt="" />
                    </div>

                    <div className="col-md-7 text-white text-area py-5">
                        <h5 style={{color: '#18d3b6', fontWeight: '700'}} className='text-uppercase'>Appointment</h5>
                        <h1 className='my-4'>Make an Appointment</h1>
                        <p>It is a long established fact that a reader will be distractedby the readable content of a page when looking at its</p>
                        <button style={{backgroundColor: '#18d3b6', fontWeight: '600'}} className="btn text-white mt-5">GET APPOINTMENT</button>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;