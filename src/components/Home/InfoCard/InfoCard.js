import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';


const InfoCard = ({ info }) => {
    return (
        <div className='col-md-4 text-white info-card'>
            <div className={`d-flex justify-content-center info-container info-${info.background}`}>

                <div className='me-3'>
                    <FontAwesomeIcon className='info-icon' icon={info.icon} />
                </div>

                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>

            </div>
        </div>
    );
};

export default InfoCard;