import{l as n,J as o,o as c,g as h,h as a,ae as p,S as l,p as u,k as d,T as g}from"./CEuOx3_a.js";const m="img",S=n({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(r){const t=r,i=o(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const e=l(u(d().app.baseURL));if(e!=="/"&&!t.src.startsWith(e))return g(e,t.src)}return t.src});return(s,e)=>(c(),h(p(a(m)),{src:a(i),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{S as default};
