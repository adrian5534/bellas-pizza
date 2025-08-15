import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/brand.css'


function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-primary)', // Tomato Red
        color: '#fff',                      // White text
        padding: '64px 0 48px 0',           // Increased height
        position: 'relative',
        zIndex: 2,
        width: '100%',
        clear: 'both'
      }}
    >
      <div className="container w-100 clearfix">
        <div className="row justify-content-between align-items-center">
          {/* Logo & Name */}
          <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex align-items-center justify-content-md-start justify-content-center">
            <img
              src="/public/images/bella.png"
              alt="Bella's Pizza Logo"
              style={{
                width: 160,
                height: 160,
                marginRight: 28,
                borderRadius: '50%',
                background: '#f7f1ea',
                objectFit: 'cover'
              }}
            />
            <span style={{ fontSize: '1.7rem', fontWeight: 700, color: '#fff' }}>
              Bella's Pizza
            </span>
          </div>
          {/* Quick Links */}
          <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-md-start align-items-center">
            <h5 style={{ color: 'var(--color-accent)', fontWeight: 700, marginBottom: 16 }}>Quick Links</h5>
            <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: 0 }}>
              <li className="mb-2"><a href="#menu" style={{ color: '#fff', textDecoration: 'none' }}>Menu</a></li>
              <li className="mb-2"><a href="#order" style={{ color: '#fff', textDecoration: 'none' }}>Order Online</a></li>
              <li className="mb-2"><a href="#catering" style={{ color: '#fff', textDecoration: 'none' }}>Catering</a></li>
            </ul>
            <div className="d-flex gap-3 mt-3">
              <a href="#" aria-label="Facebook">
                <span className="bi bi-facebook" style={{ color: 'var(--color-accent)', fontSize: '1.3rem' }}></span>
              </a>
              <a href="#" aria-label="Instagram">
                <span className="bi bi-instagram" style={{ color: 'var(--color-accent)', fontSize: '1.3rem' }}></span>
              </a>
              <a href="#" aria-label="Twitter">
                <span className="bi bi-twitter-x" style={{ color: 'var(--color-accent)', fontSize: '1.3rem' }}></span>
              </a>
            </div>
          </div>
        </div>
        {/* Copyright & Credits - always below, centered */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div style={{ fontSize: '1rem', marginBottom: 6 }}>
              © {new Date().getFullYear()} Bella's Pizza. All rights reserved.
            </div>
            <div style={{ fontSize: '0.95rem', color: 'var(--color-accent)' }}>
              Credits: Adrian Reynolds &nbsp;|&nbsp; Powered by YSB Academy
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer