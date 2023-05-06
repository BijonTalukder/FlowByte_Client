import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import NavBar from '../NavBar/NavBar';
import UserInfo from './UserInfo';

const AdminDeshBoard = () => {
    const { user } = useContext(AuthContext);
    const [usersInfo, setUsersInfo] = useState([])
    useEffect(() => {
        fetch('https://used-products-resale-server-bijontalukder.vercel.app/alluser')
            .then(res => res.json())
            .then(data => setUsersInfo(data))
    },[])

    return (
        <div>
            {/* <NavBar></NavBar> */}
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Role</th>

                        </tr>
                    </thead>
                    <tbody>
                    {
                        usersInfo.map((user,index)=><tr>
                             <td>{index+1}</td>
                            <td>{user.name}</td>
                            <td>{user.role}</td>


                        </tr>)
                     
                    }

                    
                     

                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default AdminDeshBoard;