import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const BlogPost = ({ blog }) => {
    return (
        <div className='col-md-4'>
            <div className='blog shadow-sm p-4'>

                <div className='d-flex align-items-center'>

                    <div className='blog-img'>
                        <img className='w-50' src={blog.authorImg} alt="" />
                    </div>

                    <div>
                        <h6 className='mb-1'>{blog.author}</h6>
                        <small className='text-secondary'>{blog.date}</small>
                    </div>

                </div>

                <div className='mt-3'>
                    <h6>{blog.title}</h6>
                    <p style={{ fontSize: '14px' }} className='text-secondary mt-3'>{blog.description}</p>
                </div>

                <div className='upper-layer'>
                    <h6 className='mb-1'>{blog.author}</h6>
                    <small>{blog.date}</small>

                    <h6 className='mt-3'>{blog.title}</h6>

                    <FontAwesomeIcon icon={faArrowRight} />

                    <img src="" alt="" />
                </div>

            </div>



        </div>
    );
};

export default BlogPost;