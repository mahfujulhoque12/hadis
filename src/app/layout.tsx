import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/ui/components/sidebar/sidebar";
import Topbar from "@/ui/components/topbar/Topbar";
import { ReduxProvider } from "@/redux/ReduxProvider"; 
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // You can adjust weights as needed
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Dua & Rukayh",
  description: "The ultimate solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased bg-[#FBFFFB] font-sans`}
      >
        <ReduxProvider>
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Topbar />
            <main className="mt-[65px] ml-0 lg:ml-20">{children}</main>
          </div>
        </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
