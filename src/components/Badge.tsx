import type { HiringStatus } from '../types'

interface BadgeProps {
  status: HiringStatus
}

const config: Record<HiringStatus, { label: string; className: string }> = {
  current:  { label: 'Current',        className: 'bg-green-100 text-green-800 border border-green-300' },
  phase1:   { label: 'Phase 1',        className: 'bg-blue-100 text-blue-800 border border-blue-300' },
  phase2:   { label: 'Phase 2',        className: 'bg-gray-100 text-gray-700 border border-gray-300' },
  template: { label: 'Per site',       className: 'bg-blue-50 text-blue-700 border border-blue-200' },
}

export function Badge({ status }: BadgeProps) {
  const { label, className } = config[status]
  return (
    <span className={`inline-flex items-center text-[11px] font-semibold px-2 py-0.5 rounded whitespace-nowrap flex-shrink-0 ${className}`}>
      {label}
    </span>
  )
}
