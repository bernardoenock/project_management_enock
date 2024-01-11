import type { Metadata } from 'next'
import { ThemeMUI } from '@/style';
import '../style/global.css'


export const metadata: Metadata = {
  title: "Project Management",
  description: "Made by Enock",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeMUI>
            {children}
        </ThemeMUI>
      </body>
    </html>
  );
}