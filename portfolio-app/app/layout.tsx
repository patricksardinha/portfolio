import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter, Kalam, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const kalam = Kalam({
  weight: ["400", "300", "700"],
  subsets: ["latin"],
});

//
export const metadata: Metadata = {
  title: "Patrick Sardinha",
  description: "Patrick Sardinha's Portfolio",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={kalam.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
