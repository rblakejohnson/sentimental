import { ButtonSecondary, ButtonIcon } from "../button";
import { Heading5, TextSmall } from "../typography";
import { BookmarkIcon } from "../icons/bookmark";
import { CheckVerifiedIcon } from "../icons/check-verified";
import {
  Container,
  Card,
  Header,
  Info,
  Actions,
  ButtonGroup,
} from "./components";
import { formatDate } from "../../utils/date";
import { DefinitionList } from "../definition-list";
import { BadgeSuccess } from "../badge";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Tile = ({ name, nextVisit, email, id }) => {
  return (
    <Container>
      <Card>
        <Header>
          <Heading5 as="h2">
            <Link style={{textDecoration: 'none'}} to={`/patient/${id}`}>{name}</Link>
          </Heading5>
          <BadgeSuccess>Status</BadgeSuccess>
        </Header>
        <Info gap="xs">
          <DefinitionList>
            <dt>
              <CheckVerifiedIcon size="16px" />
            </dt>
            <dd>
              <a href={`mailto:${email}`}>{email}</a>
            </dd>
          </DefinitionList>
        </Info>
        <Actions gap="md">
          <TextSmall>Next visit: {formatDate(nextVisit)}</TextSmall>
          <ButtonGroup gap="md">
            <ButtonIcon onClick={() => console.log("go")}>
              <BookmarkIcon
                // size="16px"
                fill="currentColor"
              />
            </ButtonIcon>
          </ButtonGroup>
        </Actions>
      </Card>
    </Container>
  );
};

export default Tile;
