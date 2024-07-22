import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const IBMPlex = IBM_Plex_Sans({ subsets: ["latin"],
  weight: ['400','500','600','700'],
  variable:'--font-ibm-plex'

 });

export const metadata: Metadata = {
  title: "Magnifier",
  description: "AI-powered image generator -background remover -extending image",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
      {/* <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header> */}
          <main>

        {children}
          </main>
        </body>
    </html>
    </ClerkProvider>
  );
}
