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
        
        {/* 终极原生暗黑模式守护脚本（放在 head 最顶层执行，拒绝白色闪烁） */}
        <Script id="theme-guard" strategy="beforeInteractive">
          {`
            (function() {
              var savedTheme = localStorage.getItem('theme');
              if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            })();
          `}
        </Script>

        {/* 🚀 专属广告代码（安全注入） */}
        <Script id="native-ads" strategy="afterInteractive">
          {`
            (function(s){
              s.dataset.zone='10755376';
              s.src='https://nap5k.com/tag.min.js';
            })([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')));
          `}
        </Script>

        {/* 📊 51.la 统计高级集成（智能回调，拒绝报错挂起） */}
        <Script
          id="LA_COLLECT"
          src="//sdk.51.la/js-sdk-pro.min.js"
          charSet="UTF-8"
          strategy="afterInteractive"
          onLoad={() => {
            if (typeof window !== 'undefined' && (window as any).LA) {
              (window as any).LA.init({ id: "3Oxjsmhr3Yr7aTlh", ck: "3Oxjsmhr3Yr7aTlh" });
            }
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
