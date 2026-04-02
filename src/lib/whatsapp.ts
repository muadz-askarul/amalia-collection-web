

export interface CartItem {
  productSlug: string;
  productName: string;
  variantLabel: string;
  size: string;
  thickness?: string;
  price: number;
  quantity: number;
  image?: string;
}



export function generateWhatsAppMessageSingle(
  item: CartItem,
  whatsappNumber: string
): string {
const message = `Halo Amalia Collection! 👋
Saya tertarik dengan produk berikut:

📦 *${item.productName}*
📏 Ukuran: ${item.variantLabel}
🔢 Jumlah: ${item.quantity}

Cek Harga & Ketersediaan. Terima kasih! 🙏`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function generateWhatsAppMessageCart(
  items: CartItem[],
  whatsappNumber: string
): string {
  const itemLines = items
    .map(
      (item, i) =>
        `${i + 1}. *${item.productName}* - ${item.variantLabel} x${item.quantity}`
    )
    .join('\n');

  const message = `Halo Amalia Collection! 👋
Saya ingin mengecek ketersediaan produk berikut:

${itemLines}

Mohon informasi harga dan pengiriman. Terima kasih! 🙏`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
