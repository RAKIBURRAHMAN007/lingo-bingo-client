import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h1 className='text-center font-bold text-xl md:text-5xl pt-12'>Hello {user.displayName}, Welcome to <br /> Lingo Bingo!</h1>
            <div className='flex justify-center'>
                <div className=' mt-9 border-2 p-2 w-32'>
                    <img className='w-28' src={user.photoURL} alt="" />
                </div>
            </div>
            <p className='font-mono text-center mt-7 font-bold'>Email: {user.email}</p>
            <p className='font-mono text-center mt-7 font-bold'>Name: {user.displayName}</p>

            <div className='flex justify-center mt-7'>
                <Link to='/updateProfile' className="btn btn-primary bg-[#9660ea] text-white text-xl font-mono">update profile</Link>
            </div>
        </div>
    );
};

export default MyProfile;