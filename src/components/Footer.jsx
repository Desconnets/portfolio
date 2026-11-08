import { PORTFOLIO_DATA } from "../config";

export function Footer() {
    const { contact } = PORTFOLIO_DATA;
    return (
        <p className="px-1 pb-4 font-mono text-[11px] text-[#0a0a0a]">
            {contact.email} · {contact.phone} · {contact.location}
        </p>
    );
}
