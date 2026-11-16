import './globals.css';
import { DemoProvider } from '@/lib/demo';
export const metadata = { title: 'SolMind AI — an intelligent tutor mind', description: 'Gap-aware adaptive Physics tutor (demo)' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body><DemoProvider>{children}</DemoProvider></body></html>);
}
