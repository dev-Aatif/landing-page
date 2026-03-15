import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NoteAI | Intelligent Meeting Summaries & Action Items",
  description: "Transform your meetings into actionable insights. Automatically transcribe, summarize, and extract tasks from your calls with NoteAI.",
  keywords: ["AI meeting notes", "transcription", "productivity tools", "meeting automation", "SaaS"],
  authors: [{ name: "NoteAI Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        {children}
      </body>
    </html>
  );
}
