import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PALETTE = {
  red: "#ff1111",
  orange: "#ff6a0b",
};

const AchievementCard = ({ achievement, index, isOpen, onToggle }) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 30, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.45, delay: index * 0.1 }}
    className="relative group"
  >
    <div
      role="button"
      tabIndex={0}
      onClick={() => onToggle(achievement.id)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onToggle(achievement.id); }}
      className={`cursor-pointer rounded-2xl overflow-hidden backdrop-blur-md border transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]`}
      style={{
        background: isOpen
          ? `linear-gradient(180deg, rgba(255,17,17,0.05), rgba(255,106,11,0.03))`
          : "rgba(0,0,0,0.35)",
        borderImage: `linear-gradient(90deg, ${PALETTE.red}, ${PALETTE.orange}) 1`,
        borderWidth: "1px",
        borderStyle: "solid",
        boxShadow: isOpen
          ? `0 8px 32px rgba(255,17,17,0.25), 0 0 24px rgba(255,106,11,0.2)`
          : `0 4px 20px rgba(0,0,0,0.3)`
      }}
    >
      <div className="relative p-6 md:p-8">
        <div className="flex items-start gap-5">
          <div
            className="flex items-center justify-center rounded-xl w-20 h-20 text-4xl"
            style={{
              background: "linear-gradient(135deg, rgba(255,106,11,0.08), rgba(255,17,17,0.06))",
              border: `1px solid rgba(255,255,255,0.05)`,
              boxShadow: `0 6px 30px rgba(255,106,11,0.08)`
            }}
          >
            <div style={{ filter: "drop-shadow(0 6px 18px rgba(0,0,0,0.5))" }}>{achievement.icon}</div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{achievement.title}</h3>
                <div className="mt-1 text-sm text-orange-300/70">{achievement.location}</div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <div
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: `1px solid rgba(255,255,255,0.06)`,
                    color: PALETTE.orange
                  }}
                >
                  {achievement.rank}
                </div>
                <div className="text-sm text-gray-400">
                  <span className="font-medium">{new Date(achievement.date).getFullYear()}</span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm md:text-base text-gray-300/75 leading-relaxed" style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden"
            }}>
              {achievement.description}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <div
            className="h-1 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${PALETTE.red}, ${PALETTE.orange}, rgba(255,17,17,0.4))`,
              opacity: 0.9
            }}
          />
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="expanded"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="border-t border-white/10 p-6 md:p-8"
              style={{ background: "rgba(0,0,0,0.25)" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm text-orange-400 font-semibold mb-2">Our Story</h4>
                  <p className="text-gray-200/85 text-sm leading-relaxed">{achievement.story}</p>
                </div>
                <div>
                  <h4 className="text-sm text-orange-300 font-semibold mb-3">Key Metrics</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {achievement.metrics?.map((m, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="p-3 rounded-lg border border-white/10"
                        style={{
                          background: "rgba(255,17,17,0.03)",
                          boxShadow: `0 0 8px rgba(255,106,11,0.1)`
                        }}
                      >
                        <div className="text-lg font-bold text-white">{m.value}</div>
                        <div className="text-xs text-gray-300/70 mt-1">{m.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 text-right">
                <button
                  onClick={() => onToggle(achievement.id)}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm font-semibold transition-all focus:outline-none focus:ring-2"
                  style={{
                    background: "rgba(255,17,17,0.08)",
                    border: `1px solid rgba(255,255,255,0.06)`,
                    color: "#fff"
                  }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  </motion.article>
);

export default function Achievements() {
  const [openId, setOpenId] = useState(null);

  const achievements = useMemo(() => [
    {
      id: 1,
      title: "Formula Student India 2024 - Overall Champions",
      date: "2024-01-15",
      icon: "🏆",
      location: "Kari Motor Speedway, Chennai",
      rank: "1st Place Overall",
      description: "Dominated Formula Student India 2024 with our revolutionary EV, showcasing unmatched performance.",
      story: "After 18 months of development, our team achieved the ultimate goal in student motorsport.",
      metrics: [{ label: "Top Speed", value: "120 km/h" }, { label: "Acceleration", value: "3.8s" }, { label: "Efficiency", value: "98.7%" }, { label: "Total Score", value: "892 / 900" }]
    },
    {
      id: 2,
      title: "Best Business Plan Award",
      date: "2023-11-20",
      icon: "💼",
      location: "India Expo Mart, Greater Noida",
      rank: "Gold Winner",
      description: "Recognized for the most comprehensive and market-ready business strategy for EV commercialization.",
      story: "Our presentation connected technical innovation to a viable commercial roadmap with realistic projections.",
      metrics: [{ label: "Market Size", value: "₹2.3L Cr" }, { label: "ROI", value: "340%" }, { label: "Break-even", value: "36 months" }, { label: "Funding Raised", value: "₹15L" }]
    },
    {
      id: 3,
      title: "Innovation Excellence Award",
      date: "2023-09-10",
      icon: "⚡",
      location: "IIT Delhi Tech Summit",
      rank: "Gold Medal",
      description: "AI-powered battery management improved energy efficiency and performance optimization.",
      story: "The AI-driven BMS set new standards for intelligent automotive systems with better performance and longevity.",
      metrics: [{ label: "Efficiency Gain", value: "+28%" }, { label: "Battery Life", value: "+40%" }, { label: "Response Time", value: "12ms" }, { label: "AI Accuracy", value: "96.8%" }]
    },
    {
      id: 4,
      title: "Best Team Collaboration",
      date: "2023-07-25",
      icon: "👥",
      location: "Buddh International Circuit",
      rank: "Special Recognition",
      description: "Honored for exceptional teamwork, cross-functional collaboration, and leadership.",
      story: "The award celebrated the human element behind technical achievements, showcasing inclusive leadership and team culture.",
      metrics: [{ label: "Team Size", value: "30" }, { label: "Departments", value: "8" }, { label: "Satisfaction", value: "9.7/10" }, { label: "Retention", value: "95%" }]
    }
  ], []);

  const toggleOpen = (id) => setOpenId(prev => (prev === id ? null : id));

  return (
    <main className="min-h-screen relative text-white">
      {/* Dark gradient background with subtle radial glows */}
      <div className="fixed inset-0 -z-10" style={{
        background: `radial-gradient(800px 400px at 20% 20%, rgba(255,106,11,0.12), transparent 25%),
                     radial-gradient(600px 300px at 80% 80%, rgba(255,17,17,0.1), transparent 20%),
                     linear-gradient(180deg, #0B0B0B 0%, #111111 100%)`
      }}/>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Achievements{" "}
            <span style={{ backgroundImage: `linear-gradient(90deg, ${PALETTE.red}, ${PALETTE.orange})`, WebkitBackgroundClip: "text", color: "transparent" }}>Timeline</span>
          </h1>
          <p className="max-w-3xl mx-auto text-sm md:text-lg text-gray-400/80">
            Celebrating milestones, innovation, and teamwork that shaped our legacy in electric racing.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {achievements.map((a, i) => (
              <AchievementCard key={a.id} achievement={a} index={i} isOpen={openId === a.id} onToggle={toggleOpen}/>
            ))}
          </AnimatePresence>
        </section>

        {/* CTA Section */}
        <section className="text-center mt-16">
          <button className="px-8 py-3 rounded-full font-semibold shadow-lg transition-transform hover:-translate-y-1" style={{ background: `linear-gradient(90deg, ${PALETTE.red}, ${PALETTE.orange})`, color: "#fff" }}>
            Join Our Team 🚀
          </button>
        </section>
      </div>
    </main>
  );
}
