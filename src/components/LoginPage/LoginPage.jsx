import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div>
            <div className='md:w-2/4 mx-auto'>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-mono">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="font-mono input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-mono">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="font-mono input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt font-mono link link-hover text-xl">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-[#9660ea] text-white text-xl font-mono">Login</button>
                    </div>
                </form>
            </div>
            <div className='flex justify-center w-96 mx-auto'>
                <h1 className='font-mono text-xl'>New to Lingo Bingo? <Link to='/register' className='underline text-[#9660ea]'>Register Now</Link> </h1>
            </div>
        </div>
    );
};

export default LoginPage;