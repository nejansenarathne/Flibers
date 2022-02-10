import React from 'react';
import HomeBlog from './components/homeBlogs';
import AboutBlock from './components/aboutPage';
import NavBar from './components/navBar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorPage from './components/errorPage';
import BlogDetails from './components/blogDetails';
import ContactBlock from './components/contactPage';
import Footer from './components/footer';
import AccountPage from './components/accountPage';
import AdminHome from './components/admin/adminHome';
import LoginPage from './components/loginPage';
import NotificationPage from './config/notification';

const App = () => {
    return ( 
        <div>
            <NavBar />
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
                </Routes>
            </Router>
            <Footer />

        </div>
     );
}
 
export default App;