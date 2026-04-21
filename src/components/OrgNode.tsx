import { useState } from 'react'
import { Badge } from './Badge'
import type { OrgNodeData } from '../types'

const borderColor: Record<string, string> = {
  current:  'border-l-green-500',
  phase1:   'border-l-blue-500',
  phase2:   'border-l-gray-300',
  template: 'border-l-blue-400',
}

const bgColor: Record<string, string> = {
  current:  'bg-green-50/40',
  phase1:   'bg-white',
  phase2:   'bg-gray-50/60',
  template: 'bg-white',
}

interface OrgNodeProps {
  node: OrgNodeData
  depth?: number
}

export function OrgNode({ node, depth = 0 }: OrgNodeProps) {
  const [expanded, setExpanded] = useState(true)
  const hasReports = (node.reports?.length ?? 0) > 0

  const warnStyle = node.highlight
    ? 'border-l-amber-500 bg-amber-50/50'
    : `${borderColor[node.status]} ${bgColor[node.status]}`

  return (
    <div className="mb-1">
      <div
        className={`flex items-start gap-2 px-3 py-2 border border-slate-200 border-l-[3px] ${warnStyle} ${hasReports ? 'cursor-pointer select-none' : ''}`}
        onClick={() => hasReports && setExpanded(e => !e)}
      >
        <div className="flex-1 min-w-0">
          <span className={`block text-[13px] font-semibold ${node.highlight ? 'text-amber-800' : 'text-slate-900'}`}>
            {node.name}
            {hasReports && (
              <span className="ml-1.5 text-slate-400 text-xs font-normal">
                {expanded ? '▾' : '▸'}
              </span>
            )}
          </span>
          <span className="block text-[12px] text-slate-500 mt-0.5 leading-snug">{node.title}</span>
          {node.note && (
            <span className="block text-[11px] text-slate-400 mt-0.5 italic leading-snug">{node.note}</span>
          )}
        </div>
        <div className="flex flex-col items-end gap-1 flex-shrink-0">
          <Badge status={node.status} />
          {node.salary && (
            <span className="text-[10px] font-medium text-slate-400 whitespace-nowrap">{node.salary}</span>
          )}
        </div>
      </div>

      {hasReports && expanded && (
        <div className="ml-4 pl-3 border-l border-dashed border-slate-300 mt-[-2px] pt-0.5 mb-0.5">
          {node.reports!.map((child, i) => (
            <OrgNode key={i} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  )
}
