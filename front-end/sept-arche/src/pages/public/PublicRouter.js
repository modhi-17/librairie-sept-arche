import React from 'react';
import { Routes,Route } from "react-router-dom"
import{HomePage,Cart,ContactPage,AuthPage, CardPage,BookPage,DetailArticle,DetailPage} from '../public'
import Error from '../../_utils/Error';



const PublicRouter = () => {
    return (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<AuthPage />} />
          {/* <Route path="/card" element={<CardPage />} /> */}
          <Route path="/book" element={<BookPage />} />
          <Route path="/detailArticle/:id"element={<DetailPage />} />
          {/* <Route path="/detailArticle/:id" element={<DetailArticle />} /> */}
          <Route path="*" element={<Error />} />
      </Routes>
    );
};

export default PublicRouter;