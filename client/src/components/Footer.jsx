import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <footer className="bg-light py-4">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          {/* Left Section: Copyright */}
          <div className="col-auto text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0 text-muted">
              © Copyright 2024 CleanDrive Rentals. All Rights Reserved.
            </p>
          </div>

          {/* Right Section: Social Media Links */}
          <div className="col-auto text-center">
            <div className="d-flex justify-content-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary me-3"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary me-3"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram fs-5"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;