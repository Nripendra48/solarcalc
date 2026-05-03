import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Script from 'next/script';
import AdsenseScript from "../components/AdsenseScript";

export const metadata = {
  title: 'Solar Calculator',
  description: 'Calculate solar generation and battery backup easily',
  icons: {
    icon: "/icon3.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="light">
      <body>
        {children}
        <AdsenseScript />
        {/* Bootstrap JS (needed for components like dropdowns) */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        
      </body>
    </html>
  );
}