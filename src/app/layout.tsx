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
         <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content='Muhammed Nizamudheen | Software developer' />
        <meta property="og:description" content='Self-directed full-stack developer proficient in creating innovative web solutions. Skilled in both frontend and backend development with a creative approach to problem-solving. Also passionate about creating customised solutions for my clients.' />
        <meta property="og:image" content='https://nizamudheen.com/opengraph-image.png' />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://contact.nizamudheen.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content='Muhammed Nizamudheen | Software developer' />
        <meta name="twitter:description" content='Self-directed full-stack developer proficient in creating innovative web solutions. Skilled in both frontend and backend development with a creative approach to problem-solving. Also passionate about creating customised solutions for my clients.' />
        <meta name="twitter:image" content='https://nizamudheen.com/opengraph-image.png' />
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
