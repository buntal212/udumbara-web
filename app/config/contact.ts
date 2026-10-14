const whatsappMessage = 'Halo Udumbara Informatika, saya ingin berkonsultasi mengenai kebutuhan aplikasi / website.'
const whatsappNumber = '6282334148314'

export const contact = {
  whatsappDisplay: '0823-3414-8314',
  whatsappNumber,
  email: 'ariezlnd69@gmail.com',
  website: 'udumbara.my.id',
  websiteUrl: 'https://udumbara.my.id',
  address: 'Perum Bengawan Indah Blok A1 Kota Probolinggo',
  whatsappMessage,
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
} as const
