"use client";
import React, { useEffect, useId, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import { ColorsCircular } from "@/utils/colorsCircular";

interface Props {
  color?: keyof typeof ColorsCircular;
  size?: number;
}

export const LoadingSpinner: React.FC<Props> = ({
  color = "grey",
  size = 50,
}) => {
  const controls = useAnimation();
  const center = size / 2; // Actualizamos según el tamaño
  const radius = size / 2 - 5; // Actualizamos según el tamaño
  const circumference = 2 * Math.PI * radius;
  const spinnerLength = 0.2 * circumference;

  const id = useId();

  useEffect(() => {
    controls.start({
      rotate: [0, 360],
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 1.5,
      },
    });
  }, [controls]);

  const Gradient = useMemo(() => ColorsCircular[color], [color]);
  return (
    <svg className="loading-spinner" width={size} height={size}>
      <defs>
        <Gradient id={id} />
      </defs>

      <circle
        className="spinner-background"
        stroke={`url(#gradient-${id})`}
        strokeWidth="10"
        fill="transparent"
        r={radius}
        opacity={0.3}
        cx={center}
        cy={center}
      />

      <motion.circle
        initial={false}
        animate={controls}
        className="spinner"
        stroke={`url(#gradient-${id})`}
        strokeWidth="10"
        fill="transparent"
        r={radius}
        cx={center}
        cy={center}
        strokeLinecap="round"
        transform={`rotate(-90 ${center} ${center})`}
        strokeDasharray={circumference}
        strokeDashoffset={circumference - spinnerLength}
      />
    </svg>
  );
};
