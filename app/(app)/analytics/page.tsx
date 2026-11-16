'use client';
import Head from '@/components/Head';
import Bar from '@/components/Bar';
import { useDemo, TOPICS, status } from '@/lib/demo';
export default function Analytics() {
  const d = useDemo(); const W = 420, H = 180, n = d.hist.length;
  const pts = d.hist.map((v, i) => `${10 + (n === 1 ? 0 : i * (W - 20) / (n - 1))},${H - 10 - v * (H - 20) / 100}`).join(' ');
  const rows = TOPICS.filter(t => d.sc[t[0]] != null).sort((a, b) => d.sc[a[0]] - d.sc[b[0]]).slice(0, 6);
  return (<><Head title="Learning analytics" sub="Sample data from the demo profile, not measured results" />
    <div className="grid2"><div className="card"><h3>Topic-wise mastery</h3>{rows.map(t => <Bar key={t[0]} label={t[2]} pct={d.sc[t[0]] * 100} color={status(t[0], d.sc).color} />)}</div>
      <div className="card"><h3>Progress over time</h3><svg viewBox={`0 0 ${W} ${H}`} width="100%"><line x1="0" y1={H - 1} x2={W} y2={H - 1} stroke="#e4e0f5" /><polyline points={pts} fill="none" stroke="#6d4aff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />{d.hist.map((v, i) => <circle key={i} cx={10 + (n === 1 ? 0 : i * (W - 20) / (n - 1))} cy={H - 10 - v * (H - 20) / 100} r="4" fill="#6d4aff" />)}</svg><p className="muted">Overall mastery: {d.overall}% after {d.attempts} attempt(s)</p></div></div>
    <div className="grid2"><div className="card"><h3>Conceptual vs mathematical</h3><Bar label="Conceptual" pct={d.conc * 100} color="var(--violet)" /><Bar label="Mathematical" pct={d.math * 100} color="var(--blue)" /></div>
      <div className="card"><h3>Accuracy by difficulty</h3>{[['Easy', 90], ['Medium', 55], ['Advanced', 30], ['Expert', 10]].map(([a, p]) => <Bar key={a as string} label={a as string} pct={p as number} color="var(--blue)" />)}</div></div></>);
}
