export default function SectionLabel({ number, label }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 mb-3">
      <span className="font-mono text-xs font-semibold tracking-wider">[{number}]</span>
      <span className="w-1 h-1 rounded-full bg-indigo-400" />
      <span className="font-mono text-xs font-medium uppercase tracking-wider">{label}</span>
    </div>
  );
}
