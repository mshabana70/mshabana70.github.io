import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Mahmoud Shabana | AI Security Researcher",
  description: "Associate AI Security Researcher at Carnegie Mellon University Software Engineering Institute. Specializing in adversarial machine learning, mechanistic interpretability, and automated vulnerability discovery.",
  keywords: ["AI Security", "Machine Learning", "Cybersecurity", "Adversarial ML", "Carnegie Mellon", "Research"],
  authors: [{ name: "Mahmoud Shabana" }],
  openGraph: {
    title: "Mahmoud Shabana | AI Security Researcher",
    description: "Associate AI Security Researcher at CMU SEI. Breaking AI systems to make them safer.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahmoud Shabana | AI Security Researcher",
    description: "Associate AI Security Researcher at CMU SEI. Breaking AI systems to make them safer.",
    creator: "@_MoMatters",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${ovo.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
