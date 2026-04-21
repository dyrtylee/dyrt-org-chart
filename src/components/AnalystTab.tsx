import { NoteBox } from './NoteBox'
import { SectionLabel } from './SectionLabel'

const rationale = [
  {
    title: 'Why three entities?',
    body: 'HoldCo raises venture equity — asset-light, SaaS-like, high-margin. ManufacturingCo raises venture debt or equipment financing — asset-heavy, CapEx-intensive. OpCos can attract local government grants and site-level capital without diluting the parent. Each entity is optimized for its own financing profile.',
  },
  {
    title: 'SB 1383 tailwind',
    body: 'California law (effective 2022) mandates commercial organics waste diversion. Every restaurant, hotel, grocery store, and food business in California is a compliance-driven customer. This is not a discretionary spend — it is a legal obligation. Dyrt\'s managed-services model is the turnkey compliance solution.',
  },
  {
    title: 'Why the GM cluster model works',
    body: 'Each OpCo is a franchise-like instance — identical process, identical economics. A GM managing 4–5 sites with Site Operations Managers below them is the waste management industry standard. The Site Ops Manager layer is the critical bridge that makes the regional span of control viable.',
  },
  {
    title: 'VP Product as the top priority hire',
    body: 'Clay Cantrell (Lead Engineer) currently reports to the CEO. The VP Product hire is the most operationally urgent Series A role — without it, product strategy is unowned and engineering lacks a senior business-side counterpart. This should be among the first three hires post-close.',
  },
]

const qanda = [
  {
    q: 'Why 10 OpCos — what does Phase 1 capital actually fund?',
    a: 'Phase 1 (Series A) funds 3–5 additional LA/SoCal sites to prove the replication model and unit economics. The structure is built for 10 but deployed incrementally. Phase 2 (Series B) takes it to national scale.',
  },
  {
    q: 'Why manufacture bins rather than source them?',
    a: 'Proprietary bin design creates a technical moat and controls cost structure at scale. Outsourcing works short-term but creates supply chain dependency beyond 10+ sites. ManufacturingCo is a Phase 2 build, not a Series A spend.',
  },
  {
    q: 'How does HoldCo generate revenue from OpCos?',
    a: 'HoldCo charges OpCos a platform fee (SaaS/managed services) for the technology stack (app.dyrt.co, route optimization, Scandroid), shared services (EHS Director, G&A, finance), and the management layer (GMs). This creates recurring, high-margin intercompany revenue at the HoldCo level.',
  },
  {
    q: 'What is the current legal structure — are entities already formed?',
    a: 'Currently operating as Dyrt Lab, Inc. OpCo and ManufacturingCo are the target structure to be established with Series A proceeds via WSGR (Scott Zimmermann).',
  },
  {
    q: 'Who owns product without a VP Product in seat?',
    a: 'Clay Cantrell (Lead Engineer) is executing the roadmap with direction from Lee Robinson (CEO). VP Product is the top Series A hire priority to formalize product ownership and free Clay for pure technical leadership.',
  },
]

const intercompany = [
  {
    name: 'HoldCo — Dyrt Labs',
    provides: 'Platform, GMs, EHS standards, G&A',
    flow: 'Billback fees from OpCos',
    flowColor: 'text-green-700',
  },
  {
    name: 'OpCo × 10',
    provides: 'Physical revenue from customer contracts',
    flow: 'Pays HoldCo platform + management fee',
    flowColor: 'text-blue-700',
  },
  {
    name: 'ManufacturingCo',
    provides: 'Bins + hardware to OpCos at cost',
    flow: 'Cost-basis supply · CapEx off HoldCo books',
    flowColor: 'text-amber-700',
  },
]

export function AnalystTab() {
  return (
    <div>
      <NoteBox>
        Key structural decisions, anticipated investor questions, and intercompany mechanics
        for Series A pitch preparation and board review.
      </NoteBox>

      <SectionLabel>Structural rationale</SectionLabel>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {rationale.map(({ title, body }) => (
          <div key={title} className="bg-slate-50 border border-slate-200 rounded-lg p-3.5">
            <p className="text-[13px] font-bold text-slate-900 mb-2">{title}</p>
            <p className="text-[12px] text-slate-600 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

      <SectionLabel>Anticipated investor questions</SectionLabel>
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6 space-y-4">
        {qanda.map(({ q, a }) => (
          <div key={q}>
            <p className="text-[12px] font-semibold text-blue-800 mb-1">{q}</p>
            <p className="text-[12px] text-slate-600 leading-relaxed">{a}</p>
          </div>
        ))}
      </div>

      <SectionLabel>Intercompany flow</SectionLabel>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {intercompany.map(({ name, provides, flow, flowColor }) => (
          <div key={name} className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
            <p className="text-[12px] font-bold text-slate-900 mb-1">{name}</p>
            <p className="text-[11px] text-slate-500 mb-2">{provides}</p>
            <p className="text-[18px] text-slate-300">⇅</p>
            <p className={`text-[11px] font-semibold mt-1 ${flowColor}`}>{flow}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
