import React from 'react'
import "./../styles/Footer.css";

function Footer() {
  return (
    <>
    <div className="footer">
        <div className="footer-logo">
            <img src="/NavLogo.png" alt="" />
        </div>
        <div>
            <p>Copyright &copy; 2023</p>
        </div>
        <div className='footer-menu'>
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
            <a href="/login">Login</a>
        </div>
    </div>
    </>
  )
}

export default Footer
