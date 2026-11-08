const FRAME = "border-2 border-[#1b1b1b] overflow-hidden bg-white";

function aspectClass(ratio) {
    if (!ratio) return "";
    if (ratio === "1/1") return "aspect-square";
    if (ratio === "2/3") return "aspect-[2/3]";
    if (ratio === "3/4") return "aspect-[3/4]";
    if (ratio === "3/2") return "aspect-[3/2]";
    if (ratio === "4/3") return "aspect-[4/3]";
    if (ratio === "16/9") return "aspect-video";
    if (ratio === "9/16") return "aspect-[9/16]";
    return "";
}

function widthClass(ratio, featured, size) {
    if (size === "wide") return "w-full";
    if (ratio === "1/1") return featured ? "w-full max-w-md mx-auto" : "w-full";
    if (ratio === "2/3") return featured ? "w-full max-w-xs mx-auto" : "w-full max-w-[200px] mx-auto";
    if (ratio === "9/16") return featured ? "w-full max-w-[240px] mx-auto" : "w-full max-w-[160px] mx-auto";
    return "w-full";
}

function FramedImage({ item, featured = false }) {
    const fit = item.fit || (item.ratio ? "cover" : "contain");
    const aspect = aspectClass(item.ratio);
    const useCover = fit === "cover" && aspect;
    const large = featured || item.size === "wide";

    return (
        <div
            className={`${FRAME} bg-[#f0eef5] ${widthClass(item.ratio, featured, item.size)} ${useCover ? aspect : ""}`}
        >
            <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                className={
                    useCover
                        ? "w-full h-full object-cover"
                        : `w-full h-auto ${large ? "max-h-[min(75vh,520px)]" : "max-h-[220px]"} object-contain mx-auto block`
                }
            />
        </div>
    );
}

/** Photo à la une : cadre calé sur le ratio, cover si défini. */
export function FeaturedPhoto({ item }) {
    return (
        <figure className="m-0">
            <FramedImage item={item} featured />
            <figcaption className="mt-2 text-[10px] font-mono uppercase tracking-wide text-foreground/50">
                {item.label}
            </figcaption>
        </figure>
    );
}

export function PhotoThumbs({ items }) {
    if (!items.length) return null;
    return (
        <div className={`grid gap-4 ${items.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
            {items.map((item) => (
                <figure
                    key={item.src}
                    className={`m-0 ${item.size === "wide" ? "col-span-2" : ""}`}
                >
                    <FramedImage item={item} featured={item.size === "wide"} />
                    <figcaption className="mt-2 text-[10px] font-mono uppercase tracking-wide text-foreground/50">
                        {item.label}
                    </figcaption>
                </figure>
            ))}
        </div>
    );
}

export function HeroPortrait({ src, alt = "Portrait" }) {
    return (
        <figure className={`${FRAME} w-full max-w-[180px] aspect-[3/4]`}>
            <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
        </figure>
    );
}
