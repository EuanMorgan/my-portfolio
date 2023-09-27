import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {cn} from '~/utils/classNames';
import BackgroundShapes from '../components/BackgroundShapes';
import Header from '~/components/Header';
const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Euan Morgan | Full Stack Developer',
  description:
    'Euan Morgan is a full stack developer with 2.5 years of experience.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body
        className={cn(
          inter.className,
          'bg-slate-50 text-gray-950 relative pt-28 sm:pt-36'
        )}
      >
        <BackgroundShapes />
        <Header />
        {children}
      </body>
    </html>
  );
}
