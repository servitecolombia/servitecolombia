import React from 'react'
import '../styles/Footer.css'


function Footer() {
  return (
    <div class="footer-container">
      <div class="footer">
        <div class="footer-heading footer-1">
          <h2>About Us</h2>
          <a href="#">Blog</a>
          <a href="#">Demo</a>
          <a href="#">Customers</a>
          <a href="#">Investors</a>
          <a href="#">Terms of Service</a>
        </div>
        <div class="footer-heading footer-2">
          <h2>Contact Us</h2>
          <a href="#">Jobs</a>
          <a href="#">Support</a>
          <a href="#">Contact</a>
        </div>
        <div class="footer-heading footer-3">
          <h2>Social Media</h2>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Youtube</a>
          <a href="#">Twitter</a>
        </div>
       
      </div>
    </div>
  )
}

export default Footer