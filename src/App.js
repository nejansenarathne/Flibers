import React from 'react';
import HomeBlog from './components/homeBlogs';
import AboutBlock from './components/aboutPage';
import NavBar from './components/navBar';
import {BrowserRouter as Router, Routes, Route, useHistory } from 'react-router-dom'
import ErrorPage from './components/errorPage';
import BlogDetails from './components/blogDetails';
import ContactBlock from './components/contactPage';
import Footer from './components/footer';
import AccountPage from './components/accountPage';

const App = () => {
    return ( 
        <div>
            <NavBar />
            <Router>
                <Routes>
                    <Route path="/FlipBLogs.com/" element={<HomeBlog />} />
                    <Route path="/FlipBLogs.com/about" element={<AboutBlock />} />
                    <Route path="/FlipBLogs.com/blogDetails/:key" element={<BlogDetails />}/>
                    <Route path="/FlipBLogs.com/contact" element={<ContactBlock />} />
                    <Route path="/FlipBLogs.com/account" element={<AccountPage />} />
                    <Route path="*" element={<ErrorPage />}/>
                </Routes>
            </Router>
            <Footer />

        </div>
     );
}
 
export default App;