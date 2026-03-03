import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Смотрицька Перлина - Еко-готель у Кам\'янці-Подільському',
  description:
    'Затишний еко-готель на 17 номерів за 2 хвилини від Старої фортеці. Ресторан з домашньою кухнею, мальовничий каньйон та відпочинок у серці історичного Кам\'янця-Подільського.',
  keywords: [
    'Смотрицька Перлина',
    'готель Кам\'янець-Подільський',
    'еко-готель',
    'міні-готель Кам\'янець',
    'відпочинок Кам\'янець-Подільський',
    'готель біля фортеці',
    'Смотрицький каньйон',
    'де зупинитися Кам\'янець',
    'номери Кам\'янець-Подільський',
    'садиба Кам\'янець',
  ],
  authors: [{ name: 'IT Kamianets' }],
  creator: 'IT Kamianets',
  openGraph: {
    type: 'website',
    url: 'https://smotrytska-perlyna.itkamianets.com/',
    title: 'Смотрицька Перлина - Еко-готель у Кам\'янці-Подільському',
    description:
      'Затишний еко-готель у серці Кам\'янця-Подільського. 17 номерів, домашня кухня, 2 хвилини до Старої фортеці та Смотрицького каньйону.',
    images: [
      {
        url: 'https://smotrytska-perlyna.itkamianets.com/logo/logo.png', // ЗМІНЕНО: на logo.png
        width: 512, // ЗМІНЕНО: квадратний розмір
        height: 512, // ЗМІНЕНО: квадратний розмір
        alt: 'Еко-готель Смотрицька Перлина',
      },
    ],
    siteName: 'Смотрицька Перлина',
    locale: 'uk_UA',
  },
  twitter: {
    card: 'summary', // ЗМІНЕНО: з summary_large_image на summary (це дає маленьке фото справа)
    title: 'Смотрицька Перлина - Еко-готель у Кам\'янці-Подільському',
    description:
      'Еко-готель на 17 номерів за 2 хвилини від Старої фортеці. Домашня кухня та відпочинок у Кам\'янці-Подільському.',
    images: ['https://smotrytska-perlyna.itkamianets.com/logo/logo.png'], // ЗМІНЕНО: на logo.png
  },
  icons: {
    icon: '/logo/fvicon.ico',
  },
  metadataBase: new URL('https://smotrytska-perlyna.itkamianets.com'),
}

export const viewport: Viewport = {
  themeColor: '#2c2418',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
