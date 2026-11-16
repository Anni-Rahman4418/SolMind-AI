export default function Head({ title, sub }: { title: string; sub: string }) {
  return (<div className="head"><div><h1>{title}</h1><p>{sub}</p></div><span className="pill" style={{background:'#fff0cc',color:'#7a5300'}}>Demo data · guest profile</span></div>);
}
