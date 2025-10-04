import { createContext, useCallback, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const TransitionContext = createContext({ start: () => {} });

export function usePageTransition() {
  return useContext(TransitionContext);
}

export default function TransitionProvider({ children, carSrc = "/vite.svg", duration = 1.2, carHeight = 64 }) {
  const [active, setActive] = useState(false);
  const [target, setTarget] = useState(null);
  const navigate = useNavigate();
  const isRunningRef = useRef(false);

  const start = useCallback((to) => {
    if (isRunningRef.current) return; // prevent spamming
    isRunningRef.current = true;
    setTarget(to);

    // Preload the image
    const img = new Image();
    img.src = carSrc;
    const show = () => setActive(true);
    if (img.decode) {
      img.decode().then(show).catch(show);
    } else {
      img.onload = show;
      img.onerror = show;
    }

    setTimeout(show, 120); // safety fallback
  }, [carSrc]);

  const handleComplete = () => {
    const to = target;
    setActive(false);
    setTarget(null);
    if (to) navigate(to);
    setTimeout(() => { isRunningRef.current = false; }, 50);
  };

  return (
    <TransitionContext.Provider value={{ start }}>
      {children}

      <AnimatePresence>
        {active && (
          <motion.div
  className="fixed inset-0 z-[50] pointer-events-none" // Lower z-index & no blocking
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.2 }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/20 pointer-events-none" />
  
  {/* Car animation */}
  <motion.img
    src={carSrc}
    alt="transition-car"
    className="absolute bottom-10 left-0 w-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] pointer-events-none"
    style={{ height: carHeight, willChange: "transform" }}
    initial={{ x: "-30%", rotateZ: 0 }}
    animate={{ x: "130%", rotateZ: 0 }}
    transition={{ duration: Math.max(0.45, duration), ease: "easeInOut" }}
    onAnimationComplete={handleComplete}
  />

  {/* Smoke puffs */}
  <motion.div
    className="absolute bottom-9 left-0 h-3 w-3 rounded-full bg-white/50 blur-[2px] pointer-events-none"
    initial={{ x: "-30%", opacity: 0.7, scale: 1 }}
    animate={{ x: "100%", opacity: 0, scale: 2 }}
    transition={{ duration: Math.max(0.45, duration), ease: "easeInOut" }}
  />
  <motion.div
    className="absolute bottom-9 left-6 h-2 w-2 rounded-full bg-white/40 blur-[2px] pointer-events-none"
    initial={{ x: "-35%", opacity: 0.6, scale: 1 }}
    animate={{ x: "98%", opacity: 0, scale: 2.4 }}
    transition={{ duration: Math.max(0.45, duration), ease: "easeInOut" }}
  />
</motion.div>

        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}

export function TransitionLink({ to, children, className = "", onClick, disabled }) {
  const { start } = usePageTransition();

  const handleClick = (e) => {
    if (disabled) return;
    e.preventDefault();
    if (onClick) onClick(e);
    start(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className} aria-disabled={disabled}>
      {children}
    </a>
  );
}
