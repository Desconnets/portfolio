import { PORTFOLIO_DATA } from "../config";
import { HeroPortrait } from "./PhotoFrame";
import { WindowChrome } from "./WindowChrome";

export const Hero = () => {
    const { hero } = PORTFOLIO_DATA;
    const portrait = hero.photos?.[0] || "/refs/perso/cristo-cv.jpg";

    return (
        <WindowChrome title="portefolio.exe">
            <nav className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] text-[#0a0a0a] mb-6">
                <a href="#about" className="underline decoration-[#39ff14] decoration-2 underline-offset-4">
                    profil
                </a>
                <a href="#projects" className="underline decoration-[#39ff14] decoration-2 underline-offset-4">
                    réalisations
                </a>
                <a href="#contact" className="underline decoration-[#39ff14] decoration-2 underline-offset-4">
                    contact
                </a>
            </nav>
            <div className="grid sm:grid-cols-[180px_1fr] gap-4 sm:gap-6 items-start">
                <HeroPortrait src={portrait} alt="Cristobal Desconnets" />
                <div className="min-w-0">
                    <p className="font-mono text-[11px] text-[#0a0a0a] m-0">{hero.subtitle}</p>
                    <h1 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.04em] m-0 leading-[0.95]">
                        Cristobal
                        <br />
                        Desconnets
                    </h1>
                    <p className="mt-3 text-sm md:text-[15px] leading-relaxed max-w-lg">{hero.slogan}</p>
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.16em] text-[#0a0a0a] leading-relaxed">
                        {hero.roles.join(" · ")} · Montpellier
                    </p>
                </div>
            </div>
        </WindowChrome>
    );
};
