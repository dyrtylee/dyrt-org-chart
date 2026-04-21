interface SectionLabelProps {
  children: React.ReactNode
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-5 mb-2">
      {children}
    </p>
  )
}
