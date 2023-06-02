import React from 'react';

type GreetUserProps = {
    name : string,
    notificationCount : number,
    isLoggedIn : boolean
}

function GreetUser(props : GreetUserProps){
    return(
        <div className = "container-greet-user">
            {(props.isLoggedIn) ? (<h1>Hello {props.name}! You have {props.notificationCount} Notifications.</h1>) : (<h1>
                Hello User! Please LoginIn to check your Notifications.
            </h1>)}
        </div>
    );
}

export default GreetUser;