import React from 'react';

const UserData = ({username}) => {
    return (
        <div>
            <p>{username}</p>
            <button>Выйти</button>
        </div>
    )
}
export default UserData;