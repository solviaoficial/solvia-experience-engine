const key = "fec9f910fe83815c270d107032c8b8e9";
const host = 'solviaoficial.com';
const urls = ["https://solviaoficial.com/", "https://solviaoficial.com/agente-de-ia-whatsapp/", "https://solviaoficial.com/automacao-whatsapp-clinicas/", "https://solviaoficial.com/apps-sob-medida/", "https://solviaoficial.com/integracoes-whatsapp-crm-agenda/", "https://solviaoficial.com/cases/", "https://solviaoficial.com/cases/ecommerce-fashion/", "https://solviaoficial.com/cases/clinica-medica/", "https://solviaoficial.com/sobre/", "https://solviaoficial.com/recursos/", "https://solviaoficial.com/recursos/agente-ia-whatsapp-guia/", "https://solviaoficial.com/recursos/chatbot-vs-agente-ia/", "https://solviaoficial.com/recursos/tempo-resposta-lead/", "https://solviaoficial.com/contato/", "https://solviaoficial.com/privacidade/", "https://solviaoficial.com/termos/"];
const keyLocation = `https://${host}/${key}.txt`;
async function run() {
  // Aguarda o deploy realmente expor o arquivo de chave.
  let ready=false;
  for (let i=0;i<20;i++) {
    try { const r=await fetch(keyLocation,{cache:'no-store'}); if(r.ok && (await r.text()).trim()===key){ready=true;break} } catch(e){}
    await new Promise(r=>setTimeout(r,15000));
  }
  if(!ready) throw new Error('Deploy ainda não expôs a chave IndexNow.');
  const r=await fetch('https://api.indexnow.org/indexnow',{method:'POST',headers:{'content-type':'application/json; charset=utf-8'},body:JSON.stringify({host,key,keyLocation,urlList:urls})});
  if(!r.ok && r.status!==202) throw new Error(`IndexNow ${r.status} ${await r.text()}`);
  console.log('IndexNow enviado:', r.status, urls.length, 'URLs');
}
run().catch(e=>{console.error(e);process.exit(1)});
