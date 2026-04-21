import { OrgNode } from './OrgNode'
import { NoteBox } from './NoteBox'
import { SectionLabel } from './SectionLabel'
import { mfgcoOrg } from '../data'

export function MfgCoTab() {
  return (
    <div>
      <NoteBox variant="amber">
        ManufacturingCo is a captive supplier based in <strong>Las Cruces, NM</strong>, managed directly
        by the HoldCo — a separate legal entity to isolate all hardware CapEx and enable equipment
        financing without affecting the venture-backed HoldCo balance sheet. A dedicated Manufacturing
        Manager (HoldCo employee) reports to the CEO.
      </NoteBox>

      <SectionLabel>R&amp;D ownership split</SectionLabel>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
        <div className="border border-slate-200 border-t-[3px] border-t-green-500 rounded-lg p-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-green-800 mb-1.5">
            Software R&D — Dyrt Labs (HoldCo)
          </p>
          <p className="text-[12px] text-slate-600 leading-relaxed">
            Platform (app.dyrt.co), Scandroid, route optimization, CRM, and sustainability reporting.
            Clay Cantrell (Lead Engineer) + VP Product (TBH) lead. Revenue billed to OpCos as platform fee.
          </p>
        </div>
        <div className="border border-slate-200 border-t-[3px] border-t-amber-500 rounded-lg p-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-amber-800 mb-1.5">
            Hardware R&D — ManufacturingCo
          </p>
          <p className="text-[12px] text-slate-600 leading-relaxed">
            Bin engineering, sustaining engineering, NPI, and quality control. Under Manufacturing
            Manager. Supplies OpCos at cost — CapEx stays off HoldCo balance sheet.
          </p>
        </div>
      </div>

      <SectionLabel>ManufacturingCo org — HoldCo-managed captive</SectionLabel>
      <OrgNode node={mfgcoOrg} />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 bg-slate-50 border border-slate-200 rounded-lg p-3 mt-4">
        {[
          ['Location',       'Las Cruces, NM'],
          ['Structure',      'Captive supplier'],
          ['Managed by',     'HoldCo CEO'],
          ['Financing',      'Venture debt / equipment'],
          ['Phase 1 hires',  '6 roles'],
          ['Phase 2 hires',  '50 production staff'],
          ['Full buildout',  '56 roles'],
        ].map(([label, value]) => (
          <div key={label}>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">{label}</p>
            <p className="text-[13px] font-semibold text-slate-900">{value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
