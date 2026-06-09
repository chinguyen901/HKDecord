import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Về Chúng Tôi",
  description: "Tìm hiểu về HK-Decord — kiến trúc sư & nhà thiết kế nội thất với hơn 8 năm kinh nghiệm tại TP.HCM.",
};

const values = [
  { title: "Sáng Tạo", desc: "Mỗi công trình là một tác phẩm độc đáo, phản ánh cá tính và câu chuyện riêng của gia chủ." },
  { title: "Tỉ Mỉ", desc: "Chú trọng từng chi tiết nhỏ nhất, từ màu sắc đến vật liệu, để tạo nên sự hoàn hảo." },
  { title: "Tin Cậy", desc: "Cam kết tiến độ và chất lượng, minh bạch trong từng bước thực hiện dự án." },
];

export default function AboutPage() {
  return (
    <>
      {/* Header hero */}
      <section className="relative h-[50vh] min-h-[360px] md:h-[60vh] overflow-hidden">
        <Image
          src="/img-kitchen.jpg"
          alt="HK-Decord — Dự án thiết kế nội thất"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <AnimatedSection>
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-3">
              Câu Chuyện Của Chúng Tôi
            </p>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-light text-white">
              Về HK-Decord
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <AnimatedSection direction="right">
            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden bg-warm-gray">
                <Image
                  src="/img-dining-1.jpg"
                  alt="Dự án biệt thự tân cổ điển HK-Decord"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-gold/15 -z-10" />
              <div className="absolute -top-5 -left-5 w-20 h-20 border border-gold/25" />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.15}>
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-4">Câu Chuyện</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal leading-tight mb-5">
              Hành Trình Từ Đam Mê<br />
              <em className="text-gold">Đến Nghệ Thuật</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-7" />
            <div className="space-y-4 font-sans text-sm text-charcoal/60 leading-loose">
              <p>
                HK-Decord được thành lập với niềm đam mê biến những không gian thông thường thành các tác phẩm nghệ thuật sống. Xuất phát từ tình yêu với kiến trúc và thiết kế nội thất, chúng tôi đã dần khẳng định vị thế tại TP.HCM.
              </p>
              <p>
                Chúng tôi hiểu rằng mỗi ngôi nhà kể một câu chuyện riêng. Sứ mệnh là lắng nghe câu chuyện đó và dệt nên không gian sống đẹp, thực dụng và đầy cảm xúc — từ bản vẽ đầu tiên đến khi bàn giao hoàn thiện.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-3">Giá Trị Cốt Lõi</p>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light text-charcoal">
              Triết Lý <em className="text-gold not-italic">Thiết Kế</em>
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mt-5" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.12}>
                <div className="text-center p-8 bg-white">
                  <div className="w-12 h-px bg-gold mx-auto mb-6" />
                  <h3 className="font-serif text-2xl text-charcoal mb-4">{v.title}</h3>
                  <p className="font-sans text-sm text-charcoal/55 leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Founder — solo */}
      <section className="py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-3">Con Người</p>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light text-charcoal">
              Người <em className="text-gold not-italic">Sáng Lập</em>
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mt-5" />
          </AnimatedSection>

          <AnimatedSection className="max-w-sm mx-auto text-center">
            <div className="aspect-[3/4] relative overflow-hidden mb-6 bg-warm-gray">
              <Image
                src="/Avatar.png"
                alt="Founder HK-Decord"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-serif text-2xl text-charcoal mb-2">HK-Decord</h3>
            <p className="font-sans text-[11px] tracking-[0.2em] text-gold uppercase">
              Founder &amp; Kiến Trúc Sư Trưởng
            </p>
            <div className="w-8 h-px bg-gold mx-auto my-4" />
            <p className="font-sans text-sm text-charcoal/55 leading-relaxed">
              Với đam mê kiến trúc và thiết kế nội thất, tôi luôn nỗ lực mang lại những không gian sống tinh tế, đúng với phong cách và nhu cầu của từng gia chủ.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery row — showcase real projects */}
      <section className="py-4 px-0">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
          {["/img-kitchen.jpg", "/img-dining-1.jpg", "/img-exterior.jpg", "/img-garden.jpg", "/img-office-1.jpg", "/img-dining-2.jpg"].map((src, i) => (
            <AnimatedSection key={i} delay={i * 0.06} className="aspect-square relative overflow-hidden bg-warm-gray">
              <Image src={src} alt={`Dự án HK-Decord ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 md:py-24 px-6 md:px-10 text-center">
        <AnimatedSection className="max-w-xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-6">
            Cùng Tạo Nên <em className="text-gold">Điều Tuyệt Vời</em>
          </h2>
          <p className="font-sans text-sm text-white/55 leading-relaxed mb-8">
            Hãy chia sẻ ý tưởng của bạn. Tư vấn miễn phí, không ràng buộc.
          </p>
          <Link
            href="/lien-he"
            className="inline-flex items-center gap-3 px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 font-sans text-[11px] tracking-[0.2em] uppercase"
          >
            Liên Hệ Ngay <ArrowRight size={14} />
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
