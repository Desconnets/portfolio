import { useState } from "react";
import { PORTFOLIO_DATA } from "../config";
import { Play, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const getYoutubeId = (url) => {
    const match = url.match(/\/embed\/([^?]+)/);
    return match ? match[1] : null;
};

function VideoTile({ video, title, onPlayVideo, featured = false }) {
    const yId = !video.local ? getYoutubeId(video.url) : null;
    const thumbUrl = yId ? `https://img.youtube.com/vi/${yId}/maxresdefault.jpg` : "";
    const isShort = video.type === "short";
    const isLocal = Boolean(video.local);

    return (
        <button
            type="button"
            onClick={() => onPlayVideo(video)}
            className={`relative overflow-hidden bg-[#111] text-left w-full border border-[#1a1c24]/15 hover:border-[#6b00dd] transition-colors ${
                featured ? "" : isShort ? "max-w-[200px]" : ""
            }`}
        >
            <div
                style={{ aspectRatio: isShort ? "9/16" : "16/9" }}
                className="w-full relative"
            >
                {isLocal ? (
                    <video
                        src={video.url}
                        muted
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                ) : (
                    <img
                        src={thumbUrl}
                        alt={`${title} — vidéo`}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                            e.target.src = `https://img.youtube.com/vi/${yId}/hqdefault.jpg`;
                        }}
                    />
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                    <span className="w-11 h-11 bg-[#6b00dd] text-white rounded-full flex items-center justify-center">
                        <Play fill="currentColor" size={18} className="ml-0.5" />
                    </span>
                </div>
            </div>
        </button>
    );
}

function ProjectCase({ project, index, onPlayVideo }) {
    const photos = (project.images || []).filter((i) => !i.capture);
    const captures = (project.images || []).filter((i) => i.capture);
    const videos = project.videos || [];
    const featuredVideo = videos.find((v) => v.type !== "short") || videos[0];
    const shortVideos = videos.filter((v) => v !== featuredVideo && v.type === "short");
    const otherVideos = videos.filter((v) => v !== featuredVideo && v.type !== "short");

    return (
        <article className="border-t border-[#1a1c24]/20 pt-12 md:pt-16">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-10 lg:gap-16 items-start">
                <header>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-[#6b00dd] mb-3">
                        {String(index + 1).padStart(2, "0")} · {project.category}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-semibold text-[#1a1c24] m-0 leading-tight">
                        {project.title}
                    </h3>
                    {project.role && (
                        <p className="mt-2 text-sm font-medium text-[#1a1c24]/70">{project.role}</p>
                    )}
                    {project.description && (
                        <p className="mt-5 text-[15px] md:text-base leading-relaxed text-[#1a1c24]/85 max-w-lg">
                            {project.description}
                        </p>
                    )}
                    {project.bullets?.length > 0 && (
                        <ul className="mt-5 space-y-2 text-sm text-[#1a1c24]/80 max-w-lg list-disc pl-4">
                            {project.bullets.map((b) => (
                                <li key={b}>{b}</li>
                            ))}
                        </ul>
                    )}
                </header>

                <div className="space-y-4">
                    {featuredVideo && (
                        <VideoTile
                            video={featuredVideo}
                            title={project.title}
                            onPlayVideo={onPlayVideo}
                            featured
                        />
                    )}
                    {photos.length > 0 && (
                        <div className={`grid gap-3 ${photos.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                            {photos.map((image, i) => (
                                <div
                                    key={i}
                                    className="bg-[#111] border border-[#1a1c24]/15"
                                    style={{ aspectRatio: image.ratio || "3/2" }}
                                >
                                    <img
                                        src={image.src}
                                        alt={`${project.title} — ${i + 1}`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                    {(shortVideos.length > 0 || otherVideos.length > 0) && (
                        <div className="flex flex-wrap gap-3 items-end">
                            {[...otherVideos, ...shortVideos].map((video, i) => (
                                <VideoTile
                                    key={i}
                                    video={video}
                                    title={project.title}
                                    onPlayVideo={onPlayVideo}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {captures.length > 0 && (
                <div className="mt-8 pt-6 border-t border-dashed border-[#1a1c24]/15">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#1a1c24]/50 mb-3">
                        Extrait livrable (feed / carrousel)
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {captures.map((image, i) => (
                            <div
                                key={i}
                                className="w-[min(100%,220px)] bg-white border border-[#1a1c24]/10 p-2"
                            >
                                <img
                                    src={image.src}
                                    alt=""
                                    className="w-full h-auto object-contain max-h-[280px]"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {(project.links?.length || project.viewMoreLink) && (
                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
                    {(project.links || [{ label: "Voir plus", href: project.viewMoreLink }]).map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-mono text-[#6b00dd] hover:text-[#1a1c24]"
                        >
                            {link.label}
                            <ArrowRight size={14} />
                        </a>
                    ))}
                </div>
            )}
        </article>
    );
}

export function Projects() {
    const { projects, projectsTagline } = PORTFOLIO_DATA;
    const [activeVideo, setActiveVideo] = useState(null);

    return (
        <section id="projects" className="bg-[#f4f4f2] w-full py-16 md:py-24 font-sans">
            <div className="max-w-5xl mx-auto px-6 md:px-10">
                <div className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1c24] m-0">Réalisations</h2>
                    <p className="mt-3 text-sm md:text-base text-[#1a1c24]/70 max-w-xl leading-relaxed">
                        {projectsTagline}
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    {projects.map((project, index) => (
                        <ProjectCase
                            key={project.title}
                            project={project}
                            index={index}
                            onPlayVideo={setActiveVideo}
                        />
                    ))}
                </div>

                <AnimatePresence>
                    {activeVideo && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1a1c24]/90 p-4 md:p-12"
                            onClick={() => setActiveVideo(null)}
                        >
                            <button
                                type="button"
                                className="absolute top-4 right-4 p-2 bg-white text-[#1a1c24]"
                                onClick={() => setActiveVideo(null)}
                            >
                                <X size={22} />
                            </button>
                            <motion.div
                                initial={{ scale: 0.98, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.98, opacity: 0 }}
                                className={`bg-black w-full ${
                                    activeVideo.type === "short"
                                        ? "max-w-sm aspect-[9/16]"
                                        : "max-w-5xl aspect-video"
                                }`}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {activeVideo.local ? (
                                    <video
                                        src={activeVideo.url}
                                        className="w-full h-full"
                                        controls
                                        autoPlay
                                        playsInline
                                    />
                                ) : (
                                    <iframe
                                        title="Vidéo"
                                        src={`${activeVideo.url}?autoplay=1`}
                                        className="w-full h-full"
                                        allow="autoplay; fullscreen"
                                        allowFullScreen
                                    />
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
