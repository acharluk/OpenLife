import{d as u,g as o,h as i,c,b as s,t as l,u as p,F as m,o as d}from"./index.e32af258.js";import{j as f}from"./index.d5dab4fa.js";const g=u({setup(b){const a=o(),n=o().currentRoute.value.params.id,e=i(),t=f[n];function r(){e.job=t,e.addEvent(`You started a new position as ${t.title}!`),a.push({name:"main"})}return(_,j)=>(d(),c(m,null,[s("p",null,"Position: "+l(p(t).title),1),s("button",{onClick:r}," Start this job ")],64))}});export{g as default};