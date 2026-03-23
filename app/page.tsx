export default function Home() {
  const cars = [
    { name: "Toyota Prado", price: "KES 4.5M", image: "/car1.jpg" },
    { name: "Mazda CX-5", price: "KES 2.8M", image: "/car2.jpg" },
    { name: "Subaru Forester", price: "KES 2.2M", image: "/car3.jpg" },
  ];

  return (
    <main style={{ fontFamily: "Arial", background: "#0f0f0f", color: "#fff" }}>

      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 20px",
          background: "#111",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <h2>Jimmy’s Yard</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#home" style={{ color: "#fff", textDecoration: "none" }}>Home</a>
          <a href="#about" style={{ color: "#fff", textDecoration: "none" }}>About</a>
          <a href="#blog" style={{ color: "#fff", textDecoration: "none" }}>Blog</a>
          <a href="#contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "40px" }}>Premium Cars. Trusted Deals.</h1>
        <p style={{ color: "#ccc" }}>Your trusted car dealer in Nairobi</p>

        <a href="https://wa.me/254723669404">
          <button style={{ marginTop: "20px", padding: "12px 20px", background: "#c9a34e", border: "none", borderRadius: "5px" }}>
            Chat on WhatsApp
          </button>
        </a>
      </section>

      {/* CARS */}
      <section style={{ padding: "40px 20px" }}>
        <h2>Available Cars</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {cars.map((car, index) => (
            <div key={index} style={{ background: "#1a1a1a", borderRadius: "10px", overflow: "hidden" }}>
              <img src={car.image} style={{ width: "100%", height: "200px", objectFit: "cover" }} />

              <div style={{ padding: "15px" }}>
                <h3>{car.name}</h3>
                <p style={{ color: "#c9a34e" }}>{car.price}</p>

                <a href="https://wa.me/254723669404">
                  <button style={{ width: "100%", padding: "10px", background: "#c9a34e", border: "none", borderRadius: "5px" }}>
                    Inquire
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>About Us</h2>
        <p style={{ maxWidth: "600px", margin: "10px auto", color: "#ccc" }}>
          Jimmy’s Yard is a trusted car dealership based in Nairobi, offering high-quality vehicles at competitive prices.
          We pride ourselves on transparency, reliability, and customer satisfaction.
        </p>
      </section>

      {/* BLOG */}
      <section id="blog" style={{ padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center" }}>From Our Blog</h2>

        <div style={{ marginTop: "20px", display: "grid", gap: "15px" }}>
          <div style={{ background: "#1a1a1a", padding: "15px", borderRadius: "8px" }}>
            <h4>How to Choose the Right Car</h4>
            <p style={{ color: "#aaa" }}>Tips for selecting a car that fits your lifestyle and budget.</p>
          </div>

          <div style={{ background: "#1a1a1a", padding: "15px", borderRadius: "8px" }}>
            <h4>Top SUVs in Kenya</h4>
            <p style={{ color: "#aaa" }}>A look at the most popular SUVs in the market right now.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Contact Us</h2>
        <p style={{ color: "#ccc" }}>Call or WhatsApp us today to book a viewing</p>

        <a href="https://wa.me/254723669404">
          <button style={{ marginTop: "15px", padding: "12px 20px", background: "#25D366", border: "none", borderRadius: "5px" }}>
            Contact on WhatsApp
          </button>
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "20px", textAlign: "center", borderTop: "1px solid #333" }}>
        © {new Date().getFullYear()} Jimmy’s Yard
      </footer>

    </main>
  );
}