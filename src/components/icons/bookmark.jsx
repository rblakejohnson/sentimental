import { wrapSvg } from './wrapSvg';

function Svg({ color = 'currentColor', fill = 'none', ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18 11c0 4.5 0 10-.923 10S12.923 18 12 18s-4.154 3-5.077 3S6 15.5 6 11c0-8 .462-8 6-8s6 0 6 8z"
      />
    </svg>
  );
}

export const BookmarkIcon = wrapSvg(Svg);
