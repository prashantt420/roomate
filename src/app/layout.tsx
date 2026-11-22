import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ROOMATE — Find your people. Find your place.",
  description:
    "Find compatible roommates, build your group, and discover a place to call home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}