import { PORTFOLIO_DATA } from "../config";
import { WindowChrome } from "./WindowChrome";

export function About() {
    const { about, experience } = PORTFOLIO_DATA;

    return (
        <WindowChrome title="profil.txt">
            <section id="about" className="text-sm">
                <h2 className="font-display text-lg font-bold m-0">Profil</h2>
                <p className="mt-3 leading-relaxed">{about.bio}</p>
                <ul className="mt-4 space-y-1.5 text-sm list-disc pl-4">
                    {about.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
                <p className="mt-5 font-mono text-[11px] text-[#0a0a0a]">
                    {about.tools.join("  ·  ")}
                </p>
                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    {experience.map((exp) => (
                        <div key={exp.company} className="border border-[#1b1b1b]/20 bg-white p-3">
                            <p className="font-mono text-[10px] text-[#0a0a0a] m-0">{exp.year}</p>
                            <p className="mt-1 font-semibold m-0">{exp.role}</p>
                            <p className="text-[#1b1b1b]/65 text-xs mt-0.5">{exp.company}</p>
                        </div>
                    ))}
                </div>
            </section>
        </WindowChrome>
    );
}
