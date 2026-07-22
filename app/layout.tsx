import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Navigation } from '@/components/navigation'
import { profile } from '@/lib/profile'
import './globals.css'

export const metadata: Metadata = {
  title: profile.seo.title,
  description: profile.seo.description,
  metadataBase: new URL('https://maskidportfolio.vercel.app'),
  openGraph: {
    title: profile.seo.title,
    description: profile.seo.description,
    url: '/',
    siteName: 'Maskid Portfolio',
    images: [
      {
        url: '/maskid-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Maskid personal brand portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: profile.seo.title,
    description: profile.seo.description,
    creator: profile.xHandle,
    images: ['/maskid-banner.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/maskid-pfp.jpg',
        type: 'image/jpeg',
      },
    ],
    shortcut: '/maskid-pfp.jpg',
    apple: '/maskid-pfp.jpg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0d0d0d' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased bg-background">
        <Navigation />
        <main className="pt-16 [--nav-height:4rem]">
          {children}
        </main>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
