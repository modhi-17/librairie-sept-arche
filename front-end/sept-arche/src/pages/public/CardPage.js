import React from 'react';
import Cards from '../../components/public/Cards'
import NavigationBar from '../../components/public/NavigationBar'
import Footer from '../../components/public/Footer';

const CardPage = () => {
    return (
        <div>
            <NavigationBar/>
            <Cards />
            <Footer />
           
        </div>
    );
};

export default CardPage;