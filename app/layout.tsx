import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider} from "next-themes";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://sophavisnuka.vercel.app"),
  title: {
    default: "Khun Sophavisnuka - Full Stack Developer Portfolio",
    template: "%s | Khun Sophavisnuka",
  },
  description:
    "Portfolio of Khun Sophavisnuka, a full stack developer and software engineering student in Phnom Penh, Cambodia, specializing in React, Next.js, and Node.js. Explore projects, posters, work experience, and achievements.",
  keywords: [
    "Sophavisnuka",
    "Khun Sophavisnuka",
    "Full Stack Developer",
    "Software Engineer Cambodia",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
    "CADT",
  ],
  authors: [{ name: "Khun Sophavisnuka" }],
  creator: "Khun Sophavisnuka",
  openGraph: {
    title: "Khun Sophavisnuka - Full Stack Developer Portfolio",
    description:
      "Portfolio of Khun Sophavisnuka, a full stack developer and software engineering student in Phnom Penh, Cambodia. Explore projects, posters, work experience, and achievements.",
    siteName: "Khun Sophavisnuka Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Khun Sophavisnuka - Full Stack Developer Portfolio",
    description:
      "Portfolio of Khun Sophavisnuka, a full stack developer and software engineering student in Phnom Penh, Cambodia.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Sidebar />
          <div className="lg:pl-[35%] flex flex-col min-h-screen">
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
