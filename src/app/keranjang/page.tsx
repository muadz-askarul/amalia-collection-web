import { Metadata } from 'next';
import KeranjangClient from './KeranjangClient';

export const metadata: Metadata = {
  title: 'Keranjang Belanja',
  description: 'Selesaikan pesanan Anda di Amalia Collection. Kirim daftar belanjaan Anda langsung ke WhatsApp kami untuk proses pemesanan cepat.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function KeranjangPage() {
  return <KeranjangClient />;
}
