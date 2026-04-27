import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-surface-warm to-background">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-light/10 rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-surface rounded-full px-4 py-2 shadow-sm mb-6">
              <Star size={16} className="text-amber-500 fill-amber-500" />
              <span className="text-sm font-medium text-text-muted">
                Dipercaya 10+ Tahun
              </span>
            </div>

            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-text leading-tight mb-4">
              Tidur Nyenyak,{" "}
              <span className="text-primary">Harga Bersahabat</span>
            </h1>

            <p className="text-text-muted text-lg md:text-xl leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Temukan kasur / matras, dan bantal berkualitas pilihan keluarga
              Indonesia. Tersedia berbagai ukuran dan merek terpercaya.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/katalog"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-text-on-primary font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                Lihat Katalog
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/6281234567890?text=Halo%20Amalia%20Collection!%20Saya%20ingin%20bertanya%20tentang%20produk."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#13ca56] text-text-on-primary font-semibold px-8 py-4 rounded-xl border border-border transition-all duration-300 cursor-pointer"
              >
                <WhatsAppIcon size={20} />
                Chat WhatsApp
              </a>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-border">
              <div>
                <p className="font-heading font-bold text-2xl text-primary">
                  10+
                </p>
                <p className="text-text-muted text-sm">Tahun Melayani</p>
              </div>
              <div>
                <p className="font-heading font-bold text-2xl text-primary">
                  100+
                </p>
                <p className="text-text-muted text-sm">Produk Tersedia</p>
              </div>
              <div>
                <p className="font-heading font-bold text-2xl text-primary">
                  1000+
                </p>
                <p className="text-text-muted text-sm">Pelanggan Puas</p>
              </div>
            </div>
          </div>

          {/* Hero image area */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/10 to-accent-light/20 rounded-3xl p-8 md:p-12 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-surface rounded-full flex items-center justify-center shadow-lg relative overflow-hidden">
                  <Image
                    src="/logo_webp.webp"
                    alt="Amalia Collection Logo"
                    fill
                    className="object-cover p-4"
                  />
                </div>
                <h2 className="font-heading font-bold text-2xl text-text mb-2">
                  Amalia Collection
                </h2>
                <p className="text-text-muted">Matras & Pillow Olshop</p>
              </div>
              {/* Floating cards */}
              <div
                className="absolute top-6 right-6 bg-surface rounded-xl px-4 py-3 shadow-md animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <p className="text-sm font-semibold text-primary">
                  🛏️ Kasur Inoac
                </p>
              </div>
              <div
                className="absolute bottom-6 left-6 bg-surface rounded-xl px-4 py-3 shadow-md animate-bounce"
                style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
              >
                <p className="text-sm font-semibold text-accent">🛋️ Sofa Bed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
