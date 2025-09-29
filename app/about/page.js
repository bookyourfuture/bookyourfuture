export const metadata = { title: "About | Book Your Future" };

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <h1>About</h1>
        <p className="lead mt-4">
          ผม “บุ๊ค” ที่ปรึกษาการเงิน-ประกัน ที่เชื่อในการออกแบบระบบการเงินที่เรียบง่ายและทำได้จริง
          ใช้ประกันเป็น “เครื่องมือ” เพื่อบริหารความเสี่ยงและรายได้ระยะยาว ไม่ใช่สินค้าให้ต้องเลือกซื้อมากมาย
        </p>
        <div className="card mt-8">
          <h3>Brand Pillars</h3>
          <ul className="list-disc ml-6 mt-3 text-white/80 space-y-2">
            <li>Communication First: อธิบายซับซ้อนให้เข้าใจง่าย</li>
            <li>Integrity: จริงใจ โปร่งใส วางแผนบนข้อมูล</li>
            <li>Consistency: ทำซ้ำอย่างมีระบบ สร้างความเชื่อมั่นระยะยาว</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
