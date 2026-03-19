export default function Home() {
  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Jimmy's Yard</h1>
      <p>Quality cars. Trusted deals.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "20px" }}>
        
        <div style={{ border: "1px solid #ddd", padding: "10px" }}>
          <img src="/car1.jpg" width="100%" />
          <h3>Toyota Prado</h3>
          <p>KES 4,500,000</p>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "10px" }}>
          <img src="/car2.jpg" width="100%" />
          <h3>Subaru Forester</h3>
          <p>KES 2,200,000</p>
        </div>

      </div>
    </main>
  );
}