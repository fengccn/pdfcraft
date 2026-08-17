import type { Metadata } from 'next';
import '@/app/globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'PDFCraft - Professional PDF Tools',
  description: 'Free online PDF tools for merging, splitting, compressing, and converting PDF files. All processing happens in your browser for maximum privacy.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  }, 
};

// Root layout - provides the basic HTML structure
// The actual layout with i18n is in [locale]/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <style dangerouslySetInnerHTML={{ __html: 'html{scrollbar-gutter:stable}' }} />
        
        {/* 1. 终极原生暗黑模式守护 */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          })();
        `}} />

        {/* 2. 专属广告代码 */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(s){
            s.dataset.zone='10755376',s.src='https://nap5k.com/tag.min.js'
          })([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))
        `}} />

        {/* 3. Ustat 统计代码 */}
        <script async src="https://01a00ecb-df80-73a8-84a0-f08023e92b27.spst2.com/ustat.js"></script>
注意事

      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
