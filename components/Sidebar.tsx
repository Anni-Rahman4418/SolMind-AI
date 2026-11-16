'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { useDemo } from '@/lib/demo';
const ITEMS: [string,string][] = [['/dashboard','Dashboard'],['/knowledge-map','Knowledge Map'],['/tutor','AI Tutor'],['/assessment/diagnostic','Assessments'],['/analytics','Analytics']];
export default function Sidebar() {
  const p = usePathname(); const { reset } = useDemo();
  return (<aside className="side"><Logo />{ITEMS.map(([h,l]) => <Link key={h} href={h} className={p.startsWith(h) ? 'on' : ''}>{l}</Link>)}
    <div style={{marginTop:'auto'}}><button className="btn alt" style={{width:'100%'}} onClick={reset}>Reset demo</button></div></aside>);
}
