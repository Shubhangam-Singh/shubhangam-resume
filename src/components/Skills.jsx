import React from 'react'
export default function Skills(){
  const cats = [
    { title:'Languages', skills:['Java','C/C++','Python'] },
    { title:'Web', skills:['HTML','CSS','JavaScript'] },
    { title:'Data & Tools', skills:['R (statistical analysis)','MATLAB (Simulink)'] },
    { title:'Concepts', skills:['Data structures & algorithms','Software development lifecycle','Basic ML concepts'] },
    { title:'Soft Skills', skills:['Problem solving','Collaboration','Communication'] },
    { title:'Languages (Spoken)', skills:['English','Hindi'] }
  ]
  return (
    <div className="card">
      <h2 className="section-title">Key Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {cats.map((c,i)=>(
          <div key={i}>
            <h3 className="font-semibold text-gray-800 mb-2">{c.title}:</h3>
            <div className="flex flex-wrap gap-2">
              {c.skills.map((s,j)=><span key={j} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
