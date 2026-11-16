'use client';
import Link from 'next/link';
import Head from '@/components/Head';
import Bar from '@/components/Bar';
import { useDemo, TOPICS, status } from '@/lib/demo';
export default function Dashboard() {
  const d = useDemo(); const mastered = TOPICS.filter(t => status(t[0], d.sc).label === 'Mastered').length;
  return (<><Head title="Welcome back, Sam" sub="Current target: Newton’s Second Law" />
    <div className="grid4">{[['Overall mastery',`${d.overall}%`,'var(--violet)'],['Topics mastered',`${mastered} / ${TOPICS.length}`,'var(--green)'],['Hints used',`${d.hints}`,'var(--amber)'],['Attempts',`${d.attempts}`,'var(--blue)']].map(([a,b,c]) => <div className="card stat" key={a}><span className="muted"><b style={{fontSize:14}}>{a}</b></span><b style={{color:c}}>{b}</b></div>)}</div>
    <div className="grid2"><div className="card"><h3>Knowledge map preview</h3><div className="row">{TOPICS.map(t => { const s = status(t[0], d.sc); return <span key={t[0]} className="pill" style={{background:s.color,color:s.label==='Developing'?'#2a1d00':'#fff'}}>{t[1]}</span>; })}</div><Link className="btn alt" style={{alignSelf:'flex-start'}} href="/knowledge-map">Open knowledge map</Link></div>
      <div className="card"><h3>Conceptual vs mathematical</h3><Bar label="Conceptual understanding" pct={d.conc*100} color="var(--violet)" /><Bar label="Mathematical accuracy" pct={d.math*100} color="var(--blue)" /></div></div>
    <div className="card"><h3>Next step</h3><p className="muted">{d.done ? 'Nice work. Try the advanced challenge from onboarding, or review your analytics.' : 'Start the diagnostic to find your gaps.'}</p><Link className="btn" style={{alignSelf:'flex-start'}} href="/assessment/diagnostic">{d.done ? 'Practice again' : 'Start diagnostic'}</Link></div></>);
}
