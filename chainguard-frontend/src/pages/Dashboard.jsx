import React from "react";

function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Forensics Command Center</h1>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Evidence", value: "3" },
          { label: "Active Cases", value: "1" },
          { label: "Custody Events", value: "4" },
          { label: "Audit Actions", value: "6" },
        ].map((s) => (
          <div key={s.label} className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
            <div className="text-slate-500 text-xs mb-1">{s.label}</div>
            <div className="text-3xl font-bold text-white">{s.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;