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
            <p className="lead mt-4 text-gray-700">
              สำหรับคนรายได้ 50,000 บาทขึ้นไป เจ้าของธุรกิจ และ HENRYs
              เราช่วยคุณจัดระบบ 3-Bucket, รับมือ Sequence of Returns Risk และออกแบบรายได้ยามเกษียณ
            </p>
            <div className="mt-6 flex gap-4">
              <Link className="btn no-underline" href="/contact">จอง Future Talk</Link>
              <Link className="btn no-underline" href="/services">ดูบริการ</Link>
            </div>
          </div>
          <div className="card">
            <h3>ไฮไลท์</h3>
            <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700">
              <li>Framework: 3-Bucket, Risk Management, Retirement Income</li>
              <li>ความรู้ + เครื่องมือ + แผนเฉพาะคุณ (ไม่ขายของแข็ง)</li>
              <li>เชื่อมต่อ LINE OA, นัดคุยผ่าน Tally</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section text-center">
        <h2>พร้อมเริ่มวางแผนแล้วหรือยัง?</h2>
        <p className="lead mt-3 text-gray-700">จอง Future Talk (15–30 นาที) เพื่อถอดโจทย์และออกแบบทางเลือก</p>
        <Link className="btn mt-6 no-underline" href="/contact">จอง Future Talk</Link>
      </section>
    </>
  );
}