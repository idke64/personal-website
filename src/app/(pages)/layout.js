import { Inter, Carme, IBM_Plex_Sans, DM_Sans } from "next/font/google";
import "../globals.css";
import LoadingProvider from "@/context/LoadingContext";
import Navbar from "@/components/Navbar";

const font = DM_Sans({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <LoadingProvider>
          <Navbar />
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
