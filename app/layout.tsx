// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import MetaPixel from '@/components/MetaPixel';

export const metadata: Metadata = {
  title: 'HirePro Deutschland | Online-Arbeitsmöglichkeiten',
  description:
    'Entdecke Online-Arbeitsmöglichkeiten mit HirePro in Deutschland. Arbeite von zu Hause, erledige einfache Aufgaben und entdecke flexible Jobmöglichkeiten.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
