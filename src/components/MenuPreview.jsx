import { useState } from 'react'
import '../styles/brand.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const menuData = {
  Pizzas: [
    {
      name: "Classic Pepperoni",
      price: "$15.00",
      desc: "Our signature pepperoni pizza with a rich tomato sauce.",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Four Cheese Pizza",
      price: "$16.50",
      desc: "A blend of mozzarella, cheddar, provolone, and parmesan.",
      img: "https://images.unsplash.com/photo-1692737580558-b9dfdac5599c?q=80&w=1815&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "BBQ Chicken Pizza",
      price: "$17.00",
      desc: "Grilled chicken, red onions, and tangy BBQ sauce.",
      img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Mushroom Truffle",
      price: "$18.50",
      desc: "Exotic mushrooms, truffle oil, and a creamy white sauce.",
      img: "https://images.unsplash.com/photo-1692737580563-7ba2d896f0f6?q=80&w=1815&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  Pastas: [
    {
      name: "Spaghetti Pomodoro",
      price: "$12.00",
      desc: "Classic spaghetti with tomato sauce and basil.",
      img: "https://images.unsplash.com/photo-1676471771228-c4cdbfbd2a7f?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Fettuccine Alfredo",
      price: "$13.50",
      desc: "Creamy Alfredo sauce over fettuccine noodles.",
      img: "https://cdn.pixabay.com/photo/2024/05/05/01/08/pasta-8740051_1280.jpg"
    }
  ],
  Salads: [
    {
      name: "Caprese Salad",
      price: "$8.00",
      desc: "Fresh tomatoes, mozzarella, basil, and olive oil.",
      img: "https://images.pexels.com/photos/8696570/pexels-photo-8696570.jpeg"
    },
    {
      name: "Caesar Salad",
      price: "$9.00",
      desc: "Crisp romaine, parmesan, croutons, and Caesar dressing.",
      img: "https://images.unsplash.com/photo-1572448910681-3341d74893d2?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  Drinks: [
    {
      name: "Italian Soda",
      price: "$4.00",
      desc: "Refreshing fruit-flavored soda.",
      img: "https://images.unsplash.com/photo-1710811900369-550d09201fbd?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Sparkling Water",
      price: "$3.00",
      desc: "Chilled, crisp sparkling water.",
      img: "https://images.unsplash.com/photo-1705413080969-d68cc2faa0d5?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]
}

const categories = Object.keys(menuData)

function MenuPreview() {
  const [activeTab, setActiveTab] = useState(categories[0])

  return (
    <section className="section-padding" style={{ background: 'var(--color-dark)' }} id="menu">
      <div className="container-fluid" style={{ maxWidth: '1600px', margin: '0 auto' }}>
        <h2 className="text-center mb-4" style={{ color: 'var(--color-accent)' }}>
          Explore Our Menu
        </h2>
        {/* Category Tabs */}
        <div className="d-flex justify-content-center mb-4 flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              className={`btn ${activeTab === cat ? 'btn-primary' : ''}`}
              style={{
                background: activeTab === cat ? 'var(--color-primary)' : 'var(--color-bg)',
                color: activeTab === cat ? 'var(--color-bg)' : 'var(--color-dark)',
                fontWeight: 600,
                borderRadius: '8px',
                border: activeTab === cat ? 'none' : '1.5px solid var(--color-primary)',
                minWidth: 100,
                padding: '0.5rem 1.2rem'
              }}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Menu Items */}
        <div className="row g-4">
          {menuData[activeTab].map((item, idx) => (
            <div className="col-lg-4 col-md-6 col-12 d-flex" key={idx}>
              <div
                className="w-100 d-flex"
                style={{
                  background: 'var(--color-bg)',
                  border: '1.5px solid var(--color-dark)',
                  borderRadius: '18px',
                  boxShadow: '0 2px 8px rgba(29,53,87,0.04)',
                  minHeight: '260px',
                  overflow: 'hidden',
                  width: '100%'
                }}
              >
                <div style={{
                  flex: '0 0 50%',
                  height: '100%',
                  display: 'flex'
                }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '18px 0 0 18px',
                      display: 'block'
                    }}
                  />
                </div>
                <div className="d-flex flex-column justify-content-center px-4 py-3" style={{ flex: 1 }}>
                  <h5 style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '1.25rem', marginBottom: 10 }}>
                    {item.name}
                  </h5>
                  <p style={{ color: 'var(--color-dark)', fontSize: '1.05rem', marginBottom: 10 }}>
                    {item.desc}
                  </p>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '1.1rem' }}>
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* CTA Buttons */}
        <div className="d-flex justify-content-center gap-3 mt-4">
          <a
            href="#fullmenu"
            className="btn btn-primary"
            style={{
              background: 'var(--color-primary)',
              color: 'var(--color-bg)',
              fontWeight: 600,
              borderRadius: '8px',
              padding: '0.6rem 1.5rem',
              border: 'none'
            }}
          >
            View Full Menu
          </a>
          <a
            href="#order"
            className="btn btn-accent"
            style={{
              background: 'var(--color-accent)',
              color: 'var(--color-dark)',
              fontWeight: 600,
              borderRadius: '8px',
              padding: '0.6rem 1.5rem',
              border: 'none'
            }}
          >
            Order Online
          </a>
        </div>
      </div>
    </section>
  )
}

export default MenuPreview