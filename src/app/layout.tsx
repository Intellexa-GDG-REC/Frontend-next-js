import { AuthProvider } from "@/components/AuthProvider";
import "./globals.scss";
import SmoothScroller from "@/components/Lenis";
import Header from "@/components/Header"
import { Suspense } from "react";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.ico" sizes="any" />
      <body
        className={`antialiased font-clash bg-[#0a0a0a] flex justify-center overflow-x-hidden`}>
        <AuthProvider>
          <Suspense>
            <SmoothScroller />
          </Suspense>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
