'use client';
import { useState } from 'react';
import Link from 'next/link';
import Head from '@/components/Head';
import { useDemo, QUESTIONS } from '@/lib/demo';
export default function Diagnostic() {
  const d = useDemo(); const Q = QUESTIONS[d.mode === 'advanced' ? 'advanced' : 'practice'];
  const [val, setVal] = useState(''); const [work, setWork] = useState(''); const [fb, setFb] = useState<any>(null); const [h, setH] = useState(0);
  function submit() {
    const x = parseFloat(val.replace(/[^0-9.\-]/g, ''));
    if (isNaN(x)) { setFb({ kind: 'none', text: 'Please enter a number.' }); return; }
    if (Math.abs(x - Q.answer) < 0.05) { d.submit('correct', h); setFb({ kind: 'ok', text: `Correct. ${Q.solution}${h ? ' You used hints, so the mastery gain is smaller.' : ' No hints used, so mastery improved fully.'}` }); }
    else if (Math.abs(x - Q.wrong.value) < 0.05) { d.submit('concept', h); setFb({ kind: 'gap', text: Q.wrong.note, tag: Q.wrong.mis, q: Q.followup }); }
    else { d.submit('math', h); setFb({ kind: 'math', text: 'Not quite, and no known mistake pattern matches. Check your arithmetic and units.' }); }
  }
  return (<><Head title="Diagnostic assessment" sub={`Question 1 · ${d.mode === 'advanced' ? 'Analyze · Advanced' : 'Apply · Medium'}`} />
    <div className="grid2"><div className="card"><h3 style={{fontSize:20}}>{Q.text}</h3><input placeholder="Answer, e.g. 6" value={val} onChange={e => setVal(e.target.value)} onKeyDown={e => e.key === 'Enter' && submit()} /><textarea rows={3} placeholder="Show your working (optional)" value={work} onChange={e => setWork(e.target.value)} /><div className="row"><button className="btn" onClick={submit}>Submit</button><button className="btn alt" onClick={() => { if (h < 3) { d.useHint(); setH(h + 1); } }}>Hint {Math.min(h + 1, 3)} of 3</button></div>
      {h > 0 && <div className="tag">{Q.hints.slice(0, h).map((t: string, i: number) => <div key={i}><b>Hint {i + 1}:</b> {t}</div>)}</div>}</div>
    <div className="card"><h3>Evidence</h3>{!fb && <p className="muted">Submit an answer to see how SolMind reads it. Try {Q.wrong.value} to see a gap detected.</p>}
      {fb?.kind === 'gap' && <><span className="pill" style={{background:'#fff0cc',color:'#7a5300',alignSelf:'flex-start'}}>Suspected · not confirmed</span><p>{fb.text}</p><p className="muted">{fb.tag}</p><div className="tag" style={{background:'#efe9ff'}}><small><b>Follow-up question</b></small><br />{fb.q}</div><Link className="btn alt" style={{alignSelf:'flex-start'}} href="/tutor">Continue with the tutor</Link></>}
      {fb?.kind === 'ok' && <><span className="pill" style={{background:'var(--green)',color:'#fff',alignSelf:'flex-start'}}>Correct</span><p>{fb.text}</p><Link className="btn" style={{alignSelf:'flex-start'}} href="/knowledge-map">See knowledge map</Link></>}
      {(fb?.kind === 'math' || fb?.kind === 'none') && <p>{fb.text}</p>}
      <p className="muted" style={{fontSize:13}}>One wrong answer never proves a misconception. The map updates only with more evidence.</p></div></div></>);
}
