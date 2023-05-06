import React from 'react';

import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../NavBar/Footer';


const Main = () => {
    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <div>
                <Outlet></Outlet>

            </div>
            <div>
               <Footer></Footer>

            </div>






        </div>
    );
};

export default Main;