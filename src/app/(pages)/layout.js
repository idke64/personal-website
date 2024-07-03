import {
  Inter,
  Carme,
  IBM_Plex_Sans,
  DM_Sans,
  Poppins,
} from "next/font/google";
import "../globals.css";
import LoadingProvider from "@/contexts/LoadingContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/contexts/ThemeContext";

const font = DM_Sans({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="duration-200 dark">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={font.className}>
        <LoadingProvider>
          <ThemeProvider>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
