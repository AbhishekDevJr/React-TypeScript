import React from 'react'
import { useState } from 'react'

function UserComp() {

    const [user, setUser] = useState<UserType | null>(null);
    type UserType = {
        name : string,
        email : string
    }

    function handleLogIn(e : React.MouseEvent<HTMLButtonElement>){
        setUser({
            name : 'Abhishek Choudhari',
            email : 'abhishek@gmail.com'
        });
    }

    function handleLogOut(e : React.MouseEvent<HTMLButtonElement>){
        setUser(null);
    }

    return (
        <div>
            <button onClick={handleLogIn}>Log In</button>
            <button onClick={handleLogOut}>Log Out</button>
            {(user !== null) ? (<div>
                <p>You are loged in as : {user?.name}</p>
                <p> Your Email is : {user?.email}</p>
            </div>) : (null)}
        </div>
    )
}

export default UserComp