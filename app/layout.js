// app/layout.js
import '../styles/global.css';
import { ThemeProvider } from 'next-themes';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

export const metadata = {
  title: {
    default: 'Jake Catron',
    template: '%s | Jake Catron'
  },
  description: "Jake Catron's personal development website.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png'
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <main className="flex-grow w-full">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
