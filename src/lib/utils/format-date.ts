const months = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember'
];

export default function formatDate(date: Date, monthType: 'text' | 'number' = 'text'): string {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();

  if (monthType === 'text') return `${day} ${months[+month - 1]} ${year}`;
  else return `${day}-${month}-${year}`;
}
