import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dịch Vụ",
  description: "HK-Decord cung cấp dịch vụ thiết kế nội thất, bản vẽ kiến trúc và tư vấn thi công chuyên nghiệp.",
};

const services = [
  {
    num: "01",
    title: "Thiết Kế Nội Thất",
    desc: "Chúng tôi tư vấn và thiết kế nội thất toàn diện cho mọi loại hình không gian: căn hộ, biệt thự, nhà phố, văn phòng. Mỗi dự án đều được cá nhân hóa theo phong cách và nhu cầu riêng của bạn.",
    items: [
      "Tư vấn phong cách và concept thiết kế",
      "Thiết kế 3D phối cảnh chi tiết",
      "Bản vẽ thi công nội thất đầy đủ",
      "Lựa chọn vật liệu và nội thất",
      "Giám sát thi công và hoàn thiện",
    ],
    img: "/img-kitchen.jpg",
  },
  {
    num: "02",
    title: "Thiết Kế Bản Vẽ Kiến Trúc",
    desc: "Lập hồ sơ thiết kế kiến trúc đầy đủ theo tiêu chuẩn xây dựng Việt Nam, đảm bảo tính thẩm mỹ và công năng sử dụng tối ưu cho công trình của bạn.",
    items: [
      "Thiết kế mặt bằng công năng",
      "Bản vẽ mặt đứng và mặt cắt",
      "Phối cảnh 3D kiến trúc",
      "Hồ sơ xin phép xây dựng",
      "Bản vẽ kết cấu và kỹ thuật",
    ],
    img: "/img-exterior.jpg",
  },
  {
    num: "03",
    title: "Tư Vấn & Thi Công",
    desc: "Đội ngũ chuyên gia của chúng tôi đồng hành cùng bạn trong suốt quá trình từ ý tưởng đến hoàn thiện, đảm bảo công trình đạt chất lượng cao nhất đúng tiến độ.",
    items: [
      "Tư vấn ngân sách và vật liệu",
      "Quản lý dự án thi công",
      "Giám sát chất lượng công trình",
      "Kết nối đội ngũ thi công uy tín",
      "Bàn giao và bảo hành công trình",
    ],
    img: "/img-garden.jpg",
  },
];

const process = [
  { step: "01", title: "Tư Vấn", desc: "Gặp gỡ, lắng nghe và hiểu rõ nhu cầu, sở thích cũng như ngân sách của bạn." },
  { step: "02", title: "Thiết Kế", desc: "Xây dựng concept, phác thảo ý tưởng và hoàn thiện bản thiết kế chi tiết." },
  { step: "03", title: "Triển Khai", desc: "Thi công và lắp đặt nội thất theo đúng bản thiết kế đã duyệt." },
  { step: "04", title: "Bàn Giao", desc: "Kiểm tra hoàn thiện, bàn giao công trình và hỗ trợ bảo hành sau thi công." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-cream">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-3">Những Gì Chúng Tôi Làm</p>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-light text-charcoal mb-4">Dịch Vụ</h1>
            <div className="w-12 h-px bg-gold mx-auto" />
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
          {services.map((svc, i) => (
            <AnimatedSection key={svc.num}>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="aspect-[4/3] relative overflow-hidden bg-warm-gray">
                    <Image src={svc.img} alt={svc.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-gold flex items-center justify-center">
                      <span className="font-sans text-[11px] text-white font-semibold">{svc.num}</span>
                    </div>
                  </div>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-3">Dịch Vụ {svc.num}</p>
                  <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal mb-4">{svc.title}</h2>
                  <div className="w-10 h-px bg-gold mb-6" />
                  <p className="font-sans text-sm text-charcoal/60 leading-loose mb-8">{svc.desc}</p>
                  <ul className="space-y-3">
                    {svc.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle size={15} className="text-gold flex-shrink-0 mt-0.5" />
                        <span className="font-sans text-sm text-charcoal/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-charcoal py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-3">Cách Chúng Tôi Làm Việc</p>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light text-white">Quy Trình</h2>
            <div className="w-12 h-px bg-gold mx-auto mt-5" />
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.1} className="text-center">
                <div className="w-14 h-14 border border-gold flex items-center justify-center mx-auto mb-5">
                  <span className="font-serif text-xl text-gold">{p.step}</span>
                </div>
                <h3 className="font-serif text-xl text-white mb-3">{p.title}</h3>
                <p className="font-sans text-xs text-white/45 leading-relaxed">{p.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 md:px-10 text-center">
        <AnimatedSection className="max-w-xl mx-auto">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-3">Sẵn Sàng Bắt Đầu?</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal mb-6">
            Hãy Nói Chuyện Về Dự Án Của Bạn
          </h2>
          <p className="font-sans text-sm text-charcoal/55 leading-relaxed mb-8">
            Tư vấn miễn phí, không ràng buộc. Chúng tôi sẵn sàng lắng nghe ý tưởng của bạn.
          </p>
          <Link
            href="/lien-he"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-white font-sans text-[11px] tracking-[0.2em] uppercase hover:bg-gold-dark transition-colors duration-300"
          >
            Liên Hệ Ngay <ArrowRight size={14} />
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
