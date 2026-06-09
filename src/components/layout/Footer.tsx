import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const footerNav = [
  { href: "/du-an", label: "Dự Án" },
  { href: "/dich-vu", label: "Dịch Vụ" },
  { href: "/ve-chung-toi", label: "Về Chúng Tôi" },
  { href: "/lien-he", label: "Liên Hệ" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex flex-col leading-none mb-6">
              <span className="font-serif text-4xl font-bold tracking-[0.15em] text-white">
                HK
              </span>
              <span className="font-sans text-[9px] tracking-[0.5em] uppercase font-light -mt-1 text-gold">
                DECORD
              </span>
            </div>
            <p className="font-sans text-sm text-white/70 leading-relaxed max-w-xs">
              Mỗi không gian chúng tôi tạo ra là sự giao thoa giữa thẩm mỹ, công năng và cảm xúc — thiết kế với tâm huyết, bàn giao với trách nhiệm.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-6">
            <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-6">
              Điều Hướng
            </h3>
            <ul className="space-y-3.5">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/70 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 md:col-start-9">
            <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-6">
              Liên Hệ
            </h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <p className="font-sans text-sm text-white/70 leading-relaxed">
                  6/8 Phạm Văn Chiêu, Thông Tây Hội
                  <br />
                  TP. Hồ Chí Minh, Việt Nam
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-gold flex-shrink-0" />
                <a
                  href="tel:+84901234567"
                  className="font-sans text-sm text-white/70 hover:text-gold transition-colors"
                >
                  +84 90 123 4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-gold flex-shrink-0" />
                <a
                  href="mailto:contact@hkdecord.vn"
                  className="font-sans text-sm text-white/70 hover:text-gold transition-colors"
                >
                  contact@hkdecord.vn
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] text-white/40 tracking-widest">
            © {new Date().getFullYear()} HK-DECORD. Bảo lưu mọi quyền.
          </p>
          <div className="flex items-center gap-8">
            {["Facebook", "Instagram", "Zalo"].map((social) => (
              <a
                key={social}
                href="#"
                aria-label={social}
                className="font-sans text-[10px] text-white/40 hover:text-gold transition-colors duration-300 tracking-[0.2em] uppercase"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
