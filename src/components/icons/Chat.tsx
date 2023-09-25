import { Icon } from "@/types/common";

export const ChatIcon: Icon = ({ width = 65, height = 65, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...props}
    >
      <path
        fill="url(#a)"
        fillRule="evenodd"
        d="M29.106 8h7.059c3.673 0 6.554 0 8.855.218 2.344.224 4.264.687 5.958 1.723a13.177 13.177 0 0 1 4.352 4.352c1.036 1.691 1.498 3.614 1.723 5.958.218 2.301.218 5.182.218 8.857v2.446c0 2.615 0 4.666-.115 6.323-.114 1.684-.35 3.086-.889 4.383a13.178 13.178 0 0 1-7.132 7.132c-1.844.765-3.944.935-6.822.985-.71-.003-1.42.025-2.129.083-.454.05-.63.124-.733.183-.108.065-.257.18-.514.532-.277.38-.59.908-1.09 1.75l-1.242 2.1c-1.772 2.995-6.165 2.995-7.939 0l-1.242-2.1a24.284 24.284 0 0 0-1.09-1.75c-.257-.353-.406-.467-.514-.532-.103-.06-.28-.133-.733-.183-.486-.053-1.123-.069-2.132-.085-2.876-.048-4.975-.218-6.82-.983a13.177 13.177 0 0 1-7.131-7.132c-.539-1.297-.777-2.7-.892-4.383C8 36.22 8 34.167 8 31.55V29.11c0-3.676 0-6.555.218-8.858.224-2.344.687-4.267 1.723-5.958a13.177 13.177 0 0 1 4.352-4.352c1.691-1.036 3.614-1.499 5.958-1.723C22.552 8 25.433 8 29.108 8h-.002Zm-8.527 3.642c-2.095.199-3.426.58-4.49 1.23a9.74 9.74 0 0 0-3.217 3.218c-.65 1.063-1.031 2.394-1.23 4.491-.202 2.118-.204 4.836-.204 8.62v2.29c0 2.694 0 4.628.105 6.154.103 1.51.3 2.496.637 3.302a9.74 9.74 0 0 0 5.27 5.271c1.181.49 2.689.674 5.567.724h.071c.912.016 1.712.03 2.377.103.712.08 1.412.239 2.083.628.665.39 1.146.905 1.563 1.478.387.532.784 1.204 1.233 1.962l1.28 2.163a1.192 1.192 0 0 0 2.022 0l1.281-2.163c.45-.758.848-1.43 1.233-1.962.417-.573.898-1.09 1.563-1.478.671-.39 1.37-.55 2.083-.628.665-.073 1.464-.087 2.377-.103h.073c2.876-.05 4.384-.233 5.564-.724a9.74 9.74 0 0 0 5.27-5.27c.338-.807.535-1.793.638-3.303.105-1.526.105-3.46.105-6.153V29.2c0-3.783 0-6.501-.204-8.621-.199-2.095-.58-3.426-1.23-4.49a9.739 9.739 0 0 0-3.215-3.215c-1.064-.65-2.395-1.03-4.492-1.23-2.118-.202-4.836-.204-8.62-.204h-6.874c-3.784 0-6.502 0-8.621.204l.002-.002Z"
        clipRule="evenodd"
      />
      <path
        fill="url(#b)"
        d="M25.76 30.344a2.291 2.291 0 1 1-4.582 0 2.291 2.291 0 0 1 4.582 0Zm9.167 0a2.291 2.291 0 1 1-4.582 0 2.291 2.291 0 0 1 4.582 0Zm9.167 0a2.292 2.292 0 1 1-4.584 0 2.292 2.292 0 0 1 4.584 0Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1={32.635}
          x2={32.635}
          y1={8}
          y2={57.271}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF0420" />
          <stop offset={1} stopColor="#BD2738" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={32.636}
          x2={32.636}
          y1={28.052}
          y2={32.635}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF0420" />
          <stop offset={1} stopColor="#BD2738" />
        </linearGradient>
      </defs>
    </svg>
  );
};