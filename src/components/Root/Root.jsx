import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className=''>
            <div className=' w-11/12 mx-auto mt-4 mb-64'>
                <Header></Header>
                <Outlet></Outlet>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default Root;