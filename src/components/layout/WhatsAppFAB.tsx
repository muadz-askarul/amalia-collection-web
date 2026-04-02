'use client';

import { usePathname } from 'next/navigation';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

export default function WhatsAppFAB() {
  const pathname = usePathname();

  // Sembunyikan tombol FAB di halaman katalog owner
  if (pathname?.startsWith('/katalog-owner')) {
    return null;
  }

  const whatsappNumber = '6281234567890';
  const message = encodeURIComponent(
    'Halo Amalia Collection! Saya ingin bertanya tentang produk Anda.'
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
      aria-label="Chat via WhatsApp"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}
