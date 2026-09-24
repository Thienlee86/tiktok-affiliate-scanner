export function normalize(values) {
  const nums = values.map(v => Number(v) || 0);
  const max = Math.max(0, ...nums);
  return nums.map(v => max ? v / max : 0);
}

export function rankProducts(products = []) {
  const soldN = normalize(products.map(p => p.units_sold));
  const commN = normalize(products.map(p => p.commission));
  const rateN = normalize(products.map(p => p.commission_rate));
  return products.map((p,i) => ({
    ...p,
    score: Math.round(100 * (0.45*soldN[i] + 0.30*commN[i] + 0.25*rateN[i]))
  })).sort((a,b) => b.score-a.score);
}

export function dedupeProducts(products = []) {
  return [...new Map(products.filter(p => p?.id).map(p => [String(p.id), p])).values()];
}
