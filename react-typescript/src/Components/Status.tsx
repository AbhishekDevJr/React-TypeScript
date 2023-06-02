import React from 'react';

type StatusProps = {
    status : 'loading' | 'success' | 'error'
}

function Status(props : StatusProps){

    let currentStatus = '';
    if(props.status === 'loading'){
        currentStatus = 'Data Fetching...'
    }
    else if(props.status === 'success'){
        currentStatus = 'Data Fetched Successfully';
    }
    else if(props.status === 'error'){
        currentStatus = 'Data Fetching Failed';
    }

    return(
        <div className = "container-status">
            <h1>{currentStatus}</h1>
        </div>
    );
}

export default Status;