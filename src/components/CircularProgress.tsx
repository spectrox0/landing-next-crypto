"use client";
import { ColorsCircular } from "@/utils/colorsCircular";
import React, { useState, useEffect, FC, useId, useMemo } from "react";

interface Props {
  percentage?: number;
  color?: keyof typeof ColorsCircular;
}
export const CircularProgress: FC<Props> = ({
  percentage = 0,
  color = "grey",
}) => {
  const id = useId();
  const [offset, setOffset] = useState(0);
  const center = 50;
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - percentage) / 100) * circumference;
    setOffset(progressOffset);
  }, [setOffset, circumference, percentage, offset]);

  const Gradient = useMemo(() => ColorsCircular[color], [color]);

  return (
    <svg className="circular-progress" width="100" height="100">
      <defs>
        <Gradient id={id} />
      </defs>

      <circle
        className="progress-background"
        stroke={`url(#gradient-${id})}`}
        strokeWidth="10"
        fill="transparent"
        opacity={0.3}
        r={radius}
        cx={center}
        cy={center}
      />

      <circle
        className="progress-bar"
        stroke={`url(#gradient-${id})`}
        strokeWidth="10"
        fill="transparent"
        r={radius}
        cx={center}
        cy={center}
        strokeLinecap="round"
        transform={`rotate(-90 ${center} ${center})`}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
    </svg>
  );
};
