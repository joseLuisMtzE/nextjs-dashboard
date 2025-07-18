import './ui/global.css';
import { inter } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}> 
      <body>
        {children}
        <footer className='text-center text-sm p-4 '>Hecho con ❤️ por @joseLuisMtzE</footer>
        </body>
    </html>
  );
}
