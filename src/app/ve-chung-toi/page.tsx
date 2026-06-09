import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Về Chúng Tôi",
  description: "Tìm hiểu về HK-Decord — đội ngũ kiến trúc sư và nhà thiết kế nội thất với hơn 8 năm kinh nghiệm.",
};

const team = [
  {
    name: "Nguyễn Hoàng Khải",
    role: "Founder & Kiến Trúc Sư Trưởng",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop&face",
  },
  {
    name: "Trần Minh Châu",
    role: "Nhà Thiết Kế Nội Thất",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&auto=format&fit=crop&face",
  },
  {
    name: "Lê Thị Hương",
    role: "Chuyên Viên Thiết Kế 3D",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop&face",
  },
];

const values = [
  { title: "Sáng Tạo", desc: "Mỗi công trình là một tác phẩm độc đáo, phản ánh cá tính và câu chuyện riêng của gia chủ." },
  { title: "Tỉ Mỉ", desc: "Chúng tôi chú trọng từng chi tiết nhỏ nhất, từ màu sắc đến vật liệu, để tạo nên sự hoàn hảo." },
  { title: "Tin Cậy", desc: "Cam kết tiến độ và chất lượng, minh bạch trong từng bước thực hiện dự án." },
];

export default function AboutPage() {
  return (
    <>
      {/* Header with hero image */}
      <section className="relative pt-0">
        <div className="relative h-[50vh] min-h-[360px] md:h-[60vh] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=85&auto=format&fit=crop"
            alt="Đội ngũ HK-Decord"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-charcoal/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
            <AnimatedSection>
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-3">Câu Chuyện Của Chúng Tôi</p>
              <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-light text-white">Về HK-Decord</h1>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <AnimatedSection direction="right">
            <div className="aspect-[4/5] relative overflow-hidden bg-warm-gray">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80&auto=format&fit=crop"
                alt="HK-Decord interior project"
                fill
                className="object-cover"
              />
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
                HK-Decord được thành lập năm 2016 với niềm đam mê biến những không gian thông thường thành các tác phẩm nghệ thuật sống. Xuất phát từ một studio nhỏ tại TP.HCM, chúng tôi đã dần khẳng định vị thế trong lĩnh vực thiết kế nội thất và kiến trúc.
              </p>
              <p>
                Với hơn 150 dự án đã hoàn thiện, chúng tôi hiểu rằng mỗi ngôi nhà kể một câu chuyện riêng. Sứ mệnh của chúng tôi là lắng nghe câu chuyện đó và dệt nó thành không gian sống đẹp, thực dụng và đầy cảm xúc.
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

      {/* Team */}
      <section className="py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-3">Con Người</p>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light text-charcoal">
              Đội <em className="text-gold not-italic">Ngũ</em>
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mt-5" />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.12} className="text-center">
                <div className="aspect-[3/4] relative overflow-hidden mb-5 bg-warm-gray">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-1">{member.name}</h3>
                <p className="font-sans text-[11px] tracking-wide text-gold">{member.role}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 md:py-24 px-6 md:px-10 text-center">
        <AnimatedSection className="max-w-xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-6">
            Cùng Tạo Nên <em className="text-gold">Điều Tuyệt Vời</em>
          </h2>
          <p className="font-sans text-sm text-white/55 leading-relaxed mb-8">
            Hãy chia sẻ ý tưởng của bạn với chúng tôi. Tư vấn miễn phí, không ràng buộc.
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
