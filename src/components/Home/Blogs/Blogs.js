import React from 'react';
import people1 from '../../../images/people-1.png';
import BlogPost from '../BlogPost/BlogPost';
import './Blogs.css';


const blogData = [
    {
        title: 'Check at least a doctor in a year for your teeth',
        description: 'It is a long established fact that by the readable content of a lot layout. The point',
        author: 'Dr. Rashed Kabir',
        authorImg: people1,
        date: '18 October 2024'
    },
    {
        title: '2 times of brush in a day can keep you healthy',
        description: 'It is a long established fact that by the readable content of a lot layout. The point',
        author: 'Dr. Caudi',
        authorImg: people1,
        date: '18 October 2024'
    },
    {
        title: 'The tooth cancer is taking a challenge',
        description: 'It is a long established fact that by the readable content of a lot layout. The point',
        author: 'Dr. John Mitchel',
        authorImg: people1,
        date: '18 October 2024'
    }
]

const Blogs = () => {
    return (
        <section className='blogs my-5'>
            <div className="container">
                <div className="section-header text-center">
                    <h5 style={{color: '#18d3b6'}} className='text-uppercase'>Our Blog</h5>
                    <h1>From Our Blog News</h1>
                </div>

                <div className='row mt-5'>
                    {
                        blogData.map(blog => <BlogPost blog={blog} />)
                    }
                </div>
            </div>

        </section>
    );
};

export default Blogs;