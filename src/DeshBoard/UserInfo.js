import React, { useEffect, useState } from 'react';

const UserInfo = () => {
    const [usersInfo, setUsersInfo] = useState([])
    useEffect(() => {
        fetch('https://used-products-resale-server-bijontalukder.vercel.app/alluser')
            .then(res => res.json())
            .then(data => setUsersInfo(data))
    },[])
    // console.log(usersInfo)
    return (
        <div>
            {
                    usersInfo?.map(user=><h>{user.name}</h>)
                 
                }
            
        </div>
    );
};

export default UserInfo;