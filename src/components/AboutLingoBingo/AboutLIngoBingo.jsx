import React from 'react';
import gif from '../../assets/giphy.webp'
import { Link } from 'react-router-dom';
const AboutLIngoBingo = () => {
    return (
        <div className="hero backdrop-blur-md  w-11/12 mx-auto">

            <div className="hero-content flex-col md:flex-row">
                <img
                    src={gif}
                    className="md:w-80 rounded-lg shadow-2xl" />
                <div>
                    <div>
                        <h1 className="text-5xl font-bold text-[#9660ea]  text-center">Join Us and Learn Spanish</h1>
                        <p className="py-6 font-mono text-center  font-medium opacity-75">Start your Spanish learning journey today at Lingo Bingo, where every word learned unlocks new opportunities for you to communicate, understand, and enjoy the Spanish language.</p>
                    </div>
                    <div className=''>
                        <Link to='/learning' className="btn text-white btn-primary bg-[#9660ea] ">Get Started</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutLIngoBingo;