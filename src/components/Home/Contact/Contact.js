import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className='contact-section py-5'>
            <div className="container contact-index py-5">
                <div className='contect-header text-center'>
                    <h6 style={{color: '#18d3b6'}} className='text-uppercase'>Contact Us</h6>
                    <h1 className='text-white mb-5'>Always Connect with us</h1>

                    <form action="">
                        <input className='form-control p-3' type="text" name="" id="" placeholder='Email Address*' required />
                        <br />
                        <input className='form-control p-3' type="text" name="" id="" placeholder='Subject*' required />
                        <br />
                        <textarea className='form-control p-3' rows='8' name="" id="" placeholder='Your Message*' required></textarea>
                        
                        <button type='submit' style={{backgroundColor: '#18d3b6', fontWeight: '600', marginTop: '40px', padding: '10px 60px'}} className="btn text-white text-uppercase">Submit</button>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;