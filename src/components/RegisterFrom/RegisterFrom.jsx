import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { Result } from 'postcss';

const RegisterFrom = () => {
    const { createNewUser,setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photoUrl.value;
        const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!regex.test(password)) {
            alert('password must be 6 and one upper and lower case')
            return;

        }
        createNewUser(email, password)
            .then(result => {
                const registeredUser = result.user;
                setUser(registeredUser);
                navigate('/')
                console.log(registeredUser)
            })
            .catch(error => {
                const errorMassage = error.message;
                console.log(errorMassage)

            })
    }
    return (
        <div>
            <h1 className='text-center font-bold text-xl md:text-5xl pt-12'>Register to Get <br />Started!</h1>
            <div className='md:w-2/4 mx-auto'>
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
                            <span className="label-text text-xl font-mono">Email</span>
                        </label>
                        <input
                            type="email"
                            name='email'
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
                            type="text"
                            name='photoUrl'
                            placeholder="Enter your photo URL"
                            className="font-mono input input-bordered"

                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-mono text-xl">Password</span>
                        </label>
                        <input
                            type="text"
                            name='password'
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