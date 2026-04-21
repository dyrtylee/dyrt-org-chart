import type { OrgNodeData, CSuiteRole, Person } from '../types'

// ── HoldCo ──────────────────────────────────────────────────────────────

export const csuiteRoles: CSuiteRole[] = [
  { label: 'CEO',             name: 'Lee Robinson',       role: 'Strategy, capital, board',        status: 'current', color: 'green', salary: '$175K–$200K' },
  { label: 'COO',             name: 'Chelsea Davidoff →', role: 'Head of Operations',              status: 'current', color: 'blue',  salary: '$180K–$210K', promotion: true },
  { label: 'Chief of Staff',  name: 'TBH',                role: 'Cross-functional & CEO office',   status: 'phase1',  color: 'blue',  salary: '$115K–$135K' },
  { label: 'VP Product',      name: 'TBH',                role: 'Product strategy & roadmap',      status: 'phase1',  color: 'blue',  salary: '$195K–$225K' },
  { label: 'VP Sales / CRO',  name: 'TBH',                role: 'Revenue & customer success',      status: 'phase1',  color: 'blue',  salary: '$175K–$205K + OTE' },
  { label: 'CFO',             name: 'TBH',                role: 'Finance & capital',               status: 'phase1',  color: 'blue',  salary: '$205K–$240K' },
  { label: 'VP Marketing',    name: 'Jackson Cantrell →', role: 'Marketing & PR',                  status: 'current', color: 'blue',  salary: '$145K–$170K', promotion: true },
  { label: 'VP Gov. Affairs', name: 'TBH',                role: 'Policy & municipal',              status: 'phase1',  color: 'blue',  salary: '$150K–$175K' },
  { label: 'General Counsel', name: 'TBH',                role: 'Currently: WSGR (external)',      status: 'phase2',  color: 'gray',  salary: '$205K–$240K' },
  { label: 'VP People & HR',  name: 'TBH',                role: 'Talent for 300+ hire plan',       status: 'phase2',  color: 'gray',  salary: '$155K–$180K' },
  { label: 'Mfg. Manager',    name: 'TBH',                role: 'ManufacturingCo lead',            status: 'phase1',  color: 'amber', salary: '$125K–$145K' },
]

export const holdcoOrg: OrgNodeData = {
  name: 'Lee Robinson',
  title: 'CEO, Dyrt Labs, Inc.',
  note: 'HoldCo CEO · direct oversight of all OpCo sites · ManufacturingCo managed as captive from HoldCo',
  status: 'current',
  salary: '$175K–$200K',
  reports: [
    {
      name: 'Chief of Staff',
      title: 'TBH — Series A · manages CEO office, OKR cadence, investor prep, and cross-functional initiatives',
      note: 'Fills the coordination gap between CEO and all function leads until the full c-suite is seated — typically the 2nd or 3rd Series A hire',
      status: 'phase1',
      salary: '$115K–$135K',
    },
    {
      name: 'Chelsea Davidoff',
      title: 'COO / Head of Operations · promotion candidate',
      note: 'Manages regional GMs · GMs matrix into OpCo sites on a managed-services basis',
      status: 'current',
      salary: '$180K–$210K',
      reports: [
        {
          name: 'Regional GM — LA / SoCal cluster A',
          title: 'General Manager · manages sites 2–3 in LA/SoCal',
          note: 'HoldCo employee · Phase 2 expands to new geographies as additional sites open',
          status: 'phase1',
          salary: '$115K–$135K',
        },
        {
          name: 'Regional GM — LA / SoCal cluster B',
          title: 'General Manager · manages sites 4–5 in LA/SoCal',
          status: 'phase1',
          salary: '$115K–$135K',
        },
        {
          name: 'EHS Director',
          title: 'Environmental Health & Safety Director · sets standards across all sites',
          note: 'Central EHS authority — per-site EHS leads enforce standards under dotted-line oversight',
          status: 'phase1',
          salary: '$110K–$130K',
        },
        {
          name: 'Payroll & HR Coordinator',
          title: 'TBH — Phase 1 · manages payroll, onboarding admin, and benefits enrollment across all entities',
          note: 'Gap: cannot wait for VP People (Phase 2) to handle multistate payroll compliance across 3 entities — this role bridges until the People function is built',
          status: 'phase1',
          salary: '$60K–$75K',
        },
        {
          name: 'IT / Systems Manager',
          title: 'TBH — Phase 1 · manages internal IT, device fleet, SSO, network, and operational tooling',
          note: 'Gap: 35+ employees across 3 entities, 3 locations, and a SaaS platform require dedicated IT ownership — currently handled ad-hoc',
          status: 'phase1',
          salary: '$90K–$110K',
        },
        {
          name: 'Jake McMahon',
          title: 'Head of Operations · logistics, field work, shared services coordination',
          status: 'current',
          salary: '$95K–$115K',
          reports: [
            { name: 'Luis Lopez', title: 'Logistics & Farm Coordinator · Animal Feed Diversion Program', status: 'current', salary: '$60K–$75K' },
          ],
        },
      ],
    },
    {
      name: 'VP Product',
      title: 'TBH — Series A · owns product strategy and roadmap · app.dyrt.co, Scandroid, route optimization',
      note: 'Priority hire — Clay Cantrell and engineering team currently report to CEO until this role is filled',
      status: 'phase1',
      salary: '$195K–$225K',
      reports: [
        {
          name: 'Clay Cantrell',
          title: 'Lead Engineer · platform architecture, infrastructure, and technical execution',
          status: 'current',
          salary: '$165K–$190K',
          reports: [
            { name: 'Adam Ta',           title: 'Software Engineer · Clay.com lead gen integration', status: 'current', salary: '$125K–$150K' },
            { name: 'Aarav Babu',        title: 'Software Engineer',                                status: 'current', salary: '$125K–$150K' },
            { name: 'Software Engineer', title: 'Software Engineer',                                status: 'phase1',  salary: '$125K–$150K' },
            { name: 'Software Engineer', title: 'Software Engineer',                                status: 'phase1',  salary: '$125K–$150K' },
            { name: 'Software Engineer', title: 'Software Engineer',                                status: 'phase2',  salary: '$125K–$150K' },
            { name: 'Software Engineer', title: 'Software Engineer',                                status: 'phase2',  salary: '$125K–$150K' },
          ],
        },
        {
          name: 'Data Analyst',
          title: 'TBH — Phase 1 · platform metrics, unit economics reporting, and investor KPI dashboards',
          note: 'Gap: Dyrt generates rich operational data (routes, weights, diversion rates) with no dedicated analytics layer — critical for Series B narrative',
          status: 'phase1',
          salary: '$85K–$100K',
        },
      ],
    },
    {
      name: 'VP Sales / CRO',
      title: 'TBH — Series A · owns revenue growth and customer retention',
      status: 'phase1',
      salary: '$175K–$205K + OTE',
      reports: [
        { name: 'Nick DeAngelis', title: 'Sales Representative', status: 'current', salary: '$68K–$82K + OTE' },
        { name: 'Anthony Gomez',  title: 'Sales Representative', status: 'current', salary: '$68K–$82K + OTE' },
        { name: 'Account Manager / Customer Success', title: 'Customer Success Manager · manages existing account health for managed-services retention', status: 'phase1', salary: '$75K–$92K' },
        { name: 'Sales Operations Analyst', title: 'Sales Operations Analyst · CRM admin, pipeline reporting, quota tracking, and commission calculation', note: 'Gap: VP Sales cannot manage a 5-rep team without ops support — no CRM hygiene or rep performance visibility currently', status: 'phase1', salary: '$78K–$95K' },
        { name: 'Sales Representative', title: 'Sales Representative', status: 'phase1', salary: '$68K–$82K + OTE' },
        { name: 'Sales Representative', title: 'Sales Representative', status: 'phase1', salary: '$68K–$82K + OTE' },
        { name: 'Sales Representative', title: 'Sales Representative', status: 'phase1', salary: '$68K–$82K + OTE' },
      ],
    },
    {
      name: 'CFO',
      title: 'TBH — Series A · capital structure, intercompany agreements, investor reporting',
      status: 'phase1',
      salary: '$205K–$240K',
      reports: [
        {
          name: 'Finance Manager',
          title: 'Finance Manager · FP&A, budget vs. actuals, and intercompany accounting',
          status: 'phase1',
          salary: '$90K–$110K',
        },
        {
          name: 'AR / AP Specialist',
          title: 'TBH — Phase 1 · manages accounts receivable, accounts payable, and vendor invoicing across all entities',
          note: 'Gap: three legal entities with intercompany billing require dedicated AR/AP before CFO is seated — currently no owner',
          status: 'phase1',
          salary: '$55K–$68K',
        },
      ],
    },
    {
      name: 'Jackson Cantrell',
      title: 'VP Marketing · brand, PR, and demand generation · formal VP title at Phase 1',
      status: 'current',
      salary: '$145K–$170K',
      reports: [
        { name: 'Marketing Manager', title: 'Marketing Manager', status: 'phase1', salary: '$75K–$90K' },
        { name: 'Content Manager',   title: 'Content Manager',   status: 'phase1', salary: '$60K–$75K' },
      ],
    },
    {
      name: 'VP Government Affairs',
      title: 'TBH — Series A · municipal contracts, SB 1383 programs, regulatory partnerships',
      status: 'phase1',
      salary: '$150K–$175K',
      reports: [
        { name: 'Government Partnerships Manager', title: 'Partnerships Manager · city and county relationships', status: 'phase1', salary: '$85K–$105K' },
      ],
    },
    {
      name: 'General Counsel',
      title: 'TBH — Series B · currently handled by WSGR (Scott Zimmermann)',
      note: 'Three legal entities, IP, customer contracts, government agreements, and intercompany docs require dedicated counsel',
      status: 'phase2',
      salary: '$205K–$240K',
    },
    {
      name: 'VP People & HR',
      title: 'TBH — Series B · owns talent strategy for 300+ person scale',
      note: 'Must be hired before OpCo expansion accelerates — cannot staff 10 sites without a people function',
      status: 'phase2',
      salary: '$155K–$180K',
      reports: [
        { name: 'HR Manager', title: 'HR Manager', status: 'phase2', salary: '$80K–$95K' },
      ],
    },
    {
      name: 'Manufacturing Manager',
      title: 'Dedicated HoldCo employee · reports to CEO · manages ManufacturingCo as captive supplier — TBH Series A',
      note: 'Las Cruces, NM · No separate entity president — managed directly from HoldCo CEO · see ManufacturingCo tab',
      status: 'phase1',
      salary: '$125K–$145K',
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
  salary: '$115K–$135K',
  reports: [
    {
      name: 'Site Operations Manager',
      title: 'Dedicated on-site manager · day-to-day accountability for one physical location',
      note: 'Promotion path from Floor Supervisor · interface between GM and floor operations',
      status: 'template',
      salary: '$68K–$85K',
      reports: [
        {
          name: 'Office Manager',
          title: 'Office Manager · facility admin, vendor invoices, permits, supply ordering, employee onboarding paperwork',
          note: 'Gap filled: each site handles its own compliance paperwork (health permits, city licenses, safety filings) and purchasing — without this role it falls to the Site Ops Manager, blocking operational capacity',
          status: 'template',
          salary: '$52K–$65K',
        },
        {
          name: 'Floor Supervisor',
          title: 'Floor Operations Supervisor',
          status: 'template',
          salary: '$52K–$65K',
          reports: [
            { name: 'EHS Lead', title: 'EHS Lead · enforces HoldCo EHS standards · dotted-line to HoldCo EHS Director', status: 'template', salary: '$58K–$72K' },
            { name: 'Floor Team Lead',     title: 'Floor Team Lead',     status: 'template', salary: '$42K–$50K' },
            { name: 'Assistant Team Lead', title: 'Assistant Team Lead', status: 'template', salary: '$38K–$46K' },
            { name: 'Composters (×2)',     title: 'Composting Operator', status: 'template', salary: '$40K–$48K' },
            { name: 'Organics Sorters (×7)', title: 'Organics Sorter / General Laborer', status: 'template', salary: '$36K–$44K' },
            { name: 'Bin Washers (×2)',    title: 'Bin Washer / General Laborer',        status: 'template', salary: '$36K–$44K' },
          ],
        },
        {
          name: 'Driving Lead',
          title: 'Logistics & Driving Lead · route planning and driver management',
          status: 'template',
          salary: '$52K–$62K',
          reports: [
            { name: 'Drivers (×4)', title: 'Driver / General Laborer · scheduled pickup routes', status: 'template', salary: '$46K–$55K' },
          ],
        },
      ],
    },
  ],
}

export const opcoSite1Staff: Person[] = [
  { name: 'Site Operations Manager', role: 'TBH — gap: Site 1 has no named SOM; Floor Supervisor (Daniel Del Real Jimenez) is acting in role' },
  { name: 'Daniel Del Real Jimenez', role: 'Floor Supervisor (acting SOM)' },
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
  note: 'Facility: Las Cruces, NM · No separate entity president — controlled directly from HoldCo CEO',
  status: 'phase1',
  salary: '$125K–$145K',
  highlight: true,
  reports: [
    { name: 'Sustaining Engineer',     title: 'Sustaining Engineer · existing product maintenance and improvement',             status: 'phase1', salary: '$92K–$112K' },
    { name: 'NPI Engineer',            title: 'New Product Introduction Engineer · next-generation bin development',            status: 'phase1', salary: '$100K–$122K' },
    { name: 'QC Engineer',             title: 'Quality Control Engineer · ensures bins meet spec before OpCo deployment',       status: 'phase1', salary: '$88K–$108K' },
    { name: 'Procurement Coordinator', title: 'Materials sourcing and supply chain management',                                  status: 'phase1', salary: '$68K–$82K' },
    {
      name: 'Manufacturing Supervisor',
      title: 'Manufacturing Supervisor · daily production management',
      status: 'phase1',
      salary: '$68K–$85K',
      reports: [
        { name: 'Manufacturing Team (×50)', title: 'General Manufacturing Staff', status: 'phase2', salary: '$38K–$46K' },
      ],
    },
  ],
}

// ── Compensation summary (for Analyst tab) ──────────────────────────────

export const compSummary = [
  {
    entity: 'HoldCo — Dyrt Labs',
    color: 'green',
    phases: [
      { phase: 'Current (12 staff)',   annualCost: '~$1.8M',  note: 'Named employees incl. Lee, Chelsea, Jackson, Clay, Adam, Aarav, Jake, Luis, Nick, Anthony' },
      { phase: 'Phase 1 adds (+22)',   annualCost: '+$4.2M',  note: 'Chief of Staff, VP hires, IT Mgr, Payroll Coord, Data Analyst, Sales Ops, AR/AP, Gov Affairs, Engineers' },
      { phase: 'Phase 2 adds (+5)',    annualCost: '+$1.1M',  note: 'General Counsel, VP People, HR Mgr, Finance Mgr, 2× Engineers' },
    ],
  },
  {
    entity: 'OpCo — per site (~23 staff)',
    color: 'blue',
    phases: [
      { phase: 'Per site total',       annualCost: '~$1.55M', note: 'SOM, Office Mgr, Floor Supv, EHS Lead, 2 TLs, 2 Composters, 7 Sorters, 2 Bin Washers, Driving Lead, 4 Drivers' },
      { phase: '5-site Phase 1',       annualCost: '~$7.75M', note: 'Excludes Regional GMs (HoldCo-employed) and EHS Director (HoldCo shared service)' },
    ],
  },
  {
    entity: 'ManufacturingCo — Las Cruces, NM',
    color: 'amber',
    phases: [
      { phase: 'Phase 1 (6 roles)',    annualCost: '~$560K',  note: 'Mfg Manager, 3 Engineers, Procurement Coord, Mfg Supervisor · NM labor market advantage vs. LA' },
      { phase: 'Phase 2 (+50 team)',   annualCost: '+$2.1M',  note: 'Manufacturing Team at $38K–$46K average · Las Cruces wages approx. 15–20% below LA equivalents' },
    ],
  },
]
