export const ColorsCircular = Object.freeze({
  grey: ({ id }: { id: string }) => (
    <linearGradient
      id={`gradient-${id}`}
      x1="37.5"
      y1="0"
      x2="37.5"
      y2="75"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#575A77" />
      <stop offset="1" stop-color="#393943" />
    </linearGradient>
  ),
  yellow: ({ id }: { id: string }) => (
    <linearGradient
      id={`gradient-${id}`}
      x1="25.5"
      y1="0"
      x2="25.5"
      y2="50"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FFAA04" />
      <stop offset="1" stop-color="#B7E25B" />
    </linearGradient>
  ),
} as const);
