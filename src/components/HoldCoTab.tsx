import { OrgNode } from './OrgNode'
import { CsuiteGrid } from './CsuiteGrid'
import { NoteBox } from './NoteBox'
import { SectionLabel } from './SectionLabel'
import { holdcoOrg, csuiteRoles } from '../data'

export function HoldCoTab() {
  return (
    <div>
      <NoteBox>
        Dyrt Labs is the intelligence and value layer — customer contracts, recurring platform revenue,
        proprietary technology, capital deployment, and all G&A shared services live here.
        A full c-suite is the Series A and B buildout target. Existing employees are promotion
        candidates where noted.
      </NoteBox>

      <SectionLabel>C-suite target — all direct reports to CEO</SectionLabel>
      <CsuiteGrid roles={csuiteRoles} />

      <SectionLabel>Full org tree — click any node to collapse</SectionLabel>
      <OrgNode node={holdcoOrg} />
    </div>
  )
}
