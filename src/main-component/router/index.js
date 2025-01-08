import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Homepage from '../HomePage/HomePage'
import AboutCompanyPage from '../AboutCompanyPage/AboutCompanyPage';
import AboutPage from '../AboutPage/AboutPage';
import TestimonialPage from '../TestimonialPage/TestimonialPage';
import TestimonialPage2 from '../TestimonialPage2/TestimonialPage2';
import AttorneysPage from '../AttorneysPage/AttorneysPage';
import PracticePage from '../PracticePage/PracticePage';

import PracticeSinglePage from '../PracticeSinglePage/PracticeSinglePage';
import CaseSinglePage from '../CaseSinglePage/CaseSinglePage';
import AttorneySinglePage from '../AttorneySinglePage/AttorneySinglePage';
import CasePage from '../CasePage/CasePage';


import BlogPage from '../BlogPage/BlogPage'
import BlogPageLeft from '../BlogPageLeft/BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth/BlogPageFullwidth'
import BlogDetails from '../BlogDetails/BlogDetails'
import BlogDetailsFull from '../BlogDetailsFull/BlogDetailsFull'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide/BlogDetailsLeftSiide'
import ContactPage from '../ContactPage/ContactPage';
import FaqPage from '../FaqPage';


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="about" element={<AboutCompanyPage />} />
          <Route path="about-me" element={<AboutPage />} />
          <Route path="services" element={<PracticePage />} />
          <Route path="case-studies" element={<CasePage />} />
          <Route path="practice-single/:slug" element={<PracticeSinglePage />} />
          <Route path="case-single/:slug" element={<CaseSinglePage />} />
          <Route path="team" element={<AttorneysPage />} />
          <Route path="attorneys-single/:slug" element={<AttorneySinglePage />} />
          <Route path="testimonials" element={<TestimonialPage />} />
          <Route path="testimonials-s2" element={<TestimonialPage2 />} />
          <Route path="faq" element={<FaqPage />} />
  
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='blog-single/:slug' element={<BlogDetails />} />
          <Route path='blog-single-left-sidebar/:slug' element={<BlogDetailsLeftSiide />} />
          <Route path='blog-single-fullwidth/:slug' element={<BlogDetailsFull />} />
          <Route path='contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
