import React from 'react';

const Footer = () => {
    const d = new Date()
    const year = d.getFullYear()
    return ( 
        <div className="footer">
            <div className="footerContent">
                <div className="logos">
                    <a href="https://www.instagram.com/nejan_senarathne/"><i class="fab fa-instagram"></i></a>
                    <a href="https://twitter.com/NejanSenarathne"><i class="fab fa-twitter"></i></a>
                </div>
                <div className="navLinkFooter">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Conatct</a>
                    <a href="/">Privacy Policy</a>
                </div>
                <p>Copyright @{year} | Designed With ❤️ by <span><a href="https://nejansenarathne.000webhostapp.com/">NSU</a></span></p>
            </div>
        </div>
     );
}
 
export default Footer;