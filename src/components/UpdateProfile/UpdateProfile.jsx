import { updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { auth, AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const navigate = useNavigate();
    const {setUser,user} = useContext(AuthContext);
    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photoUrl.value;
        const profile = {
            displayName: name,
            photoURL: photo
        }
        updateProfile(auth.currentUser,profile);
        setUser({
            ...user,
            displayName: name,
            photoURL: photo
        });
        navigate('/myProfile')

    }
    return (
        <div className='w-2/4 mx-auto'>
            <h1 className='text-center font-bold text-xl md:text-5xl pt-12'>Update Your Profile</h1>
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-mono">Name</span>
                    </label>
                    <input
                        type="text"
                        name='name'
                        placeholder="Enter your name"
                        className="font-mono input input-bordered"
                        required
                    />
                </div>
               
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-mono">Photo URL</span>
                    </label>
                    <input
                        type="text"
                        name='photoUrl'
                        placeholder="Enter your photo URL"
                        className="font-mono input input-bordered"

                    />
                </div>
               
                <div className="form-control mt-6">
                    <button className="btn btn-primary bg-[#9660ea] text-white text-xl font-mono">
                    Update Information 
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;