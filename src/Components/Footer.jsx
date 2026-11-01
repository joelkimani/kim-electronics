import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <style>{`
        .site-footer {
          position: relative;
          background: linear-gradient(180deg, rgba(241, 245, 249, 0.96) 0%, rgba(255, 255, 255, 0.98) 100%);
          border-top: 1px solid rgba(148, 163, 184, 0.22);
          overflow: hidden;
        }

        .site-footer::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top left, rgba(59, 130, 246, 0.12), transparent 28%),
                      radial-gradient(circle at bottom right, rgba(139, 92, 246, 0.10), transparent 30%);
          pointer-events: none;
        }

        .footer-inner {
          position: relative;
          z-index: 1;
          padding: 3.5rem 0 1.5rem;
        }

        .footer-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
          background: linear-gradient(135deg, #0f172a 0%, #1d4ed8 48%, #7c3aed 100%);
          color: #fff;
          border-radius: 22px;
          padding: 1.5rem 1.75rem;
          margin-bottom: 2rem;
          box-shadow: 0 18px 35px rgba(37, 99, 235, 0.18);
        }

        .footer-cta .eyebrow {
          display: inline-block;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          opacity: 0.8;
          margin-bottom: 0.4rem;
        }

        .footer-cta h4 {
          margin: 0;
          font-size: clamp(1.3rem, 2vw, 1.9rem);
          font-weight: 800;
        }

        .footer-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.8rem 1.25rem;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.18);
          font-weight: 700;
          transition: all 0.25s ease;
          white-space: nowrap;
        }

        .footer-cta-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-1px);
          color: #fff;
          text-decoration: none;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.9fr 0.9fr 1.1fr;
          gap: 2rem;
        }

        .footer-brand,
        .footer-column {
          background: rgba(255, 255, 255, 0.55);
          border: 1px solid rgba(148, 163, 184, 0.18);
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
        }

        .brand-lockup {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1rem;
        }

        .brand-mark {
          width: 42px;
          height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          color: white;
          font-weight: 800;
          font-size: 1.1rem;
          box-shadow: 0 10px 20px rgba(79, 70, 229, 0.25);
        }

        .company-logo {
          font-size: 1.8rem;
          font-weight: 800;
          margin: 0;
          background: linear-gradient(135deg, #0f172a, #2563eb);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .footer-brand p {
          color: #475569;
          line-height: 1.8;
          margin-bottom: 1.1rem;
        }

        .trust-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: #0f766e;
          font-weight: 700;
          font-size: 0.9rem;
        }

        .footer-column h5 {
          position: relative;
          margin: 0 0 1rem;
          padding-bottom: 0.65rem;
          font-size: 1rem;
          font-weight: 800;
          color: #111827;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .footer-column h5::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 42px;
          height: 3px;
          border-radius: 999px;
          background: linear-gradient(90deg, #2563eb, #7c3aed);
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .footer-link {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          color: #475569;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.25s ease;
        }

        .footer-link:hover {
          color: #1d4ed8;
          transform: translateX(3px);
          text-decoration: none;
        }

        .footer-contacts {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
        }

        .contact-icon {
          margin-top: 0.15rem;
          width: 18px;
          min-width: 18px;
          color: #2563eb;
        }

        .contact-item small {
          display: block;
          color: #64748b;
          margin-bottom: 0.2rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .contact-item a,
        .contact-item span {
          color: #0f172a;
          text-decoration: none;
          font-weight: 600;
          line-height: 1.6;
        }

        .contact-item a:hover {
          color: #1d4ed8;
          text-decoration: none;
        }

        .social-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
          margin-top: 0.5rem;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(37, 99, 235, 0.06);
          border: 1px solid rgba(148, 163, 184, 0.25);
          color: #334155;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .social-link:hover {
          color: #fff;
          text-decoration: none;
          transform: translateY(-2px);
        }

        .social-link.facebook:hover { background: #1877f2; }
        .social-link.twitter:hover { background: #1da1f2; }
        .social-link.instagram:hover { background: linear-gradient(135deg, #f59e0b, #ec4899, #8b5cf6); }
        .social-link.linkedin:hover { background: #0a66c2; }
        .social-link.youtube:hover { background: #ff0000; }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          border-top: 1px solid rgba(148, 163, 184, 0.25);
          margin-top: 2rem;
          padding-top: 1.25rem;
          color: #475569;
        }

        .copyright-text,
        .made-by {
          margin: 0;
          font-size: 0.92rem;
        }

        .made-by strong {
          color: #0f172a;
        }

        @media (max-width: 991px) {
          .footer-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .footer-cta {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .footer-brand,
          .footer-column {
            padding: 1.2rem;
          }
        }
      `}</style>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-cta">
            <div>
              <span className="eyebrow">Need help choosing?</span>
              <h4>Shop with confidence and expert support.</h4>
            </div>
            <Link to="/help" className="footer-cta-btn">Get support</Link>
          </div>

          <div className="footer-grid">
            <div className="footer-brand">
              <div className="brand-lockup">
                <span className="brand-mark">C</span>
                <h2 className="company-logo">ComputeHub</h2>
              </div>
              <p>
                Premium laptops, monitors, and tech essentials built to help customers work,
                create, and connect with confidence.
              </p>
              <div className="trust-row">
                <i className="fas fa-shield-alt"></i>
                Trusted by 10,000+ customers
              </div>
            </div>

            <div className="footer-column">
              <h5>Quick Links</h5>
              <div className="footer-links">
                <Link to="/" className="footer-link"><i className="fas fa-home"></i>Home</Link>
                <Link to="/signin" className="footer-link"><i className="fas fa-sign-in-alt"></i>Sign In</Link>
                <Link to="/signup" className="footer-link"><i className="fas fa-user-plus"></i>Register</Link>
                <Link to="/addproduct" className="footer-link"><i className="fas fa-plus-circle"></i>Add Product</Link>
              </div>
            </div>

            <div className="footer-column">
              <h5>Support</h5>
              <div className="footer-links">
                <Link to="/help" className="footer-link"><i className="fas fa-question-circle"></i>Help Center</Link>
                <Link to="/privacy" className="footer-link"><i className="fas fa-shield-alt"></i>Privacy Policy</Link>
                <Link to="/terms" className="footer-link"><i className="fas fa-file-contract"></i>Terms of Service</Link>
                <Link to="/returns" className="footer-link"><i className="fas fa-undo"></i>Returns</Link>
              </div>
            </div>

            <div className="footer-column">
              <h5>Contact</h5>
              <div className="footer-contacts">
                <div className="contact-item">
                  <i className="fas fa-envelope contact-icon"></i>
                  <div>
                    <small>Email</small>
                    <a href="mailto:computehub@gmail.com">computehub@gmail.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone contact-icon"></i>
                  <div>
                    <small>Phone</small>
                    <span>+254 743 517 449</span>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt contact-icon"></i>
                  <div>
                    <small>Address</small>
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright-text">© 2025 ComputeHub. All rights reserved.</p>
            <div className="social-wrap">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link facebook" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link twitter" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link linkedin" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-link youtube" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
            <p className="made-by">Made with <i className="fas fa-heart" style={{ color: '#ef4444' }}></i> in <strong>Nairobi</strong></p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;