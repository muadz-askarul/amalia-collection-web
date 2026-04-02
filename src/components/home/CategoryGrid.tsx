import Link from 'next/link';
import { Layers, BedDouble, Sofa, Shield, Scissors, Grip } from 'lucide-react';

const categories = [
  {
    slug: 'karpet-alas',
    name: 'Karpet & Alas',
    description: 'Karpet spon motif, bolak-balik, dan alas seterika',
    icon: Grip,
    color: 'bg-amber-50 text-amber-600',
  },
  {
    slug: 'kasur-palembang',
    name: 'Kasur Palembang',
    description: 'Kasur lipat tradisional berbagai ukuran',
    icon: Layers,
    color: 'bg-green-50 text-green-600',
  },
  {
    slug: 'kasur-busa',
    name: 'Kasur Busa',
    description: 'Kasur busa lipat 2, 3, 4 dan matras Grandz',
    icon: BedDouble,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    slug: 'kasur-inoac',
    name: 'Kasur Inoac D23',
    description: 'Matras dan lipat 4 berbagai ukuran & ketebalan',
    icon: Shield,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    slug: 'sofa-bed',
    name: 'Sofa Bed Inoac',
    description: 'Sofa bed multifungsi untuk ruang serbaguna',
    icon: Sofa,
    color: 'bg-rose-50 text-rose-600',
  },
  {
    slug: 'cover-sarung',
    name: 'Cover & Sarung',
    description: 'Sarung matras, cover lipat 4, dan cover sofa bed',
    icon: Scissors,
    color: 'bg-teal-50 text-teal-600',
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">
            Kategori Produk
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Pilihan lengkap untuk kebutuhan tidur dan kenyamanan keluarga Anda
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.slug}
                href={`/katalog?kategori=${cat.slug}`}
                className="group bg-background hover:bg-surface-warm border border-border rounded-2xl p-5 md:p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer"
              >
                <div
                  className={`w-12 h-12 ${cat.color} rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon size={24} />
                </div>
                <h3 className="font-heading font-semibold text-text text-base md:text-lg mb-1">
                  {cat.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed hidden sm:block">
                  {cat.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
