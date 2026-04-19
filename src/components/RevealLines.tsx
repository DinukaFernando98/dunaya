"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// Line configs: width, origin (left or right), opacity, vertical gap
const lineConfigs = [
  { w: "100%", left: true,  op: 0.10, gap: 10 },
  { w:  "78%", left: false, op: 0.06, gap: 8  },
  { w:  "92%", left: true,  op: 0.08, gap: 9  },
  { w:  "55%", left: false, op: 0.05, gap: 7  },
  { w:  "85%", left: true,  op: 0.09, gap: 10 },
  { w:  "42%", left: false, op: 0.04, gap: 6  },
  { w:  "97%", left: true,  op: 0.07, gap: 8  },
  { w:  "63%", left: false, op: 0.06, gap: 9  },
  { w:  "88%", left: true,  op: 0.08, gap: 10 },
  { w:  "50%", left: false, op: 0.05, gap: 7  },
  { w:  "75%", left: true,  op: 0.07, gap: 8  },
  { w: "100%", left: false, op: 0.09, gap: 10 },
  { w:  "68%", left: true,  op: 0.05, gap: 7  },
  { w:  "90%", left: false, op: 0.08, gap: 9  },
  { w:  "48%", left: true,  op: 0.04, gap: 6  },
  { w:  "83%", left: false, op: 0.07, gap: 10 },
];

interface RevealLinesProps {
  count?: number;       // how many lines to show
  py?: number;          // vertical padding
  bg?: string;          // background colour
}

export default function RevealLines({
  count = 16,
  py = 96,
  bg = "#09080A",
}: RevealLinesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Scroll-driven horizontal shift on the whole block
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const blockX = useTransform(scrollYProgress, [0, 1], [-12, 12]);

  const shown = lineConfigs.slice(0, count);

  return (
    <div
      ref={ref}
      style={{
        background: bg,
        paddingTop: py,
        paddingBottom: py,
        overflow: "hidden",
        paddingLeft: "clamp(32px, 6vw, 96px)",
        paddingRight: "clamp(32px, 6vw, 96px)",
      }}
    >
      <motion.div style={{ x: blockX }}>
        {shown.map((cfg, i) => (
          <div
            key={i}
            style={{
              marginBottom: cfg.gap,
              display: "flex",
              justifyContent: cfg.left ? "flex-start" : "flex-end",
            }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{
                duration: 1.4,
                delay: i * 0.045,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                height: 1,
                width: cfg.w,
                background: `rgba(201,168,118,${cfg.op})`,
                transformOrigin: cfg.left ? "left" : "right",
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
