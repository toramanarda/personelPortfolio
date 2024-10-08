import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/app/nav/page"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Arda Toraman",
  description: "Generated by Arda Toraman",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="container">
          <Nav />

          {children}</div>
      </body>
    </html>
  );
}
