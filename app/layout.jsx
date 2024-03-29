import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  weight: ["300", "400", "500"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Primer Proyecto",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main className="container mx-auto h-[calc(100vh-7rem)] flex justify-center items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
