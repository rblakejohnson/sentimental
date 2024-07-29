import styled from "styled-components";
import {
  colorNeutral600,
  fontSize14,
  fontSize16,
  fontSize19,
  fontSize24,
  fontSize32,
  fontSize44,
  fontSize58,
  fontSize80,
} from "../style/variables";

export const Heading1 = styled.h1`
  font-size: ${fontSize80};
  font-weight: normal;
  line-height: 1.1;
  text-wrap: balance;
`;

export const Heading2 = styled.h2`
  font-size: ${fontSize58};
  font-weight: normal;
  line-height: 1.1;
  text-wrap: balance;
`;

export const Heading3 = styled.h3`
  font-size: ${fontSize44};
  font-weight: normal;
  line-height: 1.1;
  text-wrap: balance;
`;

export const Heading4 = styled.h4`
  font-size: ${fontSize32};
  font-weight: normal;
  line-height: 1.1;
  text-wrap: balance;
`;

export const Heading5 = styled.h5`
  font-size: ${fontSize24};
  font-weight: normal;
  line-height: 1.1;
  text-wrap: balance;
`;

export const Heading6 = styled.h6`
  font-size: ${fontSize19};
  font-weight: normal;
  line-height: 1.1;
  text-wrap: balance;
`;

export const Text = styled.p`
  font-size: ${fontSize16};
`;

export const TextSmall = styled(Text)`
  font-size: ${fontSize14};
  color: ${colorNeutral600};
`;

export const Label = styled.label`
  font-size: ${fontSize14};
`;
