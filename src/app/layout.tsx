import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapClient from '@/components/bootstrapClient/BootstrapClient.js';
import Navigation from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import styles from './layout.module.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <div className={styles.spacer}>&nbsp;</div>
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Vue Du Vallon Handyman",
  description: "Enhance your home with personalized handyman expertise. From gardening and repairs to renovations, one-man dedication ensures tailored solutions for your unique needs. Contact for attentive service from a local professional.",
};
