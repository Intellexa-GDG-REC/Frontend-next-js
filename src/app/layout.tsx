import { AuthProvider } from "@/components/AuthProvider";
import "./globals.scss";
import SmoothScroller from "@/components/Lenis";
import Header from "@/components/Header"



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased font-clash bg-[#0a0a0a] flex justify-center overflow-x-hidden`}>
        <AuthProvider>
          <SmoothScroller />
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
