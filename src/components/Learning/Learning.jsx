import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import 'animate.css';



const Learning = () => {
    const {name} = useContext(AuthContext)
    
    return (
        <div className=' pt-10'>
            <div className=''>
               
                <h1 className='text-center  text-xl md:text-5xl animate__animated animate__rubberBand font-bold'>Ready to Learn? Let’s  <br /> Get Started!</h1>
                <p className='font-mono opacity-70 text-center mt-3  '>Get ready to embark on an exciting learning journey! Whether you're a <br />beginner or looking to improve, we’ve got everything you need to succeed. Let’s dive in and start learning today!</p>
            </div>
            <div className='mt-12  grid grid-cols-2 gap-2 md:grid-cols-3 w-11/12 mx-auto lg:grid-cols-4'>
                <NavLink to='/lesson/1'  className=' border rounded-md md:w-48 h-28 p-2 backdrop-blur-3xl bg-slate-100'>
                    <div className='rounded-md  bg-[#9660ea] h-full text-center '>
                        <h1 className='pt-8 text-white font-bold font-mono text-xl'>Lesson-1</h1>
                    </div>
                </NavLink>

                <NavLink to='/lesson/2'   className='border rounded-md md:w-48 h-28 p-2 backdrop-blur-3xl bg-slate-100'>
                    <div className='rounded-md  bg-[#9660ea] h-full text-center '>
                        <h1 className='pt-8 text-white font-bold font-mono text-xl'>Lesson-2</h1>
                    </div>
                </NavLink>

                <NavLink to='/lesson/3'   className='border rounded-md md:w-48 h-28 p-2 backdrop-blur-3xl bg-slate-100'>
                    <div className='rounded-md  bg-[#9660ea] h-full text-center '>
                        <h1 className='pt-8 text-white font-bold font-mono text-xl'>Lesson-3</h1>
                    </div>
                </NavLink>

                <NavLink to='/lesson/4'   className='border rounded-md md:w-48 h-28 p-2 backdrop-blur-3xl bg-slate-100'>
                    <div className='rounded-md  bg-[#9660ea] h-full text-center '>
                        <h1 className='pt-8 text-white font-bold font-mono text-xl'>Lesson-4</h1>
                    </div>
                </NavLink>

                <NavLink to='/lesson/5'   className='border rounded-md md:w-48 h-28 p-2 backdrop-blur-3xl bg-slate-100'>
                    <div className='rounded-md  bg-[#9660ea] h-full text-center '>
                        <h1 className='pt-8 text-white font-bold font-mono text-xl'>Lesson-5</h1>
                    </div>
                </NavLink>

                <NavLink to='/lesson/6'   className='border rounded-md md:w-48 h-28 p-2 backdrop-blur-3xl bg-slate-100'>
                    <div className='rounded-md  bg-[#9660ea] h-full text-center '>
                        <h1 className='pt-8 text-white font-bold font-mono text-xl'>Lesson-6</h1>
                    </div>
                </NavLink>

                <NavLink to='/lesson/7'   className='border rounded-md md:w-48 h-28 p-2 backdrop-blur-3xl bg-slate-100'>
                    <div className='rounded-md  bg-[#9660ea] h-full text-center '>
                        <h1 className='pt-8 text-white font-bold font-mono text-xl'>Lesson-7</h1>
                    </div>
                </NavLink>

                <NavLink to='/lesson/8'   className='border rounded-md md:w-48 h-28 p-2 backdrop-blur-3xl bg-slate-100'>
                    <div className='rounded-md  bg-[#9660ea] h-full text-center '>
                        <h1 className='pt-8 text-white font-bold font-mono text-xl'>Lesson-8</h1>
                    </div>
                </NavLink>

                <NavLink to='/lesson/9'   className='border rounded-md md:w-48 h-28 p-2 backdrop-blur-3xl bg-slate-100'>
                    <div className='rounded-md  bg-[#9660ea] h-full text-center '>
                        <h1 className='pt-8 text-white font-bold font-mono text-xl'>Lesson-9</h1>
                    </div>
                </NavLink>

                <NavLink to='/lesson/10'  className='border rounded-md md:w-48 h-28 p-2 backdrop-blur-3xl bg-slate-100'>
                    <div className='rounded-md  bg-[#9660ea] h-full text-center '>
                        <h1 className='pt-8 text-white font-bold font-mono text-xl'>Lesson-10</h1>
                    </div>
                </NavLink>

            </div>
            <div className='mt-12'>
                <h1 className='text-center   text-xl md:text-5xl font-bold'>Master the Alphabet: <br /> Video Tutorial</h1>
                <div className='mt-12 border p-1 rounded-md'>
                    <iframe className='w-full h-96' src="https://www.youtube.com/embed/dlazjKbt40Q?si=-F4pTBPOSZvleOxt" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className='mt-10 flex justify-center'>
                    <NavLink className='btn btn-neutral bg-[#9660ea] text-white' to='/tutorials'>View more</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Learning;