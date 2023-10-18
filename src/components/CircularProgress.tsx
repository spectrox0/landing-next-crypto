import React, { useState, useEffect, FC } from "react";

interface Props {
  percentage?: number;
  color?: string;
}
export const CircularProgress: FC<Props> = ({
  percentage = 0,
  color = "yellow",
}) => {
  const [offset, setOffset] = useState(0);
  const center = 50;
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - percentage) / 100) * circumference;
    setOffset(progressOffset);
  }, [setOffset, circumference, percentage, offset]);

  return (
    <svg className="circular-progress" width="100" height="100">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: color, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "white", stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <circle
        className="progress-background"
        stroke="grey"
        strokeWidth="2"
        fill="transparent"
        r={radius}
        cx={center}
        cy={center}
      />

      <circle
        className="progress-bar"
        stroke="url(#gradient)"
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

export default CircularProgress;
