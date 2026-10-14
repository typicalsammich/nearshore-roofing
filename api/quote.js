// Optional Vercel endpoint. Keep disabled until the CRM destination and privacy notice are approved.
export default async function handler(req,res){
  res.setHeader('Cache-Control','no-store');
  if(req.method!=='POST'){res.setHeader('Allow','POST');return res.status(405).json({error:'Use POST.'});}
  const target=process.env.QUOTE_WEBHOOK_URL;
  if(!target||!process.env.QUOTE_WEBHOOK_TOKEN)return res.status(503).json({error:'Online requests are not configured. Please call 772-356-3443.'});
  let data=req.body;try{if(typeof data==='string')data=JSON.parse(data);}catch{return res.status(400).json({error:'Invalid request.'});}
  if(!data||typeof data!=='object')return res.status(400).json({error:'Invalid request.'});
  if(data.website)return res.status(400).json({error:'Unable to accept this request.'});
  const clean={};for(const [k,max]of Object.entries({name:120,phone:40,email:200,location:160,service:100,property:30,description:3000,contact:20})){if(data[k]!=null&&typeof data[k]!=='string')return res.status(400).json({error:'Invalid field.'});clean[k]=(data[k]||'').trim();if(clean[k].length>max)return res.status(400).json({error:'Field exceeds allowed length.'});}
  if(!clean.name||!clean.location||!clean.description||!/[0-9]{7}/.test(clean.phone.replace(/\D/g,'')))return res.status(400).json({error:'Name, valid phone, location and a description are required.'});
  if(clean.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email))return res.status(400).json({error:'Enter a valid email.'});
  try{const url=new URL(target);if(url.protocol!=='https:')throw Error('HTTPS required');const response=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json',Authorization:'Bearer '+process.env.QUOTE_WEBHOOK_TOKEN},body:JSON.stringify(clean),signal:AbortSignal.timeout(10000)});if(!response.ok)throw Error('Delivery failed');return res.status(200).json({ok:true});}catch{return res.status(502).json({error:'Unable to deliver your request. Please call 772-356-3443.'});}
}
