import { useState } from "react";

export default function Image({ src, alt, className = "", width, height, sources = [] }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <picture>
      {sources.map((s) => (
        <source key={s.type || s.srcSet} srcSet={s.srcSet} type={s.type} sizes={s.sizes} />
      ))}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className={`${className} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        onLoad={() => setLoaded(true)}
      />
    </picture>
  );
}


