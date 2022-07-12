import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">Hidden brand</a>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className='nav-link' to='/'>Home</Link>
              </li>
              <li class="nav-item">
               <Link className='nav-link' to='/menu'>Menu</Link>
              </li>
              <li class="nav-item">
                <Link className='nav-link' to='/reservation'>Reservation</Link>
              </li>
              <li class="nav-item">
                <Link className='nav-link' to='/contact'>Contact</Link>
              </li>
              <li class="nav-item">
                <Link className='nav-link' to='/login'>Login</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    );
};

export default Navbar;