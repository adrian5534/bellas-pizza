import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/brand.css'
import { useEffect } from 'react'

function Navbar() {
  // Fix for anchor navigation in React (ensures scroll and closes offcanvas)
  useEffect(() => {
    const handleOffcanvasLinks = (e) => {
      const target = e.target;
      if (
        target.matches('.offcanvas .nav-link') &&
        target.getAttribute('href') &&
        target.getAttribute('href').startsWith('#')
      ) {
        const offcanvas = document.querySelector('.offcanvas.show');
        if (offcanvas) {
          const bsOffcanvas = window.bootstrap?.Offcanvas.getInstance(offcanvas);
          if (bsOffcanvas) bsOffcanvas.hide();
        }
        // Scroll to section manually for React
        const section = document.querySelector(target.getAttribute('href'));
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          e.preventDefault();
        }
      }
    };
    document.addEventListener('click', handleOffcanvasLinks);
    return () => document.removeEventListener('click', handleOffcanvasLinks);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={{ background: 'var(--color-bg)', borderBottom: '1px solid #eee' }}>
      <div className="container" style={{ maxWidth: 1200 }}>
        <a className="navbar-brand fw-bold d-flex align-items-center" href="#home">
          <img
            src="/images/bella.png"
            alt="Bella's Pizza Logo"
            className="navbar-logo"
          />
          <span className="navbar-title">
            Bella’s Pizza
          </span>
        </a>
        {/* Offcanvas Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Desktop Menu */}
        <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
          <ul className="navbar-nav mx-auto align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link active" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#menu">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#specials">Specials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
          <a
            href="#order"
            className="btn order-btn ms-4"
          >
            Order Online
          </a>
        </div>
        {/* Offcanvas Menu for mobile */}
        <div
          className="offcanvas offcanvas-start d-lg-none"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <a className="navbar-brand d-flex align-items-center" href="#home">
              <img
                src="/images/bella.png"
                alt="Bella's Pizza Logo"
                className="navbar-logo"
              />
              <span className="navbar-title ms-2">
                Bella’s Pizza
              </span>
            </a>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" href="#home" data-bs-dismiss="offcanvas">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#menu" data-bs-dismiss="offcanvas">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#specials" data-bs-dismiss="offcanvas">Specials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" data-bs-dismiss="offcanvas">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" data-bs-dismiss="offcanvas">Contact</a>
              </li>
            </ul>
            <a
              href="#order"
              className="btn order-btn w-100 mt-3"
              style={{
                fontSize: '1.1rem'
              }}
              data-bs-dismiss="offcanvas"
            >
              Order Online
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar