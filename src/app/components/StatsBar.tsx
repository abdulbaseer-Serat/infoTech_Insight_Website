'use client';

import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Clients Worldwide' },
  { value: 50, suffix: '+', label: 'Projects Completed' },
  { value: 25, suffix: '+', label: 'Certified Experts' },
  { value: 15, suffix: '+', label: 'Countries Served' },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, 1800, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setActive(true); obs.disconnect(); }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-6 py-2">
      <div className="stat-counter">{count}{suffix}</div>
      <div className="text-sm text-muted-foreground font-medium mt-1">{label}</div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-primary py-12 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-white/10">
          {stats.map((s) => (
            <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
