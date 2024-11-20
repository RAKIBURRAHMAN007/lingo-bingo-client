import React from 'react';

const Footer = () => {
    return (
        <div className=' p-5 bg-gradient-to-r  from-blue-600 to-purple-600
         via-pink-500 backdrop-blur-lg'>
            <footer className="footer w-11/12 mx-auto footer-center bg-white text-black rounded p-5">
                <nav className="gap-2">
                    <h1 className="link link-hover font-bold text-2xl">Contact Info</h1>
                    <p className='font-mono text-base md:text-xl'>
                        <span className='font-bold'>Email:</span> ratulrakibur5@gmail.com
                    </p>
                    <p className='font-mono text-xl'>
                        <span className='font-bold'>Phone:</span> 01636352751
                    </p>
                    <p className='font-mono text-xl'>
                        <span className='font-bold'>Address:</span> Sylhet,Bangladesh
                    </p>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://www.facebook.com/rakiburrahman.ratul.14/?_rdr'>
                            <img className='w-14' src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="" />
                        </a>
                        <a href='https://x.com/Ratul31363937'>
                            <img className='w-14' src="https://img.icons8.com/?size=100&id=yoQabS8l0qpr&format=png&color=000000" alt="" />
                        </a>
                        <a href='https://github.com/RAKIBURRAHMAN007'>
                            <img className='w-14' src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000" alt="" />
                        </a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All rights reserved by Rakibur Rahman Ratul</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
