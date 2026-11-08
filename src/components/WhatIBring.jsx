import { PORTFOLIO_DATA } from "../config";

export function WhatIBring() {
    const items = PORTFOLIO_DATA.whatIBring || [];

    return (
        <section className="bg-[#1a1c24] text-[#f4f4f2] font-sans border-y border-[#1a1c24]">
            <div className="max-w-5xl mx-auto px-6 md:px-10 py-12 md:py-16">
                <h2 className="text-lg font-semibold m-0">Pour Prizm</h2>
                <ul className="mt-6 space-y-3">
                    {items.map((item) => (
                        <li key={item} className="text-sm md:text-base text-[#f4f4f2]/90 flex gap-3">
                            <span className="text-[#6b00dd] shrink-0">—</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
