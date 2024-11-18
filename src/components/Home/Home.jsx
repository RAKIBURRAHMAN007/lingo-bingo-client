import React from 'react';
import Banner from '../Banner/Banner';
import AboutLIngoBingo from '../AboutLingoBingo/AboutLIngoBingo';
import Success from '../Success/Success';
import Misson from '../Mission/Misson';

const Home = () => {
    return (
        <div className='mt-7 space-y-10'>
            <Banner></Banner>
           
            <div className='flex flex-col items-center w-11/12 mx-auto'>
                <h1 className="text-xl md:text-5xl font-bold  text-center ">Lingo Bingo: Unlock the Joy of Language Learning</h1>
                <p className="py-6 font-mono text-xs md:text-base mx-8  font-medium opacity-75 text-center">
                    Lingo Bingo is dedicated to making vocabulary learning a fun, interactive, and effective experience for learners. Whether you are a beginner or advancing your language skills, our  platform helps you learn and retain vocabulary with ease. Our goal is to help users overcome the challenges of learning a new language by focusing on vocabulary acquisition through engaging and enjoyable methods.
                </p>
            </div>
          
            <AboutLIngoBingo></AboutLIngoBingo>
            <Misson></Misson>
            <Success></Success>
        </div>
    );
};

export default Home;