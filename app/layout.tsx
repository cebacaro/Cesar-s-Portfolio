import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Cesar's Portfolio",
  description: "Created By Cesar to Display his Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-fira-mono font-extrabold">
        {children}
      </body>
    </html>
  );
}
