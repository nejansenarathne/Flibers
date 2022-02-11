import React from 'react';
import HomeBlog from './components/UserPages/homeBlogs';
import AboutBlock from './components/UserPages/aboutPage';
// import NavBar from './components/navBar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorPage from './components/errorPage';
import BlogDetails from './components/UserPages/blogDetails';
import ContactBlock from './components/UserPages/contactPage';
import Footer from './components/footer';
import AccountPage from './components/UserPages/accountPage';
import AdminHome from './components/admin/adminHome';
import LoginPage from './components/UserPages/loginPage';
import NotificationPage from './config/notification';
import UIHome from './components/UIHome';

const App = () => {
    return ( 
        <div>
            {/* <NavBar /> */}
            <UIHome />
            <Router>
                <Routes>
                    <Route path="/" element={<HomeBlog />} /> 
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/about" element={<AboutBlock />} />
                    <Route path="/blogDetails/:key" element={<BlogDetails />}/>
                    <Route path="/contact" element={<ContactBlock />} />
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="*" element={<ErrorPage />}/>
                    <Route path="/adminNotification" element={<NotificationPage />}/>
                    <Route path="/admin/:username" element={<AdminHome />} />
                </Routes>
            </Router>
            <Footer />

        </div>
     );
}
 
export default App;