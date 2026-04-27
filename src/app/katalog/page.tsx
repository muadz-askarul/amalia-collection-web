import { Metadata } from 'next';
import KatalogClient from './KatalogClient';

export const metadata: Metadata = {
  title: 'Katalog Produk Kasur & Bantal',
  description:
    'Lihat koleksi lengkap kasur busa, kasur inoac, sofa bed, bantal, dan perlengkapan tidur lainnya di Amalia Collection. Harga terbaik dan kualitas terjamin.',
  openGraph: {
    title: 'Katalog Produk Kasur & Bantal | Amalia Collection',
    description:
      'Koleksi lengkap kasur dan perlengkapan tidur berkualitas di Tambun, Bekasi. Temukan produk yang tepat untuk kenyamanan tidur Anda.',
  },
};

export default function KatalogPage() {
  return <KatalogClient />;
}
