export const metadata = { title: "Case Studies | Book Your Future" };

const cases = [
  { title: "HENRY อายุ 34 รายได้ 120k", result: "จัดระบบ 3-Bucket + วาง DCA + เพิ่มความคุ้มครองสุขภาพ", tag: "HENRY" },
  { title: "ผู้ประกอบการอายุ 42", result: "ออกแบบรายได้เกษียณด้วยประกันบำนาญ + กองทุนผสม", tag: "SME" },
  { title: "วัยทำงาน 29 เริ่มต้นศูนย์", result: "ทำแผนพื้นฐาน + Rainy Day + ปิดหนี้แพง", tag: "Starter" },
];

export default function Cases() {
  return (
    <section className="section">
      <div className="container">
        <h1>Case Studies</h1>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {cases.map((c) => (
            <div key={c.title} className="card">
              <span className="badge">{c.tag}</span>
              <h3 className="mt-2">{c.title}</h3>
              <p className="text-gray-700 mt-2">{c.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}