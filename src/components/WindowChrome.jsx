export function WindowChrome({ title, children, className = "" }) {
    return (
        <section className={`border-2 border-[#0a0a0a] bg-paper shadow-[4px_4px_0_#39ff14] sm:shadow-[8px_8px_0_#39ff14] ${className}`}>
            <header className="flex items-center justify-between gap-3 bg-[#0a0a0a] text-[#d4ff00] px-3 py-1.5">
                <span className="font-mono text-[11px] tracking-wide truncate">{title}</span>
                <span className="flex gap-1 shrink-0" aria-hidden>
                    <i className="w-3 h-3 bg-[#d4ff00] border border-[#0a0a0a]" />
                    <i className="w-3 h-3 bg-[#39ff14] border border-[#0a0a0a]" />
                    <i className="w-3 h-3 bg-white border border-[#0a0a0a]" />
                </span>
            </header>
            <div className="p-4 sm:p-5 md:p-7">{children}</div>
        </section>
    );
}
