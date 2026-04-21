interface NoteBoxProps {
  children: React.ReactNode
  variant?: 'default' | 'blue' | 'amber'
}

export function NoteBox({ children, variant = 'default' }: NoteBoxProps) {
  const styles: Record<string, string> = {
    default: 'bg-slate-50 border-slate-200 text-slate-600',
    blue:    'bg-blue-50 border-blue-200 text-blue-800',
    amber:   'bg-amber-50 border-amber-200 text-amber-800',
  }
  return (
    <div className={`border rounded-lg px-4 py-3 text-[13px] leading-relaxed mb-5 ${styles[variant]}`}>
      {children}
    </div>
  )
}
