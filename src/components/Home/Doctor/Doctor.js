import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Doctor = ({doctor}) => {
    return (
        <div className='col-md-4'>
            <div className='doctor text-center'>
                <img className='w-75' src={doctor.img} alt="" />
                <h6 className='mt-3'>{doctor.name}</h6>

                <div className='d-flex justify-content-center'>
                    <FontAwesomeIcon style={{color: '#18d3b6'}} icon={doctor.icon} />
                    <p className='ms-2'>{doctor.phone}</p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;