import React from 'react';
import NavigationBar from '../../components/public/NavigationBar';
import SearchBarBook from '../../components/public/SearchBarBook';
import Book from '../../components/public/Book';
import Footer from '../../components/public/Footer';

const BookPage = () => {
    return (
        <div className='bookPage'>
            <NavigationBar />
            <SearchBarBook />
            <Book/>
            <Footer />
        </div>
    );
};

export default BookPage;