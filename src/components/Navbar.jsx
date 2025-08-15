import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/brand.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={{ background: 'var(--color-bg)', borderBottom: '1px solid #eee' }}>
      <div className="container" style={{ maxWidth: 1200 }}>
        <a className="navbar-brand fw-bold d-flex align-items-center" href="#home">
          <img
            src="/images/bella.png" // Use /images/bella.png for public folder
            alt="Bella's Pizza Logo"
            style={{
              width: 48,              // Use a smaller size for navbar
              height: 48,
              marginRight: 12,
              borderRadius: '50%',
              background: '#f7f1ea',
              objectFit: 'cover'
            }}
          />
          <span style={{ color: 'var(--color-primary)', fontSize: '1.15rem', fontWeight: 700 }}>
            Bella’s Pizza
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link active" href="#home" style={{ color: 'var(--color-dark)', borderBottom: '2px solid var(--color-primary)' }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#menu" style={{ color: 'var(--color-dark)' }}>Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#specials" style={{ color: 'var(--color-dark)' }}>Specials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" style={{ color: 'var(--color-dark)' }}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" style={{ color: 'var(--color-dark)' }}>Contact</a>
            </li>
          </ul>
          <a
            href="#order"
            className="btn ms-4"
            style={{
              background: 'var(--color-accent)',
              color: 'var(--color-dark)',
              fontWeight: 600,
              borderRadius: '8px',
              padding: '0.5rem 1.25rem',
              border: 'none'
            }}
          >
            Order Online
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar