import type { OrgNodeData, CSuiteRole, Person } from '../types'

// ── HoldCo ──────────────────────────────────────────────────────────────

export const csuiteRoles: CSuiteRole[] = [
  { label: 'CEO',             name: 'Lee Robinson',       role: 'Strategy, capital, board',        status: 'current', color: 'green' },
  { label: 'COO',             name: 'Chelsea Davidoff →', role: 'Head of Operations',              status: 'current', color: 'blue', promotion: true },
  { label: 'VP Product',      name: 'TBH',                role: 'Product strategy & roadmap',      status: 'phase1',  color: 'blue' },
  { label: 'VP Sales / CRO',  name: 'TBH',                role: 'Revenue & customer success',      status: 'phase1',  color: 'blue' },
  { label: 'CFO',             name: 'TBH',                role: 'Finance & capital',               status: 'phase1',  color: 'blue' },
  { label: 'VP Marketing',    name: 'Jackson Cantrell →', role: 'Marketing & PR',                  status: 'current', color: 'blue', promotion: true },
  { label: 'VP Gov. Affairs', name: 'TBH',                role: 'Policy & municipal',              status: 'phase1',  color: 'blue' },
  { label: 'General Counsel', name: 'TBH',                role: 'Currently: WSGR (external)',      status: 'phase2',  color: 'gray' },
  { label: 'VP People & HR',  name: 'TBH',                role: 'Talent for 300+ hire plan',       status: 'phase2',  color: 'gray' },
  { label: 'Mfg. Manager',    name: 'TBH',                role: 'ManufacturingCo lead',            status: 'phase1',  color: 'amber' },
]

export const holdcoOrg: OrgNodeData = {
  name: 'Lee Robinson',
  title: 'CEO, Dyrt Labs, Inc.',
  note: 'HoldCo CEO · direct oversight of all OpCo sites · ManufacturingCo managed as captive from HoldCo',
  status: 'current',
  reports: [
    {
      name: 'Chelsea Davidoff',
      title: 'COO / Head of Operations · promotion candidate',
      note: 'Manages regional GMs · GMs matrix into OpCo sites on a managed-services basis',
      status: 'current',
      reports: [
        {
          name: 'Regional GM — LA / SoCal cluster A',
          title: 'General Manager · manages sites 2–3 in LA/SoCal',
          note: 'HoldCo employee · Phase 2 expands to new geographies as additional sites open',
          status: 'phase1',
        },
        {
          name: 'Regional GM — LA / SoCal cluster B',
          title: 'General Manager · manages sites 4–5 in LA/SoCal',
          status: 'phase1',
        },
        {
          name: 'EHS Director',
          title: 'Environmental Health & Safety Director · sets standards across all sites',
          note: 'Central EHS authority — per-site EHS leads enforce standards under dotted-line oversight',
          status: 'phase1',
        },
        {
          name: 'Jake McMahon',
          title: 'Head of Operations · logistics, field work, shared services coordination',
          status: 'current',
          reports: [
            { name: 'Luis Lopez', title: 'Logistics & Farm Coordinator · Animal Feed Diversion Program', status: 'current' },
          ],
        },
      ],
    },
    {
      name: 'VP Product',
      title: 'TBH — Series A · owns product strategy and roadmap · app.dyrt.co, Scandroid, route optimization',
      note: 'Priority hire — Clay Cantrell and engineering team currently report to CEO until this role is filled',
      status: 'phase1',
      reports: [
        {
          name: 'Clay Cantrell',
          title: 'Lead Engineer · platform architecture, infrastructure, and technical execution',
          status: 'current',
          reports: [
            { name: 'Adam Ta',      title: 'Software Engineer · Clay.com lead gen integration', status: 'current' },
            { name: 'Aarav Babu',   title: 'Software Engineer',                                status: 'current' },
            { name: 'Software engineer', title: 'Software Engineer', status: 'phase1' },
            { name: 'Software engineer', title: 'Software Engineer', status: 'phase1' },
            { name: 'Software engineer', title: 'Software Engineer', status: 'phase2' },
            { name: 'Software engineer', title: 'Software Engineer', status: 'phase2' },
          ],
        },
      ],
    },
    {
      name: 'VP Sales / CRO',
      title: 'TBH — Series A · owns revenue growth and customer retention',
      status: 'phase1',
      reports: [
        { name: 'Nick DeAngelis', title: 'Sales Representative', status: 'current' },
        { name: 'Anthony Gomez',  title: 'Sales Representative', status: 'current' },
        { name: 'Account Manager / Customer Success', title: 'Customer Success Manager · manages existing account health for managed services retention', status: 'phase1' },
        { name: 'Sales representative', title: 'Sales Representative', status: 'phase1' },
        { name: 'Sales representative', title: 'Sales Representative', status: 'phase1' },
        { name: 'Sales representative', title: 'Sales Representative', status: 'phase1' },
      ],
    },
    {
      name: 'CFO',
      title: 'TBH — Series A · capital structure, intercompany agreements, investor reporting',
      status: 'phase1',
      reports: [
        { name: 'Finance Manager', title: 'Finance Manager', status: 'phase2' },
      ],
    },
    {
      name: 'Jackson Cantrell',
      title: 'VP Marketing · brand, PR, and demand generation · formal VP title at Phase 1',
      status: 'current',
      reports: [
        { name: 'Marketing Manager', title: 'Marketing Manager', status: 'phase1' },
        { name: 'Content Manager',   title: 'Content Manager',   status: 'phase1' },
      ],
    },
    {
      name: 'VP Government Affairs',
      title: 'TBH — Series A · municipal contracts, SB 1383 programs, regulatory partnerships',
      status: 'phase1',
      reports: [
        { name: 'Government Partnerships Manager', title: 'Partnerships Manager · city and county relationships', status: 'phase1' },
      ],
    },
    {
      name: 'General Counsel',
      title: 'TBH — Series B · currently handled by WSGR (Scott Zimmermann)',
      note: 'Three legal entities, IP, customer contracts, government agreements, and intercompany docs require dedicated counsel',
      status: 'phase2',
    },
    {
      name: 'VP People & HR',
      title: 'TBH — Series B · owns talent strategy for 300+ person scale',
      note: 'Must be hired before OpCo expansion accelerates — cannot staff 10 sites without a people function',
      status: 'phase2',
      reports: [
        { name: 'HR Manager', title: 'HR Manager', status: 'phase2' },
      ],
    },
    {
      name: 'Manufacturing Manager',
      title: 'Dedicated HoldCo employee · reports to CEO · manages ManufacturingCo as captive supplier — TBH Series A',
      note: 'No separate entity president — managed directly from HoldCo CEO · see ManufacturingCo tab',
      status: 'phase1',
      highlight: true,
    },
  ],
}

// ── OpCo ────────────────────────────────────────────────────────────────

export const opcoTemplate: OrgNodeData = {
  name: 'Regional GM (HoldCo employee — matrix)',
  title: 'Manages 4–5 sites within a geographic cluster · employed by Dyrt Labs · assigned by COO',
  note: 'Accountable for regional P&L · manages each Site Operations Manager below',
  status: 'phase1',
  reports: [
    {
      name: 'Site Operations Manager',
      title: 'Dedicated on-site manager · day-to-day accountability for one physical location',
      note: 'Promotion path from Floor Supervisor · interface between GM and floor operations',
      status: 'template',
      reports: [
        {
          name: 'Floor Supervisor',
          title: 'Floor Operations Supervisor',
          status: 'template',
          reports: [
            { name: 'EHS Lead', title: 'EHS Lead · enforces HoldCo EHS standards · dotted-line to HoldCo EHS Director', status: 'template' },
            { name: 'Floor Team Lead',     title: 'Floor Team Lead',     status: 'template' },
            { name: 'Assistant Team Lead', title: 'Assistant Team Lead', status: 'template' },
            { name: 'Composters (×2)',     title: 'Composting Operator', status: 'template' },
            { name: 'Organics Sorters (×7)', title: 'Organics Sorter / General Laborer', status: 'template' },
            { name: 'Bin Washers (×2)',    title: 'Bin Washer / General Laborer',        status: 'template' },
          ],
        },
        {
          name: 'Driving Lead',
          title: 'Logistics & Driving Lead · route planning and driver management',
          status: 'template',
          reports: [
            { name: 'Drivers (×4)', title: 'Driver / General Laborer · scheduled pickup routes', status: 'template' },
          ],
        },
      ],
    },
  ],
}

export const opcoSite1Staff: Person[] = [
  { name: 'Daniel Del Real Jimenez', role: 'Floor Supervisor' },
  { name: 'Mia Calhoun',             role: 'EHS Lead' },
  { name: 'Justin Kevech',           role: 'Composting Operations' },
  { name: 'Randal Cardenas',         role: 'Floor Team Lead' },
  { name: 'Carlos Sanchez',          role: 'Assistant Team Lead' },
  { name: 'Jesus Doran',             role: 'Composter' },
  { name: 'Oliver Allison',          role: 'Organics Sorter' },
  { name: 'Guillermo Berzunza',      role: 'Organics Sorter' },
  { name: 'Estevan Cano',            role: 'Organics Sorter' },
  { name: 'Alfonso Garcia',          role: 'Organics Sorter' },
  { name: 'Gio Guillen-Solorzano',   role: 'Organics Sorter' },
  { name: 'Mark Ocampo',             role: 'Organics Sorter' },
  { name: 'Jason Robinson',          role: 'Bin Washer' },
  { name: 'Maderick Martinez',       role: 'Driving Lead' },
  { name: 'Brandon Kennelley',       role: 'Driver' },
  { name: 'Jordan Moore',            role: 'Driver' },
  { name: 'Marvin Payne',            role: 'Driver' },
]

// ── ManufacturingCo ──────────────────────────────────────────────────────

export const mfgcoOrg: OrgNodeData = {
  name: 'Manufacturing Manager',
  title: 'Dedicated HoldCo employee · reports to CEO · manages ManufacturingCo as captive supplier — TBH Series A',
  note: 'No separate entity president — controlled directly from HoldCo CEO',
  status: 'phase1',
  highlight: true,
  reports: [
    { name: 'Sustaining Engineer',    title: 'Sustaining Engineer · existing product maintenance and improvement', status: 'phase1' },
    { name: 'NPI Engineer',           title: 'New Product Introduction Engineer · next-generation bin development', status: 'phase1' },
    { name: 'QC Engineer',            title: 'Quality Control Engineer · ensures bins meet spec before OpCo deployment', status: 'phase1' },
    { name: 'Procurement Coordinator', title: 'Materials sourcing and supply chain management', status: 'phase1' },
    {
      name: 'Manufacturing Supervisor',
      title: 'Manufacturing Supervisor · daily production management',
      status: 'phase1',
      reports: [
        { name: 'Manufacturing Team (×50)', title: 'General Manufacturing Staff', status: 'phase2' },
      ],
    },
  ],
}
