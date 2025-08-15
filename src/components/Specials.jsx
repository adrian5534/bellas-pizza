import '../styles/brand.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const specials = [
  {
    name: "Margherita Delight",
    desc: "Classic tomato, mozzarella, and fresh basil.",
    price: "$14.99",
    img: "https://images.unsplash.com/photo-1632935254449-e777adc9addf?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Pepperoni Power",
    desc: "Loaded with premium pepperoni and extra cheese.",
    price: "$16.99",
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Veggie Supreme",
    desc: "A garden of fresh vegetables on a crispy crust.",
    price: "$15.99",
    img: "https://plus.unsplash.com/premium_photo-1723532539240-f94f7e14f686?q=80&w=1832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]

function Specials() {
  return (
    <section className="section-padding bg-cream" id="specials">
      <div className="container" style={{ maxWidth: 1200 }}>
        <h2 className="text-center mb-4" style={{ color: 'var(--color-primary)' }}>
          Our Daily Specials
        </h2>
        <div className="row">
          {specials.map((item, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div
                className="card h-100"
                style={{
                  border: `1.5px solid var(--color-dark)`,
                  borderRadius: '20px', // slightly larger radius
                  background: 'var(--color-bg)',
                  boxShadow: '0 4px 16px rgba(29,53,87,0.08)', // deeper shadow
                  minHeight: '480px', // increased card height
                  padding: '0', // add padding for spacious look
                  overflow: 'hidden' // ensure content is contained
                }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="card-img-top"
                  style={{
                    width: '100%',
                    height: '260px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '20px',
                    borderTopRightRadius: '20px',
                    backgroundColor: '#eee'
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
                    {item.name}
                  </h5>
                  <p className="card-text" style={{ color: 'var(--color-dark)' }}>
                    {item.desc}
                  </p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '1.1rem' }}>
                      {item.price}
                    </span>
                    <button
                      className="btn btn-accent btn-sm"
                      style={{
                        borderRadius: '6px',
                        fontWeight: 600,
                        padding: '0.4rem 1rem'
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specials