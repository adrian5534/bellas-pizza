import '../styles/brand.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function HeroSection() {
  return (
    <>
      <section
        id="home"
        style={{
          background: '#1D3557',
          padding: '64px 0',
          minHeight: '540px', // Increased height
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="row align-items-center">
            {/* Left column: Headline & buttons */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h1 style={{
                color: '#E63946',
                fontFamily: 'Poppins, Inter, sans-serif',
                fontWeight: 700,
                fontSize: '3.2rem',
                marginBottom: '1rem'
              }}>
                Fresh From the Oven
              </h1>
              <p style={{
                color: '#F1FAEE',
                fontSize: '1.35rem',
                marginBottom: '2rem'
              }}>
                Authentic Italian Pizza Since 1985
              </p>
              <div>
                <a href="#menu"
                  className="btn me-3"
                  style={{
                    background: '#E63946',
                    color: '#F1FAEE',
                    fontWeight: 600,
                    borderRadius: '8px',
                    padding: '0.7rem 1.7rem',
                    border: 'none',
                    fontSize: '1.1rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                  }}>
                  View Menu
                </a>
                <a href="#order"
                  className="btn"
                  style={{
                    background: '#FFB703',
                    color: '#1D3557',
                    fontWeight: 600,
                    borderRadius: '8px',
                    padding: '0.7rem 1.7rem',
                    border: 'none',
                    fontSize: '1.1rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                  }}>
                  Order Online
                </a>
              </div>
            </div>
            {/* Right column: Pizza image */}
            <div className="col-md-6 text-center">
              <div
                style={{
                  width: '100%',
                  maxWidth: 540,
                  height: 360,
                  margin: '0 auto',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.12)'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=540&q=80"
                  alt="Pizza"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    background: 'none',
                    border: 'none'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Promo bar full width, below hero */}
      <div
        style={{
          background: '#E63946',
          borderRadius: 0,
          padding: '0.5rem 0',
          width: '100vw',
        }}
      >
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="row text-center" style={{ color: '#FFB703', fontWeight: 500 }}>
            <div className="col-md-4 mb-2 mb-md-0 d-flex align-items-center justify-content-center">
              <i className="bi bi-egg-fried fs-4 me-2" style={{ color: '#FFB703' }}></i>
              <span>15-min pickup</span>
            </div>
            <div className="col-md-4 mb-2 mb-md-0 d-flex align-items-center justify-content-center">
              <i className="bi bi-truck fs-4 me-2" style={{ color: '#FFB703' }}></i>
              <span>Halal options</span>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <i className="bi bi-clock fs-4 me-2" style={{ color: '#FFB703' }}></i>
              <span>Open till 11pm</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection