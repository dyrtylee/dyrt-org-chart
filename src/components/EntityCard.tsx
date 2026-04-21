import type { EntityColor } from '../types'

interface EntityCardProps {
  eyebrow: string
  name: string
  description: string
  owns: string
  headcountNow: string
  headcountTarget: string
  tag: string
  color: EntityColor
}

const colorMap: Record<EntityColor, { band: string; eyebrow: string; target: string; tag: string }> = {
  green: {
    band:    'bg-green-500',
    eyebrow: 'text-green-800',
    target:  'text-green-700 font-semibold',
    tag:     'bg-green-100 text-green-800 border-green-300',
  },
  blue: {
    band:    'bg-blue-500',
    eyebrow: 'text-blue-800',
    target:  'text-blue-700 font-semibold',
    tag:     'bg-blue-100 text-blue-800 border-blue-300',
  },
  amber: {
    band:    'bg-amber-500',
    eyebrow: 'text-amber-800',
    target:  'text-amber-700 font-semibold',
    tag:     'bg-amber-100 text-amber-800 border-amber-300',
  },
}

export function EntityCard({ eyebrow, name, description, owns, headcountNow, headcountTarget, tag, color }: EntityCardProps) {
  const c = colorMap[color]
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      <div className={`h-1 ${c.band}`} />
      <div className="p-4">
        <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${c.eyebrow}`}>{eyebrow}</p>
        <p className="text-[15px] font-bold text-slate-900 mb-2 tracking-tight">{name}</p>
        <p className="text-[12px] text-slate-500 leading-relaxed mb-3">{description}</p>
        <div className="border-t border-slate-100 pt-2 mb-2">
          <p className="text-[12px] text-slate-500 leading-loose">{owns}</p>
        </div>
        <p className="text-[12px] text-slate-500">
          Now: <strong className="text-slate-800">{headcountNow}</strong>
          {' · '}
          Target: <strong className={c.target}>{headcountTarget}</strong>
        </p>
        <span className={`inline-block mt-2 text-[10px] font-semibold px-1.5 py-0.5 rounded border ${c.tag}`}>
          {tag}
        </span>
      </div>
    </div>
  )
}
