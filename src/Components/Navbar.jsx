import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// ComputeHub Logo Component
const ComputeHubLogo = ({ height = "35px" }) => (
  <svg 
    viewBox="0 0 300 100" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ height: height, width: "auto" }}
  >
    <defs>
      <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor:"#667eea"}}/>
        <stop offset="100%" style={{stopColor:"#764ba2"}}/>
      </linearGradient>
      
      <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor:"#007bff"}}/>
        <stop offset="100%" style={{stopColor:"#0056b3"}}/>
      </linearGradient>
    </defs>
    
    {/* Background circle for the icon */}
    <circle cx="40" cy="50" r="35" fill="url(#primaryGradient)" opacity="0.1"/>
    
    {/* Main computer/laptop icon */}
    <g transform="translate(15, 25)">
      {/* Laptop screen */}
      <rect x="5" y="8" width="40" height="25" rx="3" fill="url(#primaryGradient)" stroke="#ffffff" strokeWidth="1"/>
      
      {/* Screen content (circuit pattern) */}
      <g stroke="#ffffff" strokeWidth="1" fill="none" opacity="0.8">
        <path d="M12 15 L20 15 M20 15 L20 20 M20 20 L28 20"/>
        <path d="M15 12 L15 18 M22 12 L22 25"/>
        <circle cx="15" cy="15" r="1.5" fill="#ffffff"/>
        <circle cx="22" cy="18" r="1.5" fill="#ffffff"/>
        <circle cx="28" cy="20" r="1.5" fill="#ffffff"/>
      </g>
      
      {/* Laptop base */}
      <ellipse cx="25" cy="38" rx="22" ry="4" fill="url(#accentGradient)" opacity="0.8"/>
      <rect x="8" y="33" width="34" height="5" rx="2" fill="url(#accentGradient)"/>
      
      {/* Trackpad */}
      <rect x="20" y="35" width="10" height="6" rx="1" fill="#ffffff" opacity="0.3"/>
    </g>
    
    {/* Hub connection points around the laptop */}
    <g fill="url(#primaryGradient)" opacity="0.6">
      <circle cx="25" cy="25" r="2"/>
      <circle cx="55" cy="35" r="2"/>
      <circle cx="60" cy="60" r="2"/>
      <circle cx="35" cy="70" r="2"/>
      <circle cx="15" cy="60" r="2"/>
      
      {/* Connection lines */}
      <g stroke="url(#primaryGradient)" strokeWidth="1" opacity="0.4" fill="none">
        <path d="M40 45 L25 25"/>
        <path d="M40 45 L55 35"/>
        <path d="M40 45 L60 60"/>
        <path d="M40 45 L35 70"/>
        <path d="M40 45 L15 60"/>
      </g>
    </g>
    
    {/* Company name */}
    <g transform="translate(85, 35)">
      <text x="0" y="0" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="url(#primaryGradient)">
        Compute
      </text>
      <text x="102" y="0" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="url(#accentGradient)">
        Hub
      </text>
    </g>
    
    {/* Tagline */}
    <text x="87" y="60" fontFamily="Arial, sans-serif" fontSize="11" fill="#666666" fontStyle="italic">
      Smart Deals. Smarter Tech
    </text>
    
    {/* Decorative tech elements */}
    <g transform="translate(250, 20)" opacity="0.3">
      <rect x="0" y="0" width="8" height="8" fill="url(#primaryGradient)" transform="rotate(45)"/>
      <rect x="15" y="10" width="6" height="6" fill="url(#accentGradient)" transform="rotate(45)"/>
      <circle cx="10" cy="25" r="3" fill="url(#primaryGradient)"/>
    </g>
  </svg>
);

// Compact Logo (for smaller spaces)
const CompactLogo = ({ height = "35px" }) => (
  <svg 
    viewBox="0 0 80 80" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ height: height, width: "auto" }}
  >
    <defs>
      <linearGradient id="compactPrimaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor:"#667eea"}}/>
        <stop offset="100%" style={{stopColor:"#764ba2"}}/>
      </linearGradient>
      
      <linearGradient id="compactAccentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor:"#007bff"}}/>
        <stop offset="100%" style={{stopColor:"#0056b3"}}/>
      </linearGradient>
    </defs>
    
    {/* Background circle */}
    <circle cx="40" cy="40" r="35" fill="url(#compactPrimaryGradient)" opacity="0.1"/>
    
    {/* Laptop icon */}
    <g transform="translate(20, 20)">
      <rect x="5" y="8" width="30" height="20" rx="2" fill="url(#compactPrimaryGradient)" stroke="#ffffff" strokeWidth="1"/>
      
      {/* Circuit pattern */}
      <g stroke="#ffffff" strokeWidth="0.8" fill="none" opacity="0.8">
        <path d="M12 15 L20 15 M20 15 L20 20 M20 20 L28 20"/>
        <circle cx="15" cy="15" r="1" fill="#ffffff"/>
        <circle cx="25" cy="18" r="1" fill="#ffffff"/>
      </g>
      
      {/* Laptop base */}
      <rect x="8" y="28" width="24" height="4" rx="2" fill="url(#compactAccentGradient)"/>
    </g>
    
    {/* Hub points */}
    <g fill="url(#compactPrimaryGradient)" opacity="0.6">
      <circle cx="25" cy="25" r="1.5"/>
      <circle cx="55" cy="35" r="1.5"/>
      <circle cx="50" cy="55" r="1.5"/>
      <circle cx="30" cy="60" r="1.5"/>
      <circle cx="20" cy="50" r="1.5"/>
    </g>
  </svg>
);

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top px-3">
      <div className="container-fluid">
        {/* Brand with integrated logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2 me-4">
          {/* Full logo for larger screens */}
          <div className="d-none d-md-block">
            <ComputeHubLogo height="70px" />
          </div>
          {/* Compact logo for smaller screens */}
          <div className="d-block d-md-none">
            <CompactLogo height="60px" />
          </div>
        </Link>

        {/* Hamburger toggle for mobile */}
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

        {/* Collapsible links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Left side links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link fw-semibold text-primary">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/addproduct" className="nav-link">
                <button className="btn btn-success border border-primary btn-sm">
                  Add Product
                </button>
              </Link>
            </li>
          </ul>

          {/* Right side auth buttons */}
          <div className="d-flex align-items-center gap-2">
            {user ? (
              <>
                <span className="fw-bold text-primary">
                  Welcome, {user.username}
                </span>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={handleLogout}
                >
                  <i className="fas fa-sign-out-alt me-1"></i>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/signin">
                  <button className="btn btn-outline-primary btn-sm">
                    <i className="fas fa-sign-in-alt me-1"></i>
                    Sign In
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="btn btn-outline-warning btn-sm">
                    <i className="fas fa-user-plus me-1"></i>
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;