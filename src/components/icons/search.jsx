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
        d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-2 6 6"
      />
    </svg>
  );
}

export const SearchIcon = wrapSvg(Svg);
