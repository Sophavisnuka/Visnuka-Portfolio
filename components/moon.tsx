'use client';
import { useEffect, useRef } from 'react';

// Hero backdrop: twinkling starfield and dust orbiting a static moon.

const TEX_SRC = '/me/moon-texture.png';
const CENTER_Y = 0.47;         // moon center, fraction of hero height
const MOON_WIDTH = 0.38;       // moon diameter, fraction of hero width

interface Star { x: number; y: number; r: number; speed: number; phase: number; depth: number }
interface Dust { orbit: number; angle: number; speed: number; r: number; alpha: number; tilt: number; squash: number }

export default function Moon() {
    const wrapRef = useRef<HTMLDivElement>(null);
    const backRef = useRef<HTMLCanvasElement>(null);
    const moonRef = useRef<HTMLImageElement>(null);
    const frontRef = useRef<HTMLCanvasElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const wrap = wrapRef.current!;
        const back = backRef.current!;
        const front = frontRef.current!;
        const moonImg = moonRef.current!;
        const glow = glowRef.current!;
        const backCtx = back.getContext('2d')!;
        const frontCtx = front.getContext('2d')!;

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        let w = 0, h = 0, dpr = 1;
        let moonSize = 0, cx = 0, cy = 0;
        let visible = true;
        let raf = 0;
        const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

        const stars: Star[] = Array.from({ length: 260 }, () => ({
            x: Math.random(),
            y: Math.random(),
            r: Math.random() * 1.1 + 0.25,
            speed: Math.random() * 1.6 + 0.4,
            phase: Math.random() * Math.PI * 2,
            depth: Math.random(),
        }));
        const dust: Dust[] = Array.from({ length: 90 }, () => ({
            orbit: 1.12 + Math.random() * 0.9,
            angle: Math.random() * Math.PI * 2,
            speed: (Math.random() * 0.05 + 0.02) * (Math.random() < 0.15 ? -1 : 1),
            r: Math.random() * 1.3 + 0.4,
            alpha: Math.random() * 0.5 + 0.2,
            tilt: -0.35 + (Math.random() - 0.5) * 0.25,
            squash: 0.28 + Math.random() * 0.3,
        }));

        function resize() {
            const rect = wrap.getBoundingClientRect();
            w = rect.width;
            h = rect.height;
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            for (const cv of [back, front]) {
                cv.width = w * dpr;
                cv.height = h * dpr;
            }
            moonSize = Math.max(220, Math.min(w * MOON_WIDTH, 560));
            cx = w / 2;
            cy = h * CENTER_Y;
            moonImg.style.width = moonImg.style.height = `${moonSize}px`;
            moonImg.style.left = `${cx - moonSize / 2}px`;
            moonImg.style.top = `${cy - moonSize / 2}px`;
            const g = moonSize * 2.6;
            glow.style.width = glow.style.height = `${g}px`;
            glow.style.left = `${cx - g / 2}px`;
            glow.style.top = `${cy - g / 2}px`;
        }

        function drawParticles(t: number, dt: number) {
            backCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
            frontCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
            backCtx.clearRect(0, 0, w, h);
            frontCtx.clearRect(0, 0, w, h);

            for (const st of stars) {
                if (!reduceMotion) {
                    st.y -= dt * 0.004 * (0.3 + st.depth);
                    if (st.y < 0) st.y += 1;
                }
                const tw = reduceMotion ? 0.8 : 0.55 + 0.45 * Math.sin(t * st.speed + st.phase);
                const ox = mouse.x * (6 + st.depth * 18);
                const oy = mouse.y * (6 + st.depth * 18);
                backCtx.globalAlpha = tw;
                backCtx.fillStyle = '#fff';
                backCtx.beginPath();
                backCtx.arc(st.x * w - ox, st.y * h - oy, st.r, 0, Math.PI * 2);
                backCtx.fill();
            }

            const R = moonSize / 2;
            for (const d of dust) {
                if (!reduceMotion) d.angle += d.speed * dt;
                const rad = d.orbit * R;
                const ex = Math.cos(d.angle) * rad;
                const ey = Math.sin(d.angle) * rad * d.squash;
                const x = cx + ex * Math.cos(d.tilt) - ey * Math.sin(d.tilt) + mouse.x * -10;
                const y = cy + ex * Math.sin(d.tilt) + ey * Math.cos(d.tilt) + mouse.y * -10;
                const ctx = Math.sin(d.angle) > 0 ? frontCtx : backCtx; // lower half passes in front
                ctx.globalAlpha = d.alpha;
                ctx.fillStyle = '#dfe6ff';
                ctx.shadowColor = '#9db4ff';
                ctx.shadowBlur = 6;
                ctx.beginPath();
                ctx.arc(x, y, d.r, 0, Math.PI * 2);
                ctx.fill();
            }
            backCtx.shadowBlur = 0;
            frontCtx.shadowBlur = 0;
        }

        let last = performance.now();
        function loop(now: number) {
            raf = requestAnimationFrame(loop);
            if (!visible) { last = now; return; }
            const dt = Math.min((now - last) / 1000, 0.05);
            last = now;
            const t = now / 1000;

            mouse.x += (mouse.tx - mouse.x) * 0.05;
            mouse.y += (mouse.ty - mouse.y) * 0.05;

            drawParticles(t, dt);

            moonImg.style.transform = `translate(${mouse.x * 12}px, ${mouse.y * 12}px)`;
            glow.style.opacity = String(0.85 + 0.15 * Math.sin(t * 0.9));
        }

        function onMove(e: MouseEvent) {
            const rect = wrap.getBoundingClientRect();
            mouse.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
            mouse.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        }

        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(wrap);
        const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
        io.observe(wrap);

        if (reduceMotion) {
            drawParticles(0, 0);
        } else {
            window.addEventListener('mousemove', onMove, { passive: true });
            raf = requestAnimationFrame(loop);
        }

        return () => {
            cancelAnimationFrame(raf);
            ro.disconnect();
            io.disconnect();
            window.removeEventListener('mousemove', onMove);
        };
    }, []);

    return (
        <div ref={wrapRef} aria-hidden="true" className="absolute inset-0 overflow-hidden bg-[#05060d]">
            <div
                ref={glowRef}
                className="absolute rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(170,180,205,0.38) 0%, rgba(120,130,160,0.14) 38%, transparent 68%)' }}
            />
            <canvas ref={backRef} className="absolute inset-0 w-full h-full" />
            <img ref={moonRef} src={TEX_SRC} alt="" draggable={false} className="absolute rounded-full select-none will-change-transform" />
            <canvas ref={frontRef} className="absolute inset-0 w-full h-full" />
        </div>
    );
}
