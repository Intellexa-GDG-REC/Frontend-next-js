import { AuthProvider } from "@/components/AuthProvider";
import "./globals.scss";
import SmoothScroller from "@/components/Lenis";
import Header from "@/components/Header"
import { Suspense } from "react";
import CustomPointer from "@/components/CustomPointer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.ico" sizes="any" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`antialiased font-clash bg-[#0a0a0a] flex justify-center overflow-x-hidden`}>
        {/* <CustomPointer   /> */}
       
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
