import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dunaya Dulnetha — Luxury Hotel & Resort",
  description: "Experience unparalleled luxury at Dunaya Dulnetha. Where every stay becomes a timeless memory.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
