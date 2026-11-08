import { useState } from "react";
import { PORTFOLIO_DATA } from "../config";
import { FeaturedPhoto, PhotoThumbs } from "./PhotoFrame";
import { WindowChrome } from "./WindowChrome";

function VideoBlock({ item, onOpen }) {
    const isShort = item.format === "short";
    return (
        <figure className="m-0">
            <button
                type="button"
                onClick={() => onOpen(item)}
                className={`w-full text-left border-2 border-[#1b1b1b] overflow-hidden shadow-[4px_4px_0_#39ff14] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#d4ff00] transition-all ${
                    isShort ? "max-w-[160px] sm:max-w-[220px]" : "max-w-full"
                }`}
            >
                <div className="relative bg-monitor" style={{ aspectRatio: isShort ? "9/16" : "16/9" }}>
                    {item.poster ? (
                        <img
                            src={item.poster}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.style.display = "none";
                            }}
                        />
                    ) : null}
                    <span className="absolute inset-0 bg-gradient-to-t from-monitor/80 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-2 right-2 font-display text-xs sm:text-sm font-semibold text-white leading-snug break-words">
                        ▶ {item.label}
                    </span>
                </div>
            </button>
        </figure>
    );
}

function PhotoGrid({ items }) {
    if (!items.length) return null;
    const [featured, ...rest] = items;
    return (
        <div className="space-y-4">
            <FeaturedPhoto item={featured} />
            <PhotoThumbs items={rest} />
        </div>
    );
}

function LinkList({ items }) {
    return (
        <ul className="m-0 p-0 list-none flex flex-col gap-2">
            {items.map((item) => (
                <li key={item.href}>
                    <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-start justify-between gap-3 border border-[#1b1b1b] bg-white px-3 py-2.5 text-sm hover:bg-[#0a0a0a] hover:text-[#d4ff00] transition-colors"
                    >
                        <span className="break-words min-w-0">{item.label}</span>
                        <span className="font-mono text-xs opacity-70">↗</span>
                    </a>
                </li>
            ))}
        </ul>
    );
}

function VideoModal({ item, onClose }) {
    if (!item) return null;
    const isShort = item.format === "short";
    return (
        <div className="fixed inset-0 z-[200] bg-monitor/95 flex items-center justify-center p-4" onClick={onClose} role="presentation">
            <button type="button" className="absolute top-4 right-4 text-white font-mono text-xs z-10" onClick={onClose}>
                fermer
            </button>
            <div
                className={`bg-black border-2 border-[#fbf8f2] ${isShort ? "w-full max-w-sm aspect-[9/16]" : "w-full max-w-4xl aspect-video"}`}
                onClick={(e) => e.stopPropagation()}
            >
                {item.local ? (
                    <video src={item.src} controls autoPlay playsInline className="w-full h-full" poster={item.poster} />
                ) : (
                    <iframe
                        title={item.label}
                        src={`${item.embed}${item.embed.includes("?") ? "&" : "?"}autoplay=1`}
                        className="w-full h-full"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    />
                )}
            </div>
        </div>
    );
}

function ProjectMedia({ project, onOpen }) {
    const items = project.media || [];
    const photos = items.filter((i) => i.kind === "photo");
    const videos = items.filter((i) => i.kind === "video");
    const links = items.filter((i) => i.kind === "link");

    return (
        <div className="mt-6 space-y-6">
            {photos.length > 0 && <PhotoGrid items={photos} />}
            {videos.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {videos.map((item) => (
                        <div
                            key={item.label}
                            className={item.format === "short" ? "justify-self-start" : "sm:col-span-2"}
                        >
                            <VideoBlock item={item} onOpen={onOpen} />
                        </div>
                    ))}
                </div>
            )}
            {links.length > 0 && (
                <div>
                    <p className="font-mono text-[11px] text-[#0a0a0a] mb-2">Livrables</p>
                    <LinkList items={links} />
                </div>
            )}
        </div>
    );
}

export function CaseDossier() {
    const { projects } = PORTFOLIO_DATA;
    const [active, setActive] = useState(null);

    return (
        <section id="projects" className="space-y-6">
            <ol className="space-y-6 list-none p-0 m-0">
                {projects.map((project, index) => (
                    <li key={project.id}>
                        <WindowChrome title={`${String(index + 1).padStart(2, "0")}  ${project.title}`}>
                            <p className="font-mono text-[11px] text-[#0a0a0a] m-0">{project.category}</p>
                            <h3 className="mt-1 font-display text-xl md:text-2xl font-bold m-0 tracking-tight">
                                {project.title}
                            </h3>
                            {project.role && <p className="mt-2 text-xs text-[#1b1b1b]/60">{project.role}</p>}
                            <p className="mt-3 text-sm leading-relaxed">{project.description}</p>
                            {project.references && (
                                <p className="mt-3 text-sm leading-relaxed">{project.references}</p>
                            )}
                            {project.bullets?.length > 0 && (
                                <ul className="mt-3 text-sm list-disc pl-4 space-y-1">
                                    {project.bullets.map((b) => (
                                        <li key={b}>{b}</li>
                                    ))}
                                </ul>
                            )}
                            <ProjectMedia project={project} onOpen={setActive} />
                        </WindowChrome>
                    </li>
                ))}
            </ol>

            <VideoModal item={active} onClose={() => setActive(null)} />
        </section>
    );
}
