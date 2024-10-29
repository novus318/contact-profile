import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Contact || Nizamudheen",
  description: "Self-directed full-stack developer proficient in creating innovative web solutions. Skilled in both frontend and backend development with a creative approach to problem-solving. Also passionate about creating customised solutions for my clients. Seeking a position with a progressive company that offers opportunities for career advancement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
