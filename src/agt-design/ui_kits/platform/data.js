window.AGT_DATA={
farmer:{name:'Lucía Ferreyra',farm:'Estancia La Ferreyra',region:'Córdoba, AR'},
fields:[
 {id:'F-14',name:'Field 14 · Los Álamos',crop:'Soybean',ha:128.4,ndvi:0.74,delta:'+0.06',status:'positive',statusLabel:'Healthy',stage:'R3 · Pod set',season:62,yield:4.2},
 {id:'F-09',name:'Field 9 · El Bajo',crop:'Maize',ha:86.0,ndvi:0.58,delta:'-0.09',status:'caution',statusLabel:'Water stress',stage:'V12',season:48,yield:8.9},
 {id:'F-03',name:'Field 3 · La Loma',crop:'Wheat',ha:64.2,ndvi:0.31,delta:'+0.02',status:'info',statusLabel:'Emerging',stage:'Tillering',season:22,yield:3.4},
 {id:'F-21',name:'Field 21 · Ruta 9',crop:'Soybean',ha:142.7,ndvi:0.69,delta:'+0.03',status:'positive',statusLabel:'Healthy',stage:'R2 · Flowering',season:58,yield:3.9}],
loans:[
 {id:'AGT-2291',amount:48000,rate:9.2,collateral:'Soybean · F-14, F-21',repaid:18,status:'accent',statusLabel:'Disbursed',due:'Mar 2027'},
 {id:'AGT-2340',amount:22000,rate:10.1,collateral:'Maize · F-09',repaid:0,status:'caution',statusLabel:'Data due',due:'Jun 2027'}],
ndviSeries:[0.18,0.21,0.27,0.34,0.42,0.5,0.57,0.62,0.66,0.68,0.71,0.7,0.74],
tasks:[{t:'Planting report for Field 9',d:'Due in 3 days — unlocks $11,000',tone:'caution'},{t:'Upload seed invoice',d:'Field 3 · Wheat',tone:'info'}]
};
(function(){const r=[];let s=7;const rnd=()=>{s=(s*9301+49297)%233280;return s/233280};for(let y=0;y<14;y++)for(let x=0;x<22;x++){const cx=(x-11)/11,cy=(y-7)/7;let v=0.78-0.25*(cx*cx+cy*cy)+ (rnd()-.5)*.18;if(x>15&&y>8)v-=.3;r.push(Math.max(0,Math.min(.95,v)))}window.AGT_DATA.grid=r})();