import React from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className='min-h-screen'>
             <Outlet></Outlet>
           </div>
            <Footer></Footer>
            <Toaster position='top-right'></Toaster>
            
            
        </div>
    );
};

export default MainLayout;