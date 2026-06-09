"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import ProjectCard from "@/components/portfolio/ProjectCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { getFeaturedProjects } from "@/lib/projects";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 80));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const featured = getFeaturedProjects();

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
        <Image
          src="/projects/biet-thu-tan-co-dien/kitchen.jpg"
          alt="HK-Decord — Thiết kế nội thất cao cấp"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/65 via-charcoal/45 to-charcoal/70" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="font-sans text-[10px] text-white/70 tracking-[0.4em] uppercase mb-6"
          >
            Chào Mừng Đến Với
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif text-[clamp(3.5rem,10vw,7rem)] font-light text-white leading-none tracking-wide mb-6"
          >
            HK-Decord
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="font-sans text-sm text-white/70 tracking-[0.12em] mb-12 max-w-md mx-auto"
          >
            Thiết kế không gian sống tinh tế — nơi nghệ thuật và kiến trúc giao thoa
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/du-an"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-white font-sans text-[11px] tracking-[0.2em] uppercase hover:bg-gold-dark transition-colors duration-300"
            >
              Xem Dự Án <ArrowRight size={14} />
            </Link>
            <Link
              href="/lien-he"
              className="inline-flex items-center px-8 py-4 border border-white/60 text-white font-sans text-[11px] tracking-[0.2em] uppercase hover:bg-white hover:text-charcoal transition-all duration-300"
            >
              Tư Vấn Miễn Phí
            </Link>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-sans text-[9px] text-white/45 tracking-[0.35em] uppercase">Khám Phá</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ChevronDown size={16} className="text-white/45" />
          </motion.div>
        </motion.button>
      </section>

      {/* ═══ FEATURED PROJECTS ═══ */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-3">Portfolio</p>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light text-charcoal">
              Dự Án <em className="text-gold not-italic">Nổi Bật</em>
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mt-5" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {featured.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.12}>
                <ProjectCard project={project} priority={i === 0} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-14">
            <Link
              href="/du-an"
              className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.25em] uppercase text-charcoal border-b border-charcoal/40 pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Xem Tất Cả Dự Án <ArrowRight size={13} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <AnimatedSection direction="right">
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="/Avatar.png"
                  alt="Founder HK-Decord"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-gold/15 -z-10" />
              <div className="absolute -top-5 -left-5 w-20 h-20 border border-gold/25" />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.15}>
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-4">Về Chúng Tôi</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-charcoal leading-tight mb-5">
              Thiết kế tinh tế,<br />
              <em className="text-gold">không gian hoàn hảo</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-7" />
            <p className="font-sans text-sm text-charcoal/60 leading-loose mb-4">
              HK-Decord được thành lập với niềm đam mê biến mỗi không gian thành một tác phẩm nghệ thuật sống. Chúng tôi tin rằng một ngôi nhà đẹp không chỉ về thẩm mỹ — đó là nơi kể câu chuyện của bạn.
            </p>
            <p className="font-sans text-sm text-charcoal/60 leading-loose mb-10">
              Với đội ngũ kiến trúc sư và nhà thiết kế nội thất giàu kinh nghiệm, chúng tôi đồng hành từ bản vẽ đầu tiên đến khi bàn giao công trình hoàn thiện.
            </p>
            <Link
              href="/ve-chung-toi"
              className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.25em] uppercase text-charcoal border-b border-charcoal/40 pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Tìm Hiểu Thêm <ArrowRight size={13} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 150, suffix: "+", label: "Dự Án Hoàn Thành" },
              { value: 8, suffix: "+", label: "Năm Kinh Nghiệm" },
              { value: 98, suffix: "%", label: "Khách Hàng Hài Lòng" },
              { value: 25, suffix: "+", label: "Giải Thưởng" },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <p className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-light text-gold mb-2">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/45">
                  {stat.label}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-3">Những Gì Chúng Tôi Làm</p>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light text-charcoal">
              Dịch <em className="text-gold not-italic">Vụ</em>
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mt-5" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Thiết Kế Nội Thất",
                desc: "Tư vấn và thiết kế nội thất toàn diện cho căn hộ, biệt thự, nhà phố. Từ concept đến hoàn thiện thi công với vật liệu cao cấp.",
                img: "/projects/biet-thu-tan-co-dien/kitchen.jpg",
              },
              {
                num: "02",
                title: "Thiết Kế Bản Vẽ",
                desc: "Lập hồ sơ thiết kế kiến trúc đầy đủ: mặt bằng, mặt đứng, mặt cắt, phối cảnh 3D và bản vẽ thi công chi tiết.",
                img: "/projects/nha-pho-hien-dai-4-tang/exterior.jpg",
              },
              {
                num: "03",
                title: "Tư Vấn & Thi Công",
                desc: "Tư vấn chọn lựa vật liệu, giám sát thi công và quản lý dự án đảm bảo tiến độ, chất lượng theo đúng thiết kế.",
                img: "/projects/san-vuon-co-dien-chau-au/garden.jpg",
              },
            ].map((svc, i) => (
              <AnimatedSection key={svc.num} delay={i * 0.12}>
                <div className="group cursor-default">
                  <div className="aspect-[4/3] relative overflow-hidden mb-6 bg-warm-gray">
                    <Image
                      src={svc.img}
                      alt={svc.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 w-9 h-9 bg-gold flex items-center justify-center">
                      <span className="font-sans text-[10px] text-white font-semibold">{svc.num}</span>
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal mb-3 group-hover:text-gold transition-colors duration-300">
                    {svc.title}
                  </h3>
                  <p className="font-sans text-sm text-charcoal/55 leading-relaxed">{svc.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-14">
            <Link
              href="/dich-vu"
              className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.25em] uppercase text-charcoal border-b border-charcoal/40 pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Xem Chi Tiết Dịch Vụ <ArrowRight size={13} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ QUY TRÌNH ═══ */}
      <section className="bg-cream py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-3">Quy Trình Làm Việc</p>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light text-charcoal">
              4 Bước <em className="text-gold not-italic">Đến Ngôi Nhà Mơ Ước</em>
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mt-5" />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-warm-gray">
            {[
              { num: "01", title: "Tư Vấn", body: "Lắng nghe nhu cầu, khảo sát mặt bằng, xác định phong cách và ngân sách phù hợp." },
              { num: "02", title: "Thiết Kế", body: "Lên bản vẽ concept, phối cảnh 3D, điều chỉnh đến khi gia chủ hoàn toàn hài lòng." },
              { num: "03", title: "Triển Khai", body: "Giám sát thi công chặt chẽ, kiểm soát vật liệu và tiến độ từng hạng mục." },
              { num: "04", title: "Bàn Giao", body: "Nghiệm thu hoàn thiện, hỗ trợ bảo hành và tư vấn sau bàn giao." },
            ].map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.12}>
                <div className="bg-cream p-8 md:p-10">
                  <span className="font-serif text-5xl text-gold/25 block mb-4 leading-none">{step.num}</span>
                  <h3 className="font-serif text-xl text-charcoal mb-3">{step.title}</h3>
                  <p className="font-sans text-sm text-charcoal/55 leading-relaxed">{step.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              href="/dich-vu"
              className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.25em] uppercase text-charcoal border-b border-charcoal/40 pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Tìm Hiểu Thêm Về Dịch Vụ <ArrowRight size={13} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ TRIẾT LÝ THIẾT KẾ ═══ */}
      <section className="bg-charcoal py-28 md:py-40 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-3">Quan Điểm Của Chúng Tôi</p>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light text-white">
              Triết Lý <em className="text-gold not-italic">Thiết Kế</em>
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mt-5" />
          </AnimatedSection>

          {/* Editorial pull-quote */}
          <AnimatedSection className="text-center mb-20">
            <span className="font-serif text-7xl md:text-9xl text-gold/15 leading-none select-none block mb-4">&ldquo;</span>
            <p className="font-serif text-[clamp(1.25rem,3.5vw,2rem)] font-light text-white/90 leading-relaxed italic max-w-3xl mx-auto -mt-8">
              Mỗi không gian đều mang một linh hồn riêng — chúng tôi lắng nghe, thấu hiểu, rồi chuyển hóa thành ngôn ngữ của ánh sáng, vật liệu và tỉ lệ.
            </p>
          </AnimatedSection>

          {/* 3 design philosophy pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {[
              {
                number: "01",
                title: "Lắng Nghe Trước",
                body: "Thiết kế tốt bắt đầu từ việc hiểu người sống trong đó — lối sống, thói quen, và điều họ coi trọng nhất.",
              },
              {
                number: "02",
                title: "Tỉ Lệ & Vật Liệu",
                body: "Chúng tôi chọn vật liệu bằng tay, kiểm soát từng tỉ lệ — vì cái đẹp bền vững đến từ sự chính xác.",
              },
              {
                number: "03",
                title: "Công Năng Là Nền Tảng",
                body: "Không gian đẹp nhưng không tiện nghi là thất bại. Thẩm mỹ phải phục vụ cuộc sống, không phải ngược lại.",
              },
            ].map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div className="bg-charcoal p-8 md:p-10">
                  <span className="font-serif text-4xl text-gold/30 block mb-5">{p.number}</span>
                  <h3 className="font-serif text-lg font-light text-white mb-3">{p.title}</h3>
                  <p className="font-sans text-sm text-white/50 leading-relaxed">{p.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <Image
          src="/projects/biet-thu-tan-co-dien/dining.jpg"
          alt="Bắt đầu dự án nội thất HK-Decord"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/72" />
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <AnimatedSection>
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-4">Bắt Đầu Ngay Hôm Nay</p>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.75rem)] font-light text-white leading-tight mb-6">
              Hãy Cùng Tạo Nên
              <br />
              <em className="text-gold">Không Gian Của Bạn</em>
            </h2>
            <p className="font-sans text-sm text-white/60 mb-10 leading-relaxed">
              Liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá chi tiết.
            </p>
            <Link
              href="/lien-he"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-white font-sans text-[11px] tracking-[0.2em] uppercase hover:bg-gold-dark transition-colors duration-300"
            >
              Liên Hệ Tư Vấn <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
