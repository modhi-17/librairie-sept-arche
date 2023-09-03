import React from 'react';
import NavigationBar from '../../components/public/NavigationBar'
import Footer from '../../components/public/Footer';
import DetailArticle from '../../components/public/DetailArticle';



const DetailPage = () => {
    return (
        <div className='detailPage'>
             <NavigationBar />
             <DetailArticle/>
            <Footer />
            
        </div>
    );
};

export default DetailPage;