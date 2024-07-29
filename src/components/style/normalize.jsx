import { createGlobalStyle } from 'styled-components';
import { fontFamilySans, colorNeutral100, colorTeal700, colorTeal500 } from './variables';

// inspired by https://www.joshwcomeau.com/css/custom-css-reset/
export const Normalize = createGlobalStyle`
html, body, #__next {
  height: 100%;
}

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

body {
  color: ${colorTeal700};
  background-color: ${colorNeutral100};
  font-family: ${fontFamilySans};
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

a {
  color: ${colorTeal500};
}

#__next {
  isolation: isolate;
}
`;
