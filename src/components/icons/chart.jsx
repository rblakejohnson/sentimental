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
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
        <path d="M13.996 10.333v7.334C14.056 19.5 13.38 20 12 20c-1.402 0-2.05-.5-1.997-2.333v-7.334C10.003 9 10.003 8 12 8c1.996 0 1.996 1 1.996 2.333ZM7 15.528v2.766C7 19.51 6.382 20 5 20c-1.404 0-2-.49-2-1.706v-2.766C3 13.875 3 13 5 13s1.941.875 2 2.528ZM21 6.778v10.444C21 20 20.382 20 19 20c-1.404 0-2 0-2-2.778V6.778C17 4.556 17 4 19 4s2 .556 2 2.778Z" />
      </g>
    </svg>
  );
}

export const ChartIcon = wrapSvg(Svg);
