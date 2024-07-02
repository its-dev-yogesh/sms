import AuthGaurd from '@/layouts/AuthGaurd';
import { Metadata } from 'next';
import './global.css';
export const metadata: Metadata = {
  title: {
    template: '%s | Slash',
    default: 'Slash' // a default is required when creating a template
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="slash-gradient-l-r box-border m-0 p-0 glass "
      data-theme="slash"
    >
      <body className="">
        <AuthGaurd>{children}</AuthGaurd>
      </body>
    </html>
  );
}
