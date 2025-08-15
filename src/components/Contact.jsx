import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/brand.css'

function Contact() {
  return (
    <section className="section-padding" style={{ background: 'var(--color-dark)' }} id="contact">
      <div className="container-fluid px-4" style={{ maxWidth: '100%', margin: '0 auto' }}>
        <h2 className="text-center mb-5" style={{ color: 'var(--color-accent)', fontWeight: 700 }}>
          Get in Touch
        </h2>
        <div className="row gx-5 gy-5 justify-content-center">
          {/* Visit Us Column */}
          <div className="col-xl-4 col-lg-4 d-flex">
            <div className="bg-light p-4 rounded-4 flex-fill d-flex flex-column" style={{ minHeight: 600, paddingTop: 48, paddingBottom: 32 }}>
              <h4 style={{ color: 'var(--color-accent)', marginBottom: 18, paddingLeft: 4 }}>Visit Us</h4>
              <div className="flex-grow-1 d-flex flex-column justify-content-start" style={{ paddingLeft: 4 }}>
                <div className="mb-4 d-flex align-items-center" style={{ fontSize: '1.1rem' }}>
                  <span className="bi bi-geo-alt-fill" style={{ color: 'var(--color-primary)', fontSize: '1.3rem', marginRight: 12 }}></span>
                  <span style={{ color: 'var(--color-dark)' }}>123 Pizza Lane, Flavor Town, IT 12345</span>
                </div>
                <div className="mb-4">
                  <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Call Us</span>
                  <div className="d-flex align-items-center mt-2" style={{ fontSize: '1.1rem' }}>
                    <span className="bi bi-telephone-fill" style={{ color: 'var(--color-primary)', fontSize: '1.3rem', marginRight: 12 }}></span>
                    <a href="tel:1234567890" style={{ color: 'var(--color-dark)', textDecoration: 'none' }}>(123) 456-7890</a>
                  </div>
                </div>
                <div className="mb-4">
                  <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Email Us</span>
                  <div className="d-flex align-items-center mt-2" style={{ fontSize: '1.1rem' }}>
                    <span className="bi bi-envelope-fill" style={{ color: 'var(--color-primary)', fontSize: '1.3rem', marginRight: 12 }}></span>
                    <a href="mailto:info@bellaspizza.com" style={{ color: 'var(--color-dark)', textDecoration: 'none' }}>info@bellaspizza.com</a>
                  </div>
                </div>
                <div className="mb-4">
                  <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Opening Hours</span>
                  <div className="d-flex align-items-center mt-2" style={{ fontSize: '1.1rem' }}>
                    <span className="bi bi-clock" style={{ color: 'var(--color-primary)', fontSize: '1.3rem', marginRight: 12 }}></span>
                    Mon-Sun: 11am - 10pm
                  </div>
                </div>
                <div className="mb-2" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Follow Us</div>
                <div className="mb-3 d-flex gap-3">
                  <a href="#" aria-label="Facebook">
                    <span className="bi bi-facebook" style={{ color: 'var(--color-accent)', fontSize: '1.5rem' }}></span>
                  </a>
                  <a href="#" aria-label="Instagram">
                    <span className="bi bi-instagram" style={{ color: 'var(--color-accent)', fontSize: '1.5rem' }}></span>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <span className="bi bi-twitter-x" style={{ color: 'var(--color-accent)', fontSize: '1.5rem' }}></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Send Message Column */}
          <div className="col-xl-4 col-lg-4 d-flex">
            <div className="bg-light p-4 rounded-4 flex-fill d-flex flex-column justify-content-between" style={{ minHeight: 600, paddingTop: 48 }}>
              <div>
                <h4 style={{ color: 'var(--color-accent)', marginBottom: 24 }}>Send Us a Message</h4>
              </div>
              <form className="flex-grow-1 d-flex flex-column justify-content-center">
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    style={{
                      background: 'var(--color-yellow)',
                      borderRadius: '8px',
                      border: '1px solid var(--color-primary)',
                      fontWeight: 500,
                      color: 'var(--color-dark)',
                      fontSize: '1.1rem',
                      padding: '0.85rem 1rem'
                    }}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    style={{
                      background: 'var(--color-yellow)',
                      borderRadius: '8px',
                      border: '1px solid var(--color-primary)',
                      fontWeight: 500,
                      color: 'var(--color-dark)',
                      fontSize: '1.1rem',
                      padding: '0.85rem 1rem'
                    }}
                  />
                </div>
                <div className="mb-4 flex-grow-1">
                  <textarea
                    className="form-control"
                    rows={5}
                    placeholder="Your Message"
                    style={{
                      background: 'var(--color-yellow)',
                      borderRadius: '8px',
                      border: '1px solid var(--color-primary)',
                      fontWeight: 500,
                      color: 'var(--color-dark)',
                      fontSize: '1.1rem',
                      padding: '0.85rem 1rem',
                      minHeight: '120px',
                      height: '100%'
                    }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn w-100 mt-2"
                  style={{
                    background: 'var(--color-primary)',
                    color: 'var(--color-bg)',
                    fontWeight: 700,
                    borderRadius: '10px',
                    fontSize: '1.35rem',
                    border: 'none',
                    padding: '1.15rem 0'
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          {/* Map Column */}
          <div className="col-xl-4 col-lg-4 d-flex align-items-center justify-content-center">
            <div className="bg-light rounded-4 w-100 h-100 d-flex align-items-center justify-content-center" style={{ minHeight: 600 }}>
              <iframe
                title="Google Maps"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1357%2C51.4975%2C-0.1277%2C51.5015&amp;layer=mapnik"
                style={{
                  border: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '12px'
                }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact