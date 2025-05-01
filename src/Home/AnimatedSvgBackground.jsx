import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = i * 0.2;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.2, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const shapeStyle = {
  strokeWidth: 2,
  strokeLinecap: "round",
  fill: "transparent",
};

const shapes = [
  { type: "circle", color: "#ff0088" },
  { type: "rect", color: "#0d63f8" },
  { type: "x", color: "#4ff0b7" },
  { type: "x", color: "#ffaa55" },
  { type: "circle", color: "#ff9900" },
  { type: "rect", color: "#00ccff" },
  { type: "rect", color: "#00ff99" },
  { type: "x", color: "#ff33cc" },
  { type: "circle", color: "#cc00ff" },
  { type: "circle", color: "#ff0088" },
  { type: "rect", color: "#0d63f8" },
  { type: "x", color: "#4ff0b7" },
  { type: "x", color: "#ffaa55" },
  { type: "circle", color: "#ff9900" },
  { type: "rect", color: "#00ccff" },
  { type: "rect", color: "#00ff99" },
  { type: "x", color: "#ff33cc" },
  { type: "circle", color: "#cc00ff" },
  { type: "circle", color: "#ff0088" },
  { type: "rect", color: "#0d63f8" },
  { type: "x", color: "#4ff0b7" },
  { type: "x", color: "#ffaa55" },
  { type: "circle", color: "#ff9900" },
  { type: "rect", color: "#00ccff" },
  { type: "rect", color: "#00ff99" },
  { type: "x", color: "#ff33cc" },
  { type: "circle", color: "#cc00ff" },
  { type: "circle", color: "#ff0088" },
  { type: "rect", color: "#0d63f8" },
  { type: "x", color: "#4ff0b7" },
  { type: "x", color: "#ffaa55" },
  { type: "circle", color: "#ff9900" },
  { type: "rect", color: "#00ccff" },
  { type: "rect", color: "#00ff99" },
  { type: "x", color: "#ff33cc" },
  { type: "circle", color: "#cc00ff" },
];

const AnimatedSvgBackground = () => {
  const rows = 10;
  const cols = 3;
  const width = 300;
  const height = 1000;
  const cellWidth = width / cols;
  const cellHeight = height / rows;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.5 });

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        width: "50vw",
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none",
      }}
      className="left-1/2 h-[90vh] lg:-left-60 lg:w-[50vw] lg:h-[150vh] top-[5rem]"
    >
      <motion.svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ width: "100%", height: "100%" }}
      >
        {shapes.map((shape, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;
          const x = col * cellWidth + cellWidth / 2;
          const y = row * cellHeight + cellHeight / 2;

          switch (shape.type) {
            case "circle":
              return (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={y}
                  r={cellWidth / 4}
                  stroke={shape.color}
                  variants={draw}
                  custom={i}
                  style={shapeStyle}
                />
              );
            case "rect":
              return (
                <motion.rect
                  key={i}
                  x={x - cellWidth / 4}
                  y={y - cellHeight / 4}
                  width={cellWidth / 2}
                  height={cellHeight / 2}
                  rx={8}
                  stroke={shape.color}
                  variants={draw}
                  custom={i}
                  style={shapeStyle}
                />
              );
            case "x":
              return (
                <g key={i}>
                  <motion.line
                    x1={x - 15}
                    y1={y - 15}
                    x2={x + 15}
                    y2={y + 15}
                    stroke={shape.color}
                    variants={draw}
                    custom={i}
                    style={shapeStyle}
                  />
                  <motion.line
                    x1={x + 15}
                    y1={y - 15}
                    x2={x - 15}
                    y2={y + 15}
                    stroke={shape.color}
                    variants={draw}
                    custom={i + 0.1}
                    style={shapeStyle}
                  />
                </g>
              );
            default:
              return null;
          }
        })}
      </motion.svg>
    </div>
  );
};

export default AnimatedSvgBackground;
