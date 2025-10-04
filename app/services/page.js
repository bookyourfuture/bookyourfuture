export const metadata = { title: "Services | Book Your Future" };

const services = [
  {
    name: "Future Talk (15–30 นาที)",
    desc: "ถอดโจทย์ เป้าหมาย ความเสี่ยง และช่องว่าง ก่อนออกแบบทางเลือก",
    cta: "/contact",
  },
  {
    name: "Personal Financial Plan",
    desc: "แผนเฉพาะคุณพร้อมเอกสารสรุป, 3-Bucket Map, และเช็คลิสต์ลงมือทำ",
    cta: "/contact",
  },
  {
    name: "Retirement Income Design",
    desc: "ออกแบบรายได้ยามเกษียณ: เงินลงทุน + ประกันบำนาญ + เงินสำรอง",
    cta: "/contact",
  },
];

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <h1>Services</h1>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {services.map((s) => (
            <div key={s.name} className="card">
              <h3>{s.name}</h3>
              <p className="mt-2 text-gray-700">{s.desc}</p>
              <a className="btn mt-4 no-underline" href={s.cta}>เริ่มต้น</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}