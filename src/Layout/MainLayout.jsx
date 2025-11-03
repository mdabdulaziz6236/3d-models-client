import React from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router';


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className='min-h-screen'>
             <Outlet></Outlet>
           </div>
            <Footer></Footer>
            
            
        </div>
    );
};

export default MainLayout;