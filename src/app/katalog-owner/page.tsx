import { Metadata } from 'next';
import OwnerCatalogClient from './OwnerCatalogClient';

export const metadata: Metadata = {
  title: 'Katalog Owner - Amalia Collection',
  robots: {
    index: false,
    follow: false,
  },
};

export default function KatalogOwnerPage() {
  return <OwnerCatalogClient />;
}
