"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const schema = z.object({
  name: z.string().min(2, "Vui lòng nhập họ tên"),
  phone: z.string().min(9, "Số điện thoại không hợp lệ"),
  email: z.string().email("Email không hợp lệ"),
  service: z.string().min(1, "Vui lòng chọn dịch vụ"),
  message: z.string().min(10, "Vui lòng mô tả nhu cầu của bạn"),
});

type FormData = z.infer<typeof schema>;

const contactInfo = [
  { icon: MapPin, label: "Địa Chỉ", value: "123 Đường Lê Lợi, Quận 1\nTP. Hồ Chí Minh" },
  { icon: Phone, label: "Điện Thoại", value: "+84 90 123 4567" },
  { icon: Mail, label: "Email", value: "contact@hkdecord.vn" },
  { icon: Clock, label: "Giờ Làm Việc", value: "Thứ 2–6: 8:00–18:00\nThứ 7: 8:00–12:00" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Form data:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-cream">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-3">Kết Nối Với Chúng Tôi</p>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-light text-charcoal mb-4">Liên Hệ</h1>
            <div className="w-12 h-px bg-gold mx-auto" />
          </AnimatedSection>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
          {/* Contact info */}
          <AnimatedSection className="md:col-span-2" direction="right">
            <div className="space-y-8">
              <div>
                <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-3">Thông Tin</p>
                <h2 className="font-serif text-2xl md:text-3xl font-light text-charcoal leading-tight">
                  Chúng tôi luôn sẵn sàng<br />
                  <em className="text-gold">lắng nghe bạn</em>
                </h2>
              </div>

              <div className="w-10 h-px bg-gold" />

              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-gold flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold mb-1">{label}</p>
                      <p className="font-sans text-sm text-charcoal/70 whitespace-pre-line leading-relaxed">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-charcoal/40 mb-3">Mạng Xã Hội</p>
                <div className="flex gap-4">
                  {["Facebook", "Instagram", "Zalo"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="font-sans text-[10px] tracking-[0.15em] uppercase text-charcoal/50 hover:text-gold border-b border-charcoal/20 hover:border-gold pb-0.5 transition-colors duration-200"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection className="md:col-span-3" direction="left" delay={0.15}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 bg-cream h-full min-h-[400px]">
                <CheckCircle size={48} className="text-gold mb-5" />
                <h3 className="font-serif text-2xl text-charcoal mb-3">Cảm Ơn Bạn!</h3>
                <p className="font-sans text-sm text-charcoal/60 max-w-sm leading-relaxed mb-6">
                  Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi trong vòng 24 giờ làm việc.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="font-sans text-[11px] tracking-[0.2em] uppercase text-gold border-b border-gold pb-0.5 hover:text-gold-dark transition-colors"
                >
                  Gửi Thêm
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-charcoal/50 block mb-2">
                      Họ & Tên *
                    </label>
                    <input
                      {...register("name")}
                      placeholder="Nguyễn Văn A"
                      className="w-full border-b border-warm-gray bg-transparent py-3 font-sans text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold transition-colors"
                    />
                    {errors.name && (
                      <p className="font-sans text-[11px] text-red-500 mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-charcoal/50 block mb-2">
                      Số Điện Thoại *
                    </label>
                    <input
                      {...register("phone")}
                      placeholder="0901 234 567"
                      className="w-full border-b border-warm-gray bg-transparent py-3 font-sans text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold transition-colors"
                    />
                    {errors.phone && (
                      <p className="font-sans text-[11px] text-red-500 mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-charcoal/50 block mb-2">
                    Email *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="email@example.com"
                    className="w-full border-b border-warm-gray bg-transparent py-3 font-sans text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold transition-colors"
                  />
                  {errors.email && (
                    <p className="font-sans text-[11px] text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-charcoal/50 block mb-2">
                    Dịch Vụ Quan Tâm *
                  </label>
                  <select
                    {...register("service")}
                    className="w-full border-b border-warm-gray bg-transparent py-3 font-sans text-sm text-charcoal focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Chọn dịch vụ...</option>
                    <option value="noi-that">Thiết Kế Nội Thất</option>
                    <option value="ban-ve">Thiết Kế Bản Vẽ</option>
                    <option value="tu-van">Tư Vấn & Thi Công</option>
                    <option value="khac">Khác</option>
                  </select>
                  {errors.service && (
                    <p className="font-sans text-[11px] text-red-500 mt-1">{errors.service.message}</p>
                  )}
                </div>

                <div>
                  <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-charcoal/50 block mb-2">
                    Mô Tả Nhu Cầu *
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Mô tả ngắn về dự án, diện tích, ngân sách dự kiến..."
                    className="w-full border-b border-warm-gray bg-transparent py-3 font-sans text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="font-sans text-[11px] text-red-500 mt-1">{errors.message.message}</p>
                  )}
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-10 py-4 bg-gold text-white font-sans text-[11px] tracking-[0.2em] uppercase hover:bg-gold-dark transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Đang Gửi..." : "Gửi Tin Nhắn"}
                  </button>
                </div>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-64 md:h-80 bg-warm-gray relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={32} className="text-gold mx-auto mb-3" />
            <p className="font-sans text-sm text-charcoal/50">123 Đường Lê Lợi, Quận 1, TP.HCM</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold border-b border-gold pb-0.5 mt-3 inline-block hover:text-gold-dark transition-colors"
            >
              Xem Trên Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
