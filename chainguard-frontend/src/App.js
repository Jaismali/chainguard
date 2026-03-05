import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Evidence from "./pages/Evidence";
import AuditTrail from "./pages/AuditTrail";
import Verify from "./pages/Verify";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-200">
        <nav className="border-b border-slate-800 px-6 py-4 flex items-center gap-8">
          <span className="text-cyan-400 font-bold text-xl">⛓ ChainGuard</span>
          <NavLink to="/" className={({isActive}) => isActive ? "text-cyan-400 text-sm font-semibold" : "text-slate-400 text-sm hover:text-white"}>Dashboard</NavLink>
          <NavLink to="/evidence" className={({isActive}) => isActive ? "text-cyan-400 text-sm font-semibold" : "text-slate-400 text-sm hover:text-white"}>Evidence</NavLink>
          <NavLink to="/audit" className={({isActive}) => isActive ? "text-cyan-400 text-sm font-semibold" : "text-slate-400 text-sm hover:text-white"}>Audit Trail</NavLink>
          <NavLink to="/verify" className={({isActive}) => isActive ? "text-cyan-400 text-sm font-semibold" : "text-slate-400 text-sm hover:text-white"}>Verify</NavLink>
          <div className="ml-auto">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-4 py-2 rounded-lg text-sm">
              Connect MetaMask
            </button>
          </div>
        </nav>
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/evidence" element={<Evidence />} />
            <Route path="/audit" element={<AuditTrail />} />
            <Route path="/verify" element={<Verify />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;