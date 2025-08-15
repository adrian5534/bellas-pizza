import '../styles/brand.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function AboutUs() {
  return (
    <section className="section-padding bg-cream" id="about">
      <div className="container-fluid" style={{ maxWidth: '1600px', margin: '0 auto' }}>
        <div className="row align-items-center">
          {/* Left: Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div style={{
              borderRadius: '18px',
              overflow: 'hidden',
              boxShadow: '0 2px 12px rgba(29,53,87,0.08)',
              height: '100%',
              minHeight: '340px'
            }}>
              <img
                src="https://images.unsplash.com/photo-1641505396885-cba0e01a92f2?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Chef preparing dough"
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '340px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          </div>
          {/* Right: Text */}
          <div className="col-lg-6 d-flex flex-column justify-content-center" style={{ height: '100%' }}>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: 24 }}>
              Our Story
            </h2>
            <p style={{ color: 'var(--color-dark)', fontSize: '1.08rem', marginBottom: 12 }}>
              Bella's Pizza started with a simple dream: to bring authentic Italian flavors to our community. Founded by the Bella family, our recipes have been passed down through generations, ensuring every bite tells a story of tradition and passion.
            </p>
            <p style={{ color: 'var(--color-dark)', fontSize: '1.08rem', marginBottom: 18 }}>
              We believe in using only the freshest, highest-quality ingredients, from our hand-kneaded dough to our rich, homemade tomato sauce. Our commitment to excellence is what makes Bella's Pizza a beloved local favorite.
            </p>
            <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: 18 }}>
              <li style={{ marginBottom: 8, display: 'flex', alignItems: 'center' }}>
                <span className="bi bi-check-circle-fill" style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginRight: 8 }}></span>
                Authentic Family Recipes
              </li>
              <li style={{ marginBottom: 8, display: 'flex', alignItems: 'center' }}>
                <span className="bi bi-check-circle-fill" style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginRight: 8 }}></span>
                Fresh, Locally Sourced Ingredients
              </li>
              <li style={{ marginBottom: 8, display: 'flex', alignItems: 'center' }}>
                <span className="bi bi-check-circle-fill" style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginRight: 8 }}></span>
                Hand-Crafted Daily
              </li>
              <li style={{ marginBottom: 8, display: 'flex', alignItems: 'center' }}>
                <span className="bi bi-check-circle-fill" style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginRight: 8 }}></span>
                Warm &amp; Welcoming Atmosphere
              </li>
            </ul>
            <a
              href="#about-details"
              className="btn"
              style={{
                background: 'var(--color-primary)',
                color: 'var(--color-bg)',
                fontWeight: 600,
                borderRadius: '8px',
                padding: '0.6rem 1.5rem',
                fontSize: '1rem',
                textDecoration: 'none',
                display: 'inline-block',
                width: 'fit-content'
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs