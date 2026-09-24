export class MemoryStore {
 constructor(){this.snapshots=[];this.runs=[];this.revenue=[];}
 async saveSnapshots(rows=[]){this.snapshots.push(...rows);return rows.length;}
 async getSnapshots(){return [...this.snapshots];}
 async saveRun(run){this.runs.push(run);return run;}
 async getRuns(){return [...this.runs];}
 async addRevenue(events=[]){this.revenue.push(...events);return events.length;}
 async getRevenue(){return [...this.revenue];}
}
export function validateStore(store){
 const required=["saveSnapshots","getSnapshots","saveRun","getRuns","addRevenue","getRevenue"];
 return required.every(k=>typeof store?.[k]==="function");
}
