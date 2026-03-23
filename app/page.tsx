export default function Home() {
  const cars = [
    {
      name: "Toyota Prado",
      price: "KES 4.5M",
      image: "/car1.jpg",
    },
    {
      name: "Mazda CX-5",
      price: "KES 2.8M",
      image: "/car2.jpg",
    },
    {
      name: "Subaru Forester",
      price: "KES 2.2M",
      image: "/car3.jpg",
    },
  ];

  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#0f0f0f", color: "#fff" }}>
      
      {/* HERO SECTION */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
          Jimmy’s Yard
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc" }}>
          Premium Cars. Trusted Deals in Nairobi.
        </p>

        <a href="https://wa.me/2547XXXXXXXX" target="_blank">
          <button
            style={{
              marginTop: "20px",
              padding: "14px 24px",
              background: "#c9a34e",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Chat on WhatsApp
          </button>
        </a>
      </section>

      {/* CAR LISTINGS */}
      <section style={{ padding: "40px 20px" }}>
        <h2 style={{ marginBottom: "20px" }}>Available Cars</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {cars.map((car, index) => (
            <div
              key={index}
              style={{
                background: "#1a1a1a",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src={car.image}
                alt={car.name}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />

              <div style={{ padding: "15px" }}>
                <h3>{car.name}</h3>
                <p style={{ color: "#c9a34e", fontWeight: "bold" }}>
                  {car.price}
                </p>

                <a href="https://wa.me/2547XXXXXXXX" target="_blank">
                  <button
                    style={{
                      marginTop: "10px",
                      width: "100%",
                      padding: "10px",
                      background: "#c9a34e",
                      border: "none",
                      borderRadius: "6px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Inquire
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST SECTION */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Why Choose Jimmy’s Yard?</h2>

        <div
          style={{
            marginTop: "20px",
            display: "grid",
            gap: "15px",
          }}
        >
          <p>✔ Verified vehicles</p>
          <p>✔ Transparent pricing</p>
          <p>✔ Flexible payment options</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "20px",
          textAlign: "center",
          borderTop: "1px solid #333",
          color: "#aaa",
        }}
      >
        © {new Date().getFullYear()} Jimmy’s Yard. All rights reserved.
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/2547XXXXXXXX"
        target="_blank"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#25D366",
          color: "#fff",
          padding: "15px",
          borderRadius: "50%",
          fontSize: "20px",
          textDecoration: "none",
        }}
      >
        💬
      </a>
    </main>
  );
}