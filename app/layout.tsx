import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import ClientProvider from "@/components/providers/ClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Any Chat",
  description:
    "You can chat in any language with anyone. No need to know the language of the other person.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            storageKey="any-chat-theme"
          >
            <Header />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClientProvider>
  );
}
