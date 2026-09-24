function num(v){const n=Number(v);return Number.isFinite(n)?n:null;}
export function classifyCandidate(p={}, momentum={}) {
  const sold=num(p.units_sold), commission=num(p.commission), rate=num(p.commission_rate), score=num(p.score);
  const missing=[];
  if(sold===null) missing.push("units_sold");
  if(commission===null) missing.push("commission");
  if(rate===null) missing.push("commission_rate");
  const reliable=missing.length===0;
  let band="insufficient_data";
  if(reliable && score!==null) band=score>=70?"strong":score>=50?"watch":"weak";
  return {...p,momentum:momentum.status||"unknown",delta_units:momentum.delta_units??null,data_quality:reliable?"confirmed_core_metrics":"incomplete",missing_fields:missing,candidate_band:band};
}
export function selectCandidates(rows=[], minimumScore=50){
  return rows.filter(x=>x.data_quality==="confirmed_core_metrics" && Number(x.score)>=minimumScore && x.has_inventory!==false)
    .sort((a,b)=>Number(b.score)-Number(a.score));
}
