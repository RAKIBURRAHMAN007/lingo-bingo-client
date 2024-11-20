import React, { useRef } from 'react';

const ForgetPassword = () => {
    
    return (
        <div className='w-2/4 mx-auto mt-12'>
             <form  className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-mono">Email</span>
                        </label>
                        <input type="email"  name='email' placeholder="email" className="font-mono input input-bordered" required />
                    </div>
                  
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-[#9660ea] text-white text-xl font-mono">Reset</button>
                    </div>
                </form>
        </div>
    );
};

export default ForgetPassword;