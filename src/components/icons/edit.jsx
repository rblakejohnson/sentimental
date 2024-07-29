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
        d="M10.999 18.57c-1.478 1.508-6.478 1.643-6.837 1.225-.36-.417-.197-5.29 1.269-6.793 1.466-1.504 4.752-4.76 7.593-7.594a3.952 3.952 0 0 1 5.568 5.569c-2.84 2.833-6.116 6.085-7.593 7.593ZM12.5 6.5 17 11m-3 9h5"
      />
    </svg>
  );
}

export const EditIcon = wrapSvg(Svg);
