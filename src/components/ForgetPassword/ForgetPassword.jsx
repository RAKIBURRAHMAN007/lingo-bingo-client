import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { auth, AuthContext } from '../../provider/AuthProvider';

const ForgetPassword = () => {
    const { setLoading} = useContext(AuthContext)
    const location = useLocation();

   
    const prefilledEmail = location.state?.email || '';

    const handleForget = (e) => {
        setLoading(true)
        e.preventDefault();
        const email = e.target.email.value;
        console.log('Reset password for:', email);
         
       
        window.location.href = `https://mail.google.com`;

        sendPasswordResetEmail(auth,email);
    };

    return (
        <div className="w-3/4 mx-auto mt-12">
            <form onSubmit={handleForget} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-mono">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        defaultValue={prefilledEmail} 
                        className="font-mono input input-bordered"
                        required
                    />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary bg-[#9660ea] text-white text-xl font-mono">
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ForgetPassword;
