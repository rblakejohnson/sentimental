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
        d="M16 17.917C16 19.19 13 20 10 20c-3.5 0-6-.809-6-2.083C4 16.057 7 15 10 15s6 1.25 6 2.917ZM10 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm9.5 5.334c1.045-.296 1.5-.787 1.5-1.413 0-1.21-1.739-2.156-4-2.373M17 11a2.5 2.5 0 0 0 0-5"
      />
    </svg>
  );
}

export const UsersIcon = wrapSvg(Svg);
