import React from 'react';
import img from '../../assets/myself.jpeg';

const AboutUs = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-center font-bold text-xl md:text-5xl pt-12'>Welcome to Lingo Bingo!</h1>
            <p className='text-center opacity-70 font-mono mt-9'>
                At Lingo Bingo, we believe learning language should be an exciting and engaging journey. Our platform combines interactive lessons and fun challenges to make mastering a new language easy and enjoyable.
            </p>
            <h1 className='text-center text-[#9660ea] font-bold text-xl md:text-4xl pt-12'>Meet the Developer</h1>
            <div className='mt-6 flex justify-center'>
                <div className='border-2 p-2'>
                    <img className='w-44' src={img} alt="Rakibur Rahman Ratul" />
                </div>
            </div>
            <p className='text-center font-mono mt-9'>
                I am <span className='font-bold text-[#9660ea]'>Rakibur Rahman Ratul</span>, the founder and developer of Lingo Bingo, a passionate learner and creator from Sylhet. Currently, I am pursuing my studies in the Computer Science and Engineering (CSE) department at Leading University.
            </p>
            <h1 className='text-center font-bold text-xl md:text-3xl pt-12'>Visit My Other Projects</h1>
            <h1 className='mt-7 text-center text-[#9660ea] font-bold'>Gadget-heaven</h1>
            <p className='mt-7 text-center font-mono'>
                Live Website Link : 
                <a
                    href="https://gadgets-heaven.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                >
                    https://gadgets-heaven.netlify.app/
                </a>
            </p>
            <h1 className='mt-7 text-center text-[#9660ea] font-bold'>Bpl-Dream-11</h1>
            <p className='mt-7 text-center font-mono'>
                Live Website Link : 
                <a
                    href="https://bpl-dreamm-11.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                >
                    https://bpl-dreamm-11.netlify.app/
                </a>
            </p>
            <h1 className='text-center font-bold text-xl md:text-3xl pt-12'>Skills and Expertise</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 w-3/4 mx-auto mt-8'>
                {/* HTML */}
                <div className='flex flex-col items-center hover:transform hover:scale-110 hover:rotate-6 transition-all duration-500'>
                    <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="HTML" className="w-16 h-16" />
                    <span className='text-lg font-semibold mt-2'>HTML</span>
                </div>
                {/* CSS */}
                <div className='flex flex-col items-center hover:transform hover:scale-110 hover:rotate-6 transition-all duration-500'>
                    <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="CSS" className="w-16 h-16" />
                    <span className='text-lg font-semibold mt-2'>CSS</span>
                </div>
                {/* JavaScript */}
                <div className='flex flex-col items-center hover:transform hover:scale-110 hover:rotate-6 transition-all duration-500'>
                    <img src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" alt="JavaScript" className="w-16 h-16" />
                    <span className='text-lg font-semibold mt-2'>JavaScript</span>
                </div>
                {/* React */}
                <div className='flex flex-col items-center hover:transform hover:scale-110 hover:rotate-6 transition-all duration-500'>
                    <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React" className="w-16 h-16" />
                    <span className='text-lg font-semibold mt-2'>React</span>
                </div>
                {/* Tailwind CSS */}
                <div className='flex flex-col items-center hover:transform hover:scale-110 hover:rotate-6 transition-all duration-500'>
                    <img src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" alt="Tailwind CSS" className="w-16 h-16" />
                    <span className='text-lg font-semibold mt-2'>Tailwind CSS</span>
                </div>
                {/* Firebase */}
                <div className='flex flex-col items-center hover:transform hover:scale-110 hover:rotate-6 transition-all duration-500'>
                    <img src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg" alt="Firebase" className="w-16 h-16" />
                    <span className='text-lg font-semibold mt-2'>Firebase</span>
                </div>
                {/* Git */}
                <div className='flex flex-col items-center hover:transform hover:scale-110 hover:rotate-6 transition-all duration-500'>
                    <img src="https://cdn.worldvectorlogo.com/logos/git-icon.svg" alt="Git" className="w-16 h-16" />
                    <span className='text-lg font-semibold mt-2'>Git</span>
                </div>
                {/* GitHub */}
                <div className='flex flex-col items-center hover:transform hover:scale-110 hover:rotate-6 transition-all duration-500'>
                    <img src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" alt="GitHub" className="w-16 h-16" />
                    <span className='text-lg font-semibold mt-2'>GitHub</span>
                </div>
                {/* Node.js */}
                <div className='flex flex-col items-center hover:transform hover:scale-110 hover:rotate-6 transition-all duration-500'>
                    <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="Node.js" className="w-16 h-16" />
                    <span className='text-lg font-semibold mt-2'>Node.js</span>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
