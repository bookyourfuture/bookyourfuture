export const metadata = { title: "Contact | Book Your Future" };

const TALLY_URL = "https://tally.so/r/your-form-id"; // TODO: replace with your real Tally link

export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <h1>Book Future Talk</h1>
        <p className="lead mt-4">
          เลือกเวลาที่สะดวกและตอบคำถามสั้นๆ เพื่อให้การคุยมีประสิทธิภาพมากที่สุด
        </p>

        <div className="card mt-8">
          <div className="aspect-video w-full">
            <iframe
              src={`${TALLY_URL}`}
              width="100%"
              height="600"
              frameBorder="0"
              title="Future Talk Form"
            ></iframe>
          </div>
          <p className="text-sm text-white/60 mt-3">
            ถ้าแบบฟอร์มไม่แสดง <a href={TALLY_URL} target="_blank" rel="noopener noreferrer">กดที่นี่เพื่อเปิดในแท็บใหม่</a>
          </p>
        </div>
      </div>
    </section>
  );
}
