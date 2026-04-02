import type { Metadata } from 'next';
import { Rubik, Nunito_Sans } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/components/cart/CartProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFAB from '@/components/layout/WhatsAppFAB';

const rubik = Rubik({
    variable: '--font-heading',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

const nunitoSans = Nunito_Sans({
    variable: '--font-body',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Amalia Collection — Toko Kasur & Bantal Terpercaya di Tambun',
    description:
        'Toko kasur / matras, bantal, dan guling berkualitas di Tambun Selatan, Bekasi. Harga bersaing dengan pelayanan terpercaya selama lebih dari 10 tahun. Pesan langsung via WhatsApp!',
    keywords: [
        'toko kasur',
        'matras',
        'bantal',
        'Tambun Selatan',
        'Bekasi',
        'kasur murah',
        'kasur inoac',
        'sofa bed',
        'kasur busa',
    ],
    openGraph: {
        title: 'Amalia Collection — Toko Kasur & Bantal Terpercaya di Tambun',
        description:
            'Toko kasur / matras, bantal, dan guling berkualitas dengan harga bersaing. Melayani pelanggan 10+ tahun di Tambun Selatan, Bekasi.',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id" className={`${rubik.variable} ${nunitoSans.variable}`}>
            <body className="min-h-screen flex flex-col antialiased">
                <CartProvider>
                    <Navbar />
                    <main className="flex-1 pt-16 md:pt-20">{children}</main>
                    <Footer />
                    <WhatsAppFAB />
                </CartProvider>
            </body>
        </html>
    );
}
