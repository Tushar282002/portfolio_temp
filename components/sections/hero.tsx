'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, MousePointerClick, Github } from 'lucide-react';
import { AnimatedNumber } from '@/components/animated-number';
import { HERO_STATS } from '@/lib/data';

function FloatingBlob({
  position,
  color,
  scale = 1,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.y = position[1] + Math.sin(t * 0.4 + position[0]) * 0.4;
    ref.current.rotation.x = t * 0.1;
    ref.current.rotation.y = t * 0.15;
  });
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.4}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

function Scene() {
  const blobs = useMemo(
    () => [
      { position: [-3, 1, -2] as [number, number, number], color: '#3b82f6', scale: 1.2 },
      { position: [3, -1, -3] as [number, number, number], color: '#22c55e', scale: 0.9 },
      { position: [0, 2, -4] as [number, number, number], color: '#f59e0b', scale: 0.7 },
    ],
    []
  );
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.6} />
      {blobs.map((b, i) => (
        <FloatingBlob key={i} {...b} />
      ))}
    </>
  );
}

const CODE_SNIPPETS = [
  'const tushar = engineer();',
  'await ship(excellence);',
  'if (problem) solve(it);',
  'while (learning) grow();',
  'git push origin main',
  'system.design(scale);',
  'for (const idea of vision) build(idea);',
  'return <Product />;',
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center overflow-hidden"
    >
      {/* Three.js subtle backdrop */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]}>
          <Scene />
        </Canvas>
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 z-0 grid-bg mask-fade-b opacity-60" />

      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-chart-2/15 blur-[100px] animate-pulse-glow" />
      </div>

      {/* Floating code snippets */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
        {CODE_SNIPPETS.map((snippet, i) => (
          <motion.div
            key={i}
            className="glass absolute rounded-lg px-3 py-2 font-mono text-xs text-muted-foreground shadow-lg"
            style={{
              left: `${[12, 78, 20, 85, 8, 70, 30, 80][i]}%`,
              top: `${[20, 25, 70, 60, 45, 80, 15, 50][i]}%`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.5, 0.4], scale: 1, y: [0, -10, 0] }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: 'easeInOut',
            }}
          >
            {snippet}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-chart-2 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-chart-2" />
          </span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
        >
          Hi, I&apos;m{' '}
          <span className="text-gradient-primary animate-gradient bg-[length:200%_200%]">
            Tushar.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 font-display text-xl font-medium text-foreground/80 md:text-2xl"
        >
          Associate Software Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg"
        >
          Building scalable software, solving complex problems, and transforming
          ideas into intuitive digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-105 hover:glow-primary-lg active:scale-95"
          >
            Explore Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="/Tushar_Resume.pdf"
            className="glass group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:scale-105 active:scale-95"
          >
            <FileText className="h-4 w-4" />
            Download Resume
          </a>
          <a
            href="https://github.com/Tushar282002"
            target="_blank"
            rel="noreferrer"
            className="glass group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:scale-105 active:scale-95"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </motion.div>

        {/* Animated stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-6"
        >
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="glass card-hover rounded-2xl p-4 text-center md:p-5"
            >
              <div className="font-display text-2xl font-bold text-foreground md:text-3xl">
                <AnimatedNumber value={stat.value} display={stat.display} />
                {stat.suffix}
              </div>
              <div className="mt-1 text-xs text-muted-foreground md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-muted-foreground"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-muted-foreground/30 p-1">
            <motion.div
              className="h-2 w-1 rounded-full bg-muted-foreground"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
