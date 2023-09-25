import { Icon } from "@/types/common";

export const ChickenIcon: Icon = ({ width = 13, height = 15, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 13 15"
      {...props}
    >
      <mask
        id="mask0_1202_7459"
        style={{ maskType: "luminance" }}
        width="13"
        height="15"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#fff" d="M12.76 0H.24v15h12.52V0z"></path>
      </mask>
      <g mask="url(#mask0_1202_7459)">
        <path
          fill="url(#paint0_linear_1202_7459)"
          d="M5.619 4.683s.311-.322.876-.322.876.322.876.322c3.48-1.776 3.922-3.948 3.922-3.948-.442.677-1.154.876-1.154.876C8.77.017 6.495 0 6.495 0S4.227.017 2.86 1.602c0 0-.713-.198-1.155-.875 0 .008.442 2.18 3.914 3.956z"
        ></path>
        <path
          fill="url(#paint1_linear_1202_7459)"
          d="M3.908 5.418c.54.371 1.278 0 1.278 0s-1.04-.611-1.589-1.132c0 0-.23.76.311 1.132z"
        ></path>
        <path
          fill="url(#paint2_linear_1202_7459)"
          d="M6.495 5.212s-1.13.14-1.13 1.52v.826l-.851.52s1.072.264 1.981 3.147c.909-2.883 1.982-3.147 1.982-3.147l-.852-.52v-.826c.008-1.371-1.13-1.52-1.13-1.52z"
        ></path>
        <path
          fill="url(#paint3_linear_1202_7459)"
          d="M11.613 8.755c-.106-1.553.09-4.947-.729-6.03 0 0-.499.686-.843 1.033 0 0 .279.47.279 1.099 0 .627-.574 1.536-1.9 1.536l.057.752 1.589.983s-1.638.214-2.4 2.246c-.76 2.032-1.17 3.61-1.17 3.61s-.41-1.578-1.171-3.61c-.762-2.032-2.4-2.246-2.4-2.246l1.59-.983.057-.752c-1.327 0-1.9-.917-1.9-1.536 0-.62.278-1.099.278-1.099-.335-.347-.835-1.032-.835-1.032-.819 1.082-.622 4.476-.728 6.03C1.28 10.3.24 12.281.24 12.281c.279-.124 1.662-1.396 1.662-1.396l1.27 1.966 1.269-1.156 2.063 3.287 2.063-3.287 1.27 1.156 1.269-1.966s1.383 1.264 1.662 1.396c-.008.009-1.048-1.982-1.155-3.527z"
        ></path>
        <path
          fill="url(#paint4_linear_1202_7459)"
          d="M9.092 5.418c.54-.372.31-1.132.31-1.132-.556.52-1.588 1.132-1.588 1.132s.73.363 1.278 0z"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1202_7459"
          x1="6.499"
          x2="6.499"
          y1="0"
          y2="4.683"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF0420"></stop>
          <stop offset="1" stopColor="#BD2738"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_1202_7459"
          x1="4.367"
          x2="4.367"
          y1="4.286"
          y2="5.583"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF0420"></stop>
          <stop offset="1" stopColor="#BD2738"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_1202_7459"
          x1="6.495"
          x2="6.495"
          y1="5.212"
          y2="11.225"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF0420"></stop>
          <stop offset="1" stopColor="#BD2738"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_1202_7459"
          x1="6.504"
          x2="6.504"
          y1="2.726"
          y2="14.983"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF0420"></stop>
          <stop offset="1" stopColor="#BD2738"></stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear_1202_7459"
          x1="8.633"
          x2="8.633"
          y1="4.286"
          y2="5.579"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF0420"></stop>
          <stop offset="1" stopColor="#BD2738"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
