import React from "react";
import AppLogo from "../assert/AppLogo";

function Footer(props) {
  return (
    <div id="footer---container">
      <div className="app---footer">
        <div className="footer---bottom first">
          <AppLogo />
          <p>
            Learning Academy provides you with quality and affordable learning
            programmes rangin from IT, Leadership, Management, Telecoms,
            Software Development, Networking, Digital Marketing and more.
          </p>
        </div>
        <div className="footer---bottom second">
          <h6>QUICK LINKS</h6>
          <div className="quick---link">
            <a href="/">Home</a>
            <a href="/coursesPage">Courses</a>
            <a href="/aboutUsPage">About Us</a>
            <a href="/">Contact Us</a>
            <a href="/">Locations</a>
          </div>
        </div>
        <div className="footer---bottom third">
          <h6>CONTACT INFO</h6>
          <div className="contact---link">
            <a href="/">
              <i className="bi bi-envelope-fill"></i>
              <span>info@learningacademy.com</span>
            </a>
            <a href="/">
              <i className="bi bi-phone"></i>
              <span>+234 803 0724 271</span>
            </a>
            <a href="/">
              <i className="bi bi-geo-alt-fill"></i>
              <span>#77 Akaralepo Street Main Ward Nigeria</span>
            </a>
            <div className="social---media--logo">
              <a href="/">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="/">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="/">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="/">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="/">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="/">
                <i className="bi bi-snapchat"></i>
              </a>
              <a href="/">
                <i className="bi bi-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer---base">
        <p>
          Copyright <i className="bi bi-c-circle"></i> 2023 | All Rights
          Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
