import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import NavBar from '../NavBar/NavBar';

const DeshboadLayout = () => {
  const { user } = useContext(AuthContext)
  const [type] = useAdmin(user?.email)
  // const []=

  return (
    <div>
      <NavBar></NavBar>
      <div className="drawer drawer-mobile">
  <input id="DeshBoard-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="DeshBoard-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

      {
               type.role==='buyer'  && <li><Link to='/dashboard/user'> My Orders</Link></li>
              
            }
           
            {
               type.role==='admin' && <li><Link to='/dashboard/admindeshboard'> All Users</Link></li>
              
            }
             {
               type.role==='saller' && <>
               <li><Link to='/dashboard/addproduct'> Add Product</Link></li>
               <li><Link to='/dashboard/myproduct'> My Product</Link></li>
               
               
               </> 
              
            }
    </ul>
  
  </div>
</div>

    </div>
  );
};

export default DeshboadLayout;