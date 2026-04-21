export type HiringStatus = 'current' | 'phase1' | 'phase2' | 'template';
export type TabId = 'holdco' | 'opco' | 'mfgco' | 'analyst';
export type EntityColor = 'green' | 'blue' | 'amber';
export type CSuiteColor = 'green' | 'blue' | 'amber' | 'gray';

export interface OrgNodeData {
  name: string;
  title: string;
  note?: string;
  status: HiringStatus;
  highlight?: boolean;
  reports?: OrgNodeData[];
}

export interface CSuiteRole {
  label: string;
  name: string;
  role: string;
  status: HiringStatus;
  color: CSuiteColor;
  promotion?: boolean;
}

export interface Person {
  name: string;
  role: string;
}
