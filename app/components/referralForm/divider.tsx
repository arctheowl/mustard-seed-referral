
interface DividerProps {
  title: string;
}

export default function Divider({ title }: DividerProps) {
  return (
    <div className="relative py-10">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-400" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-slate-200 px-3 text-base font-semibold text-gray-900">{title}</span>
      </div>
    </div>
  )
}
