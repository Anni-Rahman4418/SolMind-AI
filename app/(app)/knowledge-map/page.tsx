'use client';
import { useState } from 'react';
import Head from '@/components/Head';
import { useDemo, TOPICS, EDGES, status } from '@/lib/demo';
const px = (c: number) => 50 + c * 118;
export default function KnowledgeMap() {
  const d = useDemo(); const [sel, setSel] = useState('T08'); const t = TOPICS.find(x => x[0] === sel)!; const s = status(sel, d.sc);
  const pre = EDGES.filter(e => e[1] === sel).map(e => TOPICS.find(x => x[0] === e[0])![2]);
  const P = (id: string) => TOPICS.find(x => x[0] === id)!;
  return (<><Head title="Knowledge map" sub="Click a topic to inspect mastery and prerequisites" />
    <div className="card" style={{overflowX:'auto'}}><svg viewBox="0 0 860 380" width="100%" style={{minWidth:640}}>
      {EDGES.map(([a, b]) => <line key={a + b} x1={px(P(a)[3]) + 42} y1={P(a)[4]} x2={px(P(b)[3]) - 42} y2={P(b)[4]} stroke="#9aa3b5" strokeWidth="1.5" />)}
      {TOPICS.map(n => <g key={n[0]} className="node" onClick={() => setSel(n[0])}><rect x={px(n[3]) - 42} y={n[4] - 16} width="84" height="32" rx="10" fill={status(n[0], d.sc).color} stroke={sel === n[0] ? '#14183a' : 'none'} strokeWidth="3" /><text x={px(n[3])} y={n[4] + 4}>{n[1]}</text></g>)}</svg>
      <div className="row" style={{fontSize:13}}>{[['Mastered','var(--green)'],['Developing','var(--amber)'],['Weak','var(--red)'],['Not assessed','var(--grey)'],['Current target','var(--blue)']].map(([a, c]) => <span key={a}><b style={{color:c}}>●</b> {a}</span>)}</div></div>
    <div className="card"><h3>{t[2]} · {s.label}</h3><p className="muted">{d.sc[sel] != null ? `Mastery ${Math.round(d.sc[sel] * 100)}%` : 'No evidence yet'} · Needs: {pre.length ? pre.join(', ') : 'none (starting topic)'}</p></div></>);
}
