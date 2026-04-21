import type { Person } from '../types'

interface PersonGridProps {
  people: Person[]
  label?: string
}

export function PersonGrid({ people, label }: PersonGridProps) {
  return (
    <div>
      {label && (
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 mt-5">
          {label}
        </p>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5">
        {people.map((p, i) => (
          <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-2.5">
            <p className="text-[13px] font-semibold text-slate-900 leading-tight">{p.name}</p>
            <p className="text-[11px] text-slate-500 mt-0.5">{p.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
