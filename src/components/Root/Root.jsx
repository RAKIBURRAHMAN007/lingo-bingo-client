import React, { useContext } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../provider/AuthProvider';
const Root = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className=''>
            <div className=' w-11/12 mx-auto mt-4 mb-64'>
                <div className=' bg-white sticky backdrop-blur-md bg-opacity-65 top-0 z-10 '>
                    <Header></Header>
                    {
                        user && <div className='flex justify-center pb-3'>
                            <h1 className='text-[#9660ea]'>🎉 Welcome to Lingo Bingo, {user.displayName}</h1>
                        </div>


                    }
                </div>
                <Outlet></Outlet>
                <ToastContainer position="top-center" />

            </div>

            <Footer></Footer>
        </div>
    );
};

export default Root;