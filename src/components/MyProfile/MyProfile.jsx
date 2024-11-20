import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const MyProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h1>Hello {user.displayName}, Welcome to Lingo Bingo!</h1>
        </div>
    );
};

export default MyProfile;