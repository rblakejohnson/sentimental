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
        d="M3 6.587C3 5.035 6 4 12 4s9 1.035 9 2.587C21 9 14 12 14 14.347v3.621c0 1.552-4 3.104-4 1.035v-4.656C10 12 3 9 3 6.587Z"
      />
    </svg>
  );
}

export const FilterIcon = wrapSvg(Svg);
