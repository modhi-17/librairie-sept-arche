import React from 'react';
import Login from '../../components/public/Login';
import Register from '../../components/public/Register';
import NavigationBar from '../../components/public/NavigationBar';
import Footer from '../../components/public/Footer';


const AuthPage = () => {
    return (
        <div className='Auth'>
            <NavigationBar/>
           <Login/>
           <Register/>
           <Footer/>
        </div>
    );
};

export default AuthPage;