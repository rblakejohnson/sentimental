import { Link } from "react-router-dom";
import styled from "styled-components";
import { fontSize14, spacing16, spacing32 } from "../style/variables";
import { Row } from "../row";
import { Heading6 } from "../typography";

export const Header = styled(Row)`
  padding: ${spacing32} ${spacing16} ${spacing16};
`;

export const Nav = styled.nav`
  font-size: ${fontSize14};
`;

export const SiteHeader = () => {
  return (
    <Header gap="xl" align="center">
      <Heading6 as="span">Sentimental</Heading6>
      <Nav>
        <Link to="/">Patients</Link>
      </Nav>
    </Header>
  );
};
