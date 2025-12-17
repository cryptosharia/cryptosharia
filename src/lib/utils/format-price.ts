export default function formatCryptoPrice(price: number): string {
  let minimumFractionDigits = 0;
  let maximumFractionDigits = 0;

  if (price < 0.01) {
    // Kalau harga < $0.0001, kasih banyak desimal (max 8 supaya gak kepanjangan)
    minimumFractionDigits = 2;
    maximumFractionDigits = 8;
  } else if (price < 0.1) {
    // Kalau harga < $0.01, kasih banyak desimal (max 6 supaya gak kepanjangan)
    minimumFractionDigits = 2;
    maximumFractionDigits = 6;
  } else if (price < 1) {
    // Kalau harga < $1, kasih banyak desimal (max 4 supaya gak kepanjangan)
    minimumFractionDigits = 2;
    maximumFractionDigits = 4;
  } else if (price < 1000) {
    // Kalau $1 - $1000, kasih 2 desimal
    minimumFractionDigits = 2;
    maximumFractionDigits = 2;
  } else {
    // Kalau > $1000, tampilkan tanpa desimal
    minimumFractionDigits = 0;
    maximumFractionDigits = 0;
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits,
    maximumFractionDigits
  }).format(price);
}
