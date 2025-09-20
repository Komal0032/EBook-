import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import {Link,Outlet} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg " style={{backgroundColor:"#6aabbd"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{color:"black"}}>EBOOK</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/Contact">Contact</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/Login">Login</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/Read">Read</Link>
            </li><br/><br/>
            <li className="nav-item">
            <Link className="nav-link" to="/Buy Now">Buy Now</Link>
            </li>
            
            
            
          </ul>
          <form className="d-flex ms-auto">
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Search" 
              aria-label="Search"
            />
            <button className="btn btn-outline-success text-black" type="submit"style={{color:"#219ebc"}}>Search</button>
          </form>
        </div>
      </div>
    </nav>
    <Outlet/>
    </div>
  );
};

export default Navbar;