import { wrapSvg } from './wrapSvg';

function Svg({ color = 'currentColor', ...props }) {
  return (
    <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
  >
    <g clipPath="url(#a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.333}
        d="m6 7.999 1.333 1.333 3-3m1.601-3.001c.137.332.4.596.733.734l1.163.482a1.356 1.356 0 0 1 .734 1.77l-.482 1.163a1.353 1.353 0 0 0 0 1.038l.481 1.162a1.358 1.358 0 0 1-.733 1.771l-1.163.482c-.332.137-.596.4-.734.732l-.482 1.164a1.355 1.355 0 0 1-1.77.733l-1.163-.481a1.355 1.355 0 0 0-1.037 0l-1.163.482a1.355 1.355 0 0 1-1.77-.733l-.481-1.164a1.355 1.355 0 0 0-.733-.734L2.17 11.45a1.355 1.355 0 0 1-.733-1.77l.481-1.162a1.355 1.355 0 0 0 0-1.037l-.481-1.164a1.355 1.355 0 0 1 .733-1.772l1.163-.481c.332-.137.595-.4.733-.732l.482-1.163a1.355 1.355 0 0 1 1.77-.734l1.163.482c.332.137.705.137 1.037-.001l1.164-.48a1.355 1.355 0 0 1 1.77.733l.482 1.164v-.002Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
  );
}

export const CheckVerifiedIcon = wrapSvg(Svg);
