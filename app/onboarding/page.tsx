'use client';
import { useRouter } from 'next/navigation';
import Logo from '@/components/Logo';
import { useDemo } from '@/lib/demo';
const MODES: [string,string,string,string,string][] = [
  ['zero','Learn from Zero','Start with force, mass and acceleration using everyday examples.','var(--green)','/tutor'],
  ['practice','Practice & Improve','Take a diagnostic, then fix specific gaps with Socratic help.','var(--violet)','/assessment/diagnostic'],
  ['advanced','Advanced Challenge','Verify mastery, skip basics and solve multi-step problems.','var(--blue)','/assessment/diagnostic'],
];
export default function Onboarding() {
  const r = useRouter(); const { setMode } = useDemo();
  return (<><nav className="nav"><Logo /></nav><section className="center"><h1 style={{fontSize:38}}>How do you want to learn today?</h1><p className="muted">Your choice sets the first step. Mastery is always verified by a quick check.</p>
    <div className="grid3">{MODES.map(([k,t,d,c,href]) => <button key={k} className="card mode" onClick={() => { setMode(k); r.push(href); }}><div className="orb" style={{background:c}} /><h3 style={{fontSize:22}}>{t}</h3><p className="muted">{d}</p></button>)}</div>
    <span className="pill" style={{background:'#efe9ff',color:'#6d4aff'}}>Chapter: Newton’s Laws of Motion · Class 11</span></section></>);
}
