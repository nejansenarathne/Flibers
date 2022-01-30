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
                    <Route path="/" element={<HomeBlog />} />
                    <Route path="/about/:username" element={<AboutBlock />} />
                    <Route path="*" element={<ErrorPage />}/>
                    <Route path="/blogDetails/:key" element={<BlogDetails />}/>
                    <Route path="/contact" element={<ContactBlock />} />
                    <Route path="/account" element={<AccountPage />} />
                </Routes>
            </Router>
            <Footer />

        </div>
     );
}
 
export default App;