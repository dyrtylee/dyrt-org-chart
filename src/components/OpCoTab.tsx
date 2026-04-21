import { OrgNode } from './OrgNode'
import { PersonGrid } from './PersonGrid'
import { NoteBox } from './NoteBox'
import { SectionLabel } from './SectionLabel'
import { opcoTemplate, opcoSite1Staff } from '../data'

export function OpCoTab() {
  return (
    <div>
      <NoteBox>
        Phase 1 funds 3–5 additional LA/SoCal sites to prove the replication model and unit economics
        before national expansion. Each OpCo is identically staffed (~22 employees). GMs are HoldCo
        employees managing clusters of sites. Shared services are provided by HoldCo and billed back at cost.
      </NoteBox>

      <div className="flex items-center gap-4 bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 mb-5">
        <div className="text-4xl font-black text-blue-600 leading-none">~22</div>
        <div>
          <p className="text-[13px] font-bold text-slate-900">Employees per site</p>
          <p className="text-[12px] text-slate-500 mt-0.5">
            Phase 1: 3–5 LA/SoCal sites · Phase 2: national expansion · same staffing, same unit economics
          </p>
        </div>
      </div>

      <SectionLabel>Template structure — repeats per site (click to collapse)</SectionLabel>
      <OrgNode node={opcoTemplate} />

      <div className="mt-3 px-3 py-2 bg-blue-50 border border-blue-200 rounded-lg text-[12px] text-blue-800">
        <strong>Shared services billback:</strong> EHS standards, platform (app.dyrt.co, Scandroid),
        route optimization, G&A support, and sustainability reporting provided by HoldCo and billed
        back to each OpCo at cost.
      </div>

      <PersonGrid people={opcoSite1Staff} label="Current named staff — OpCo site 1 (live template instance)" />
    </div>
  )
}
