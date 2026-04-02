import { MapPin, Navigation } from 'lucide-react';

export default function MapSection() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Lokasi Toko
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">
            Kunjungi Kami
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Datang langsung ke toko kami untuk melihat dan mencoba produk secara langsung
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-md border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.160986725909!2d107.07101417640975!3d-6.242503493745817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698f0c4c4eed5d%3A0x5ec7c7b55204ef50!2sAmalia%20Collection%20Tambun%20(%20Toko%20Kasur%20%26%20Bantal%20)!5e0!3m2!1sen!2sid!4v1775048352670!5m2!1sen!2sid"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Amalia Collection"
              className="w-full"
            />
          </div>

          {/* Store info */}
          <div className="bg-background rounded-2xl p-6 md:p-8 border border-border">
            <h3 className="font-heading font-semibold text-text text-xl mb-6">
              Informasi Toko
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-text text-sm">Alamat</p>
                  <p className="text-text-muted text-sm mt-1">
                    Tambun Selatan, Bekasi, Jawa Barat
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Navigation size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-text text-sm">Area Pengiriman</p>
                  <p className="text-text-muted text-sm mt-1">
                    Tambun, Bekasi, dan sekitarnya
                  </p>
                </div>
              </div>

              <hr className="border-border" />

              <div>
                <p className="font-medium text-text text-sm mb-2">Jam Operasional</p>
                <p className="text-text-muted text-sm">
                  Senin - Minggu: 08.00 - 21.00 WIB
                </p>
              </div>

              <a
                href="https://www.google.com/maps/place/Amalia+Collection+Tambun"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary hover:bg-primary-dark text-text-on-primary font-semibold text-center py-3 rounded-xl transition-colors duration-200 mt-4 cursor-pointer"
              >
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
