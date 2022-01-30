import React from 'react';
import AboutImg from '../img/about.gif'

const AboutBlock = () => {

  return (
    <div className='aboutPage'>
        <h1>About Us</h1>
        <img src={AboutImg} alt="About us gif" />
        <p>
          <strong>NSU</strong> is a Web Online DesigN company since 2020. In 2020, due tO the <strong>Covid-19 </strong>virus me and my friends losT jobs. So after that we followed some 'Udemy' courses online. Then after 6 months of practice we all stated our company 'NSU'. <br /> <br /> 

          One day Sudam(My Best Friend) show me an inTeresting blog about MCU. So after seeing it, I thought i should <strong>cReate</strong> a awesome online blog. That's how me and my fiends started to create this awesome blog site.  <br /> <br /> 

          Now finally, after 3 months for creating, its ready to use!. We added so many <strong>incredible featUres.</strong> So please be kind enough to send us your reviEws using <a href="/contact">Contact us</a>  page.
        </p>
    </div>
  );
}

export default AboutBlock;
