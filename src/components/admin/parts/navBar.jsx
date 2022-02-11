import React from 'react'
import '../css/style.css'

const AdminNav = () => {
    return ( 
        <div>
              {/* <!---home page top navigation--> */}
            <nav>
                <div class="sidebar-button">
                    <i class='bx bx-menu sidebarBtn'></i>
                    <span class="dashboard">Dashboard</span>
                </div>

                {/* <!---search bar--> */}
                <div class="search-box">
                    <input type="text" placeholder="Search..." />
                    <i class='bx bx-search' ></i>
                </div>

                {/* <!--profile card--> */}
                <div class="profile-details">
                    <img src="https://i.pinimg.com/564x/9a/9f/7d/9a9f7d7b1f02d7a2007f9e48c26a232b.jpg" alt="" />
                    <span class="admin_name">Nejan Senarathne</span>
                </div>
                
            </nav>
        </div>
     );
}
 
export default AdminNav;