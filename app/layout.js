import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <h1 className="mt-4">
        วางแผนการเงินอย่างเห็นภาพ <span className="badge align-middle">🔆 Light Mode Test</span>
        <br/>
        ด้วยมุมมองของนักวางแผนที่ใช้ “ประกัน” เป็นเครื่องมือ ไม่ใช่สินค้า
      </h1>
      <p className="mt-2 text-lg text-gray-700">Future Talk สำหรับมืออาชีพรายได้สูง</p>
      <Image
        src="/hero.jpg"
        alt="Book Your Future"
        width={800}
        height={400}
        className="mt-6 rounded-lg"
      />
    </div>
  );
}
