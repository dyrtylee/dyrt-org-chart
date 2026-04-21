import { useState } from 'react'
import { EntityCard } from './components/EntityCard'
import { HoldCoTab } from './components/HoldCoTab'
import { OpCoTab } from './components/OpCoTab'
import { MfgCoTab } from './components/MfgCoTab'
import { AnalystTab } from './components/AnalystTab'
import type { TabId } from './types'

const tabs: { id: TabId; label: string }[] = [
  { id: 'holdco',  label: 'HoldCo detail' },
  { id: 'opco',    label: 'OpCo template' },
  { id: 'mfgco',   label: 'ManufacturingCo' },
  { id: 'analyst', label: 'Analyst notes' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('holdco')

  return (
    <div className="max-w-5xl mx-auto px-5 py-8 pb-16">

      {/* Header */}
      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
        Dyrt Labs · Series A · April 2026
      </p>
      <h1 className="text-[28px] font-black text-slate-900 tracking-tight leading-none mb-1">
        Organization structure
      </h1>
      <p className="text-[14px] text-slate-500 mb-5">
        HoldCo · OpCo (LA/SoCal expansion) · ManufacturingCo (captive supplier) · SB&nbsp;1383 market
      </p>

      {/* Legend */}
      <div className="flex gap-2 flex-wrap items-center mb-5">
        <span className="text-[12px] text-slate-400">Hiring phase:</span>
        {[
          { label: 'Current',            className: 'bg-green-100 text-green-800 border border-green-300' },
          { label: 'Phase 1 — Series A', className: 'bg-blue-100 text-blue-800 border border-blue-300' },
          { label: 'Phase 2 — Series B', className: 'bg-gray-100 text-gray-700 border border-gray-300' },
          { label: 'OpCo template',      className: 'bg-blue-50 text-blue-700 border border-blue-200' },
        ].map(({ label, className }) => (
          <span key={label} className={`text-[11px] font-semibold px-2 py-0.5 rounded ${className}`}>
            {label}
          </span>
        ))}
      </div>

      {/* CEO bar */}
      <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg px-4 py-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-white border-2 border-green-500 flex items-center justify-center text-[13px] font-black text-green-800 flex-shrink-0">
          LR
        </div>
        <div className="flex-1">
          <p className="text-[14px] font-bold text-slate-900">Lee Robinson — CEO, Dyrt Labs, Inc.</p>
          <p className="text-[12px] text-slate-500 mt-0.5">
            HoldCo CEO · direct oversight of all OpCo sites · ManufacturingCo managed as captive supplier from HoldCo
          </p>
        </div>
        <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-green-100 text-green-800 border border-green-300 flex-shrink-0">
          Current
        </span>
      </div>

      {/* Entity cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        <EntityCard
          eyebrow="HoldCo · Parent entity"
          name="Dyrt Labs, Inc."
          description="Customer contracts, IP, proprietary SaaS platform (app.dyrt.co + Scandroid), capital, and all G&A shared services. Software R&D housed here."
          owns="Contracts · Software R&D · Sales · Government · Finance · Shared services"
          headcountNow="12 staff"
          headcountTarget="35+ roles"
          tag="SB 1383 compliance platform"
          color="green"
        />
        <EntityCard
          eyebrow="OpCo · Operations"
          name="Dyrt Operations Co."
          description="Standardized, independently incorporated physical operations. Phase 1: 3–5 additional LA/SoCal sites. Identical staffing, identical unit economics."
          owns="Processing · Logistics · Drivers · Floor ops · EHS per site"
          headcountNow="18 staff (site 1)"
          headcountTarget="~22 per site"
          tag="$0.10/lb ops model · platform billback"
          color="blue"
        />
        <EntityCard
          eyebrow="ManufacturingCo · Captive supplier"
          name="Dyrt Manufacturing Co."
          description="Separate legal entity owning all hardware CapEx. Isolates venture debt from HoldCo. Managed by HoldCo. Hardware R&D housed here."
          owns="Hardware R&D · Bin manufacturing · NPI · QC · Procurement"
          headcountNow="Not yet formed"
          headcountTarget="56 roles"
          tag="Equipment financing vehicle"
          color="amber"
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-1 flex-wrap border-b border-slate-200 pb-3 mb-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-[13px] font-semibold px-4 py-1.5 rounded-md border transition-all duration-150 ${
              activeTab === tab.id
                ? 'bg-slate-100 border-slate-300 text-slate-900'
                : 'bg-transparent border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === 'holdco'  && <HoldCoTab />}
      {activeTab === 'opco'    && <OpCoTab />}
      {activeTab === 'mfgco'   && <MfgCoTab />}
      {activeTab === 'analyst' && <AnalystTab />}
    </div>
  )
}
