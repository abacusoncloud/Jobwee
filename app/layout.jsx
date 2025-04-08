import './globals.css';
import Navigation from './comnonents/navigation';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Jobwhee | Find the talent',
  description:
    'Jobwee helps you find top talent quickly and efficiently. Connect with skilled professionals, streamline your hiring process, and build the perfect team with ease.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="container px-4 md:px-0 lg:px-0 xl:px-0">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
