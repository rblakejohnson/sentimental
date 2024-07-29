import { wrapSvg } from './wrapSvg';

function Svg({ color = 'currentColor', ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 12.444 9.26 17 19 7"
      />
    </svg>
  );
}

export const CheckIcon = wrapSvg(Svg);
