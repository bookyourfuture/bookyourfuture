import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="badge">Future Talk</span>
            <h1 className="mt-4">
              วางแผนการเงินอย่างเห็นภาพ
              <br/>ด้วยมุมมองของนักวางแผนที่ใช้ “ประกัน” เป็นเครื่องมือ ไม่ใช่สินค้า
            </h1>
            <p className="lead mt-4">
              สำหรับคนรายได้ 50,000 บาทขึ้นไป เจ้าของธุรกิจ และ HENRYs
              เราช่วยคุณจัดระบบ 3-Bucket, รับมือ Sequence of Returns Risk และออกแบบรายได้ยามเกษียณ
            </p>
            <div className="mt-6 flex gap-4">
              <Link className="btn no-underline" href="/contact">จอง Future Talk</Link>
              <Link className="btn no-underline" href="/services">ดู Services</Link>
            </div>
          </div>
          <div className="card">
            <h3>ไฮไลท์</h3>
            <ul className="list-disc ml-6 mt-3 space-y-2 text-white/80">
              <li>Framework: 3-Bucket, Risk Management, Retirement Income</li>
              <li>ความรู้ + เครื่องมือ + แผนเฉพาะคุณ (ไม่ขายของแข็ง)</li>
              <li>เชื่อมต่อ LINE OA, นัดคุยผ่าน Tally</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid md:grid-cols-3 gap-6">
          {[
            {title:"Clarity First", body:"ทำแผนที่เข้าใจง่าย เห็นเงินไหลเข้าออกชัดเจน"},
            {title:"Protect & Grow", body:"บาลานซ์ระหว่างคุ้มครอง-เติบโต ด้วยเครื่องมือเหมาะสม"},
            {title:"Actionable", body:"เช็คลิสต์ลงมือทำ + ระบบติดตามผล"},
          ].map((f)=>(
            <div key={f.title} className="card">
              <h3>{f.title}</h3>
              <p className="mt-2 text-white/80">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h2>พร้อมเริ่มวางแผนแล้วหรือยัง?</h2>
          <p className="lead mt-3">จอง Future Talk (15–30 นาที) เพื่อถอดโจทย์และออกแบบทางเลือก</p>
          <Link className="btn mt-6 no-underline" href="/contact">จอง Future Talk</Link>
        </div>
      </section>
    </>
  );
}
