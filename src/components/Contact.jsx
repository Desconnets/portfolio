import { PORTFOLIO_DATA } from "../config";
import { WindowChrome } from "./WindowChrome";

export function Contact() {
    const { contact } = PORTFOLIO_DATA;

    return (
        <WindowChrome title="contact">
            <section id="contact">
                <h2 className="font-display text-lg font-bold m-0">{contact.heading}</h2>
                <p className="mt-1 text-sm text-[#1b1b1b]/70">{contact.subheading}</p>
                <div className="mt-4 space-y-1 text-sm font-mono">
                    <a href={`mailto:${contact.email}`} className="block text-[#0a0a0a] underline decoration-[#39ff14] decoration-2 underline-offset-4">
                        {contact.email}
                    </a>
                    <p className="m-0">
                        {contact.phone} · {contact.location}
                    </p>
                </div>
            </section>
        </WindowChrome>
    );
}
