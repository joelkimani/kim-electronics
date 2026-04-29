import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      {/* Custom CSS Styles for Outstanding Design */}
      <style jsx>{`
        /* Footer gradient background with subtle animation */
        .footer-gradient {
          background: linear-gradient(135deg, 
            rgba(13, 110, 253, 0.1) 0%, 
            rgba(25, 135, 84, 0.1) 50%, 
            rgba(108, 117, 125, 0.1) 100%);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
        }
        
        /* Animated background overlay */
        .footer-gradient::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.05), 
            transparent);
          animation: shimmer 8s infinite;
        }
        
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        /* Company logo styling with glow effect */
        .company-logo {
          font-size: 1.8rem;
          font-weight: 800;
          background: linear-gradient(45deg, #0d6efd, #198754);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 20px rgba(13, 110, 253, 0.3);
          letter-spacing: -0.5px;
        }
        
        /* Section headers with modern styling */
        .section-header {
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 1.2rem;
          position: relative;
          font-size: 1.1rem;
          letter-spacing: 0.5px;
        }
        
        /* Decorative underline for section headers */
        .section-header::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 40px;
          height: 3px;
          background: linear-gradient(45deg, #0d6efd, #198754);
          border-radius: 2px;
        }
        
        /* Enhanced link styling with smooth transitions */
        .footer-link {
          color: #495057 !important;
          text-decoration: none !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          padding: 5px 0;
          display: inline-block;
          font-weight: 500;
        }
        
        /* Elegant hover effect for navigation links */
        .footer-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(45deg, #0d6efd, #198754);
          transition: width 0.3s ease;
        }
        
        .footer-link:hover::before {
          width: 100%;
        }
        
        .footer-link:hover {
          color: #0d6efd !important;
          transform: translateX(5px);
        }
        
        /* Contact information styling */
        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          padding: 8px 0;
          transition: all 0.3s ease;
          border-radius: 8px;
        }
        
        .contact-item:hover {
          background: rgba(255, 255, 255, 0.1);
          padding-left: 10px;
        }
        
        .contact-icon {
          width: 20px;
          height: 20px;
          margin-right: 12px;
          color: #0d6efd;
          font-weight: bold;
        }
        
        /* Social media icons with brand-specific hover colors */
        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.1);
          color: #495057 !important;
          text-decoration: none !important;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          margin: 5px 8px 5px 0;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }
        
        /* Animated background for social icons */
        .social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .social-link:hover::before {
          left: 100%;
        }
        
        /* Brand-specific hover colors */
        .social-link.facebook:hover {
          background: #1877f2;
          color: white !important;
          border-color: #1877f2;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 25px rgba(24, 119, 242, 0.3);
        }
        
        .social-link.twitter:hover {
          background: #1da1f2;
          color: white !important;
          border-color: #1da1f2;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 25px rgba(29, 161, 242, 0.3);
        }
        
        .social-link.instagram:hover {
          background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
          color: white !important;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 25px rgba(225, 48, 108, 0.3);
        }
        
        .social-link.linkedin:hover {
          background: #0077b5;
          color: white !important;
          border-color: #0077b5;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 25px rgba(0, 119, 181, 0.3);
        }
        
        .social-link.youtube:hover {
          background: #ff0000;
          color: white !important;
          border-color: #ff0000;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 25px rgba(255, 0, 0, 0.3);
        }
        
        /* Copyright section with elegant styling */
        .copyright-section {
          background: rgba(255, 255, 255, 0.05);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 2rem;
          padding-top: 1.5rem;
          position: relative;
        }
        
        .copyright-text {
          color: #6c757d;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.5px;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .company-logo {
            font-size: 1.5rem;
          }
          
          .section-header {
            font-size: 1rem;
          }
          
          .social-link {
            width: 40px;
            height: 40px;
            margin: 3px 5px 3px 0;
          }
        }
        
        /* Subtle animation for the entire footer */
        .footer-container {
          animation: fadeInUp 0.8s ease-out;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Main Footer Structure */}
      <footer className="footer-gradient text-dark py-5 mt-auto">
        <div className="container footer-container">
          <div className="row g-4">
            
            {/* Company Branding Section */}
            <div className="col-lg-3 col-md-6">
              <div className="mb-4">
                {/* Enhanced company logo with gradient text */}
                <h2 className="company-logo mb-3">ComputeHub</h2>
                <p className="mb-3 text-muted lh-base">
                  Empowering your digital journey with premium computer accessories 
                  and cutting-edge technology solutions.
                </p>
                {/* Trust indicators */}
                <div className="d-flex align-items-center text-muted small">
                  <i className="fas fa-shield-alt me-2 text-success"></i>
                  <span>Trusted by 10,000+ customers</span>
                </div>
              </div>
            </div>

            {/* Navigation Links Section */}
            <div className="col-lg-2 col-md-6">
              <h5 className="section-header">Quick Links</h5>
              <nav className="nav flex-column">
                {/* Internal navigation links with enhanced styling */}
                <Link to="/" className="footer-link nav-link p-0 mb-2">
                  <i className="fas fa-home me-2"></i>Home
                </Link>
                <Link to="/signin" className="footer-link nav-link p-0 mb-2">
                  <i className="fas fa-sign-in-alt me-2"></i>Sign In
                </Link>
                <Link to="/signup" className="footer-link nav-link p-0 mb-2">
                  <i className="fas fa-user-plus me-2"></i>Register
                </Link>
                <Link to="/addproduct" className="footer-link nav-link p-0 mb-2">
                  <i className="fas fa-plus-circle me-2"></i>Add Product
                </Link>
              </nav>
            </div>

            {/* Additional Links Section */}
            <div className="col-lg-2 col-md-6">
              <h5 className="section-header">Support</h5>
              <nav className="nav flex-column">
                {/* Support and policy links */}
                <Link to="/help" className="footer-link nav-link p-0 mb-2">
                  <i className="fas fa-question-circle me-2"></i>Help Center
                </Link>
                <Link to="/privacy" className="footer-link nav-link p-0 mb-2">
                  <i className="fas fa-shield-alt me-2"></i>Privacy Policy
                </Link>
                <Link to="/terms" className="footer-link nav-link p-0 mb-2">
                  <i className="fas fa-file-contract me-2"></i>Terms of Service
                </Link>
                <Link to="/returns" className="footer-link nav-link p-0 mb-2">
                  <i className="fas fa-undo me-2"></i>Returns
                </Link>
              </nav>
            </div>

            {/* Contact Information Section */}
            <div className="col-lg-2 col-md-6">
              <h5 className="section-header">Contact Info</h5>
              <div className="contact-info">
                {/* Enhanced contact information with icons and hover effects */}
                <div className="contact-item">
                  <i className="fas fa-envelope contact-icon"></i>
                  <div>
                    <small className="text-muted d-block">Email</small>
                    <a href="mailto:computehub@gmail.com" className="text-dark text-decoration-none">
                      computehub@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <i className="fas fa-phone contact-icon"></i>
                  <div>
                    <small className="text-muted d-block">Phone</small>
                    <a href="tel:+254743517449" className="text-dark text-decoration-none">
                      +254 743 517 449
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt contact-icon"></i>
                  <div>
                    <small className="text-muted d-block">Address</small>
                    <span className="text-dark">Nairobi, Kenya</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="col-lg-3 col-md-12">
              <h5 className="section-header">Connect With Us</h5>
              <p className="text-muted mb-3 small">
                Follow us on social media for the latest updates and tech insights.
              </p>
              
              {/* Social media icons with brand-specific hover effects */}
              <div className="social-media-links">
                <a 
                  href="https://facebook.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link facebook"
                  aria-label="Follow ComputeHub on Facebook"
                  title="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                
                <a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link twitter"
                  aria-label="Follow ComputeHub on Twitter"
                  title="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                
                <a 
                  href="https://instagram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link instagram"
                  aria-label="Follow ComputeHub on Instagram"
                  title="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                
                <a 
                  href="https://linkedin.com/company/computehub" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                  aria-label="Follow ComputeHub on LinkedIn"
                  title="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                
                <a 
                  href="https://youtube.com/@computehub" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link youtube"
                  aria-label="Subscribe to ComputeHub on YouTube"
                  title="YouTube"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              
              {/* Newsletter signup hint */}
              <div className="mt-4">
                <small className="text-muted">
                  <i className="fas fa-paper-plane me-2"></i>
                  Stay updated with our newsletter
                </small>
              </div>
            </div>
          </div>

          {/* Enhanced Copyright Section */}
          <div className="copyright-section text-center">
            <div className="row align-items-center">
              <div className="col-md-6 text-md-start text-center mb-2 mb-md-0">
                <p className="copyright-text mb-0">
                  <i className="fas fa-copyright me-2"></i>
                  2025 ComputeHub. All rights reserved.
                </p>
              </div>
              <div className="col-md-6 text-md-end text-center">
                <small className="text-muted">
                  Made with <i className="fas fa-heart text-danger mx-1"></i> in Nairobi, Kenya
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;