import React from 'react'
import { useParams } from 'react-router-dom';
import './css/style.css'
import AdminNav from './parts/navBar';

const AdminHome = () => {
    const {urlUname} = useParams() 
    return ( 
        <div>
            {/* <!---Side navigation bar--> */}
            <div class="sidebar">
                <div class="logo-details">
                <i class='bx bxl-c-plus-plus'></i>
                {/* <!--Logo--> */}
                <span class="logo_name">Flibers</span>
                </div>
                <ul class="nav-links">
                    {/* <!---Side navigation items--> */}
                    <li>
                    <a href="#" class="active">
                        <i class='bx bx-grid-alt' ></i>
                        <span class="links_name">Dashboard</span>
                    </a>
                    </li>

                </ul>
            </div>


  <section class="home-section">
      <AdminNav />

    <div class="home-content">
      <div class="overview-boxes">

        {/* <!---nuber of: showing box--> */}
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Total Order</div>
            <div class="number">40,876</div>
            <div class="indicator">
              <i class='bx bx-up-arrow-alt'></i>
              <span class="text">Up from yesterday</span>
            </div>
          </div>
          <i class='bx bx-cart-alt cart'></i>
        </div>
        {/* <!----------> */}

      </div>

      <div class="sales-boxes">
        {/* <!----Left side box {home page}--> */}
        <div class="recent-sales box">
          <div class="title">Recent Users</div>

          {/* <!----one text box--> */}
          <div class="sales-details">
            <ul class="details">
              <li><a href="#">02 Jan 2021</a></li>
            </ul>
            <ul class="details">
              <li><a href="#">Alex Doe</a></li>
           </ul>
          </div>
          {/* <!-------------> */}

          <div class="button">
            <a href="#">See All</a>
          </div>
        </div>

        {/* <!---Right side box--> */}
        <div class="top-sales box">
          <div class="title">Recent Messages</div>

          {/* <!---one message box--> */}
          <ul class="top-sales-details">
          <li>
            {/* <!---profile details--> */}
            <a href="#">
              <img src="images/profile.jpg" alt="" />
              <span class="product">Sudam Ekanayake</span>
            </a>
          </li>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam modi suscipit reiciendis quis hic aliquid.</p>
          </ul>
          {/* <!----------------> */}

        </div>
      </div>
    </div>
  </section>
        </div>
     );
}
 
export default AdminHome;