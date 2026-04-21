import { Badge } from './Badge'
import type { CSuiteRole } from '../types'

const topBorder: Record<string, string> = {
  green: 'border-t-green-500',
  blue:  'border-t-blue-500',
  amber: 'border-t-amber-500',
  gray:  'border-t-slate-300',
}

const labelColor: Record<string, string> = {
  green: 'text-green-800',
  blue:  'text-blue-800',
  amber: 'text-amber-800',
  gray:  'text-slate-500',
}

interface CsuiteGridProps {
  roles: CSuiteRole[]
}

export function CsuiteGrid({ roles }: CsuiteGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-6">
      {roles.map((role, i) => (
        <div
          key={i}
          className={`bg-white border border-slate-200 border-t-[3px] rounded-lg p-3 ${topBorder[role.color]}`}
        >
          <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${labelColor[role.color]}`}>
            {role.label}
          </p>
          <p className="text-[13px] font-bold text-slate-900 leading-tight">{role.name}</p>
          <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">{role.role}</p>
          {role.salary && (
            <p className="text-[11px] font-medium text-slate-400 mt-1">{role.salary}</p>
          )}
          <div className="mt-2 flex gap-1 flex-wrap">
            <Badge status={role.status} />
            {role.promotion && (
              <span className="inline-flex items-center text-[10px] font-medium text-slate-400 italic">
                promotion path
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
