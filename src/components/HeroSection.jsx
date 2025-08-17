import '../styles/brand.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function HeroSection() {
  return (
    <>
      <section id="home" className="hero-section">
        <div className="container hero-container">
          <div className="row align-items-center">
            {/* Left column: Headline & buttons */}
            <div className="col-md-6 mb-4 mb-md-0 d-flex flex-column align-items-center align-items-md-start justify-content-center">
              <h1 className="hero-title text-center text-md-start">
                Fresh From the Oven
              </h1>
              <p className="hero-subtitle text-center text-md-start">
                Authentic Italian Pizza Since 1985
              </p>
              <div className="hero-btn-group">
                <a href="#menu" className="btn hero-btn me-2">
                  View Menu
                </a>
                <a href="#order" className="btn hero-btn-accent">
                  Order Online
                </a>
              </div>
            </div>
            {/* Right column: Pizza image */}
            <div className="col-md-6 text-center d-flex justify-content-center">
              <div className="hero-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=540&q=80"
                  alt="Pizza"
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Promo bar full width, below hero */}
      <div className="promo-bar">
        <div className="container promo-container">
          <div className="row promo-row">
            <div className="col-12 col-md-4 mb-2 mb-md-0 d-flex align-items-center justify-content-center promo-item">
              <i className="bi bi-egg-fried fs-4 me-2" style={{ color: '#FFB703' }}></i>
              <span>15-min pickup</span>
            </div>
            <div className="col-12 col-md-4 mb-2 mb-md-0 d-flex align-items-center justify-content-center promo-item">
              <i className="bi bi-truck fs-4 me-2" style={{ color: '#FFB703' }}></i>
              <span>Halal options</span>
            </div>
            <div className="col-12 col-md-4 d-flex align-items-center justify-content-center promo-item">
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