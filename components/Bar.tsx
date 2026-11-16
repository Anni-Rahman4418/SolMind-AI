export default function Bar({ label, pct, color }: { label: string; pct: number; color: string }) {
  return (<div><div style={{display:'flex',justifyContent:'space-between',fontWeight:700,fontSize:14,marginBottom:6}}><span>{label}</span><span className="muted">{Math.round(pct)}%</span></div><div className="track"><i style={{width:`${pct}%`,background:color}} /></div></div>);
}
