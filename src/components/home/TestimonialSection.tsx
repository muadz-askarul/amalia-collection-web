import { Star, ExternalLink } from 'lucide-react';

export default function TestimonialSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Testimoni Pelanggan
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Ulasan langsung dari pelanggan kami di Google Maps
          </p>
        </div>

        {/* Google Maps Reviews Embed */}
        <div className="max-w-4xl mx-auto">
          {/* Review summary card */}
          <div className="bg-surface rounded-2xl border border-border p-8 md:p-10 text-center shadow-sm">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={28}
                  className="text-amber-500 fill-amber-500"
                />
              ))}
            </div>
            <p className="text-text-muted text-lg mb-6">
              Lihat ulasan lengkap dari pelanggan kami di Google Maps
            </p>
            <a
              href="https://www.google.com/maps/place/Amalia+Collection+Tambun+(+Toko+Kasur+%26+Bantal+)/@-6.2425035,107.0710142,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-text-on-primary font-semibold px-6 py-3 rounded-xl transition-colors duration-200 cursor-pointer"
            >
              <ExternalLink size={18} />
              Baca Ulasan di Google Maps
            </a>
          </div>

          {/* Sample reviews */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                name: 'Pelanggan Setia',
                text: 'Kasurnya sangat nyaman dan harganya bersahabat. Sudah langganan bertahun-tahun!',
                rating: 5,
              },
              {
                name: 'Ibu Rumah Tangga',
                text: 'Pelayanan ramah, pengiriman cepat. Kasur Inoac-nya berkualitas bagus.',
                rating: 5,
              },
              {
                name: 'Warga Tambun',
                text: 'Toko kasur terpercaya di Tambun. Banyak pilihan ukuran dan harga.',
                rating: 5,
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-surface rounded-2xl border border-border p-6 shadow-sm"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      className={`${star <= review.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="text-text font-semibold text-sm">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
