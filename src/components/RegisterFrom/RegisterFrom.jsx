import React from 'react';
import { Link } from 'react-router-dom';

const RegisterFrom = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-xl md:text-5xl pt-12'>Register to Get <br />Started!</h1>
            <div className='md:w-2/4 mx-auto'>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-mono">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="font-mono input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-mono">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="font-mono input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-mono">Photo URL</span>
                        </label>
                        <input
                            type="url"
                            placeholder="Enter your photo URL"
                            className="font-mono input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-mono text-xl">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="font-mono input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-[#9660ea] text-white text-xl font-mono">
                            Register
                        </button>
                    </div>
                </form>

            </div>
            <div className='flex justify-center'>
                <h1 className='font-mono'> Already Have Lingo Bingo Account? <Link to='/login' className='underline text-[#9660ea]'>Login Now</Link> </h1>
            </div>
        </div>
    );
};

export default RegisterFrom;