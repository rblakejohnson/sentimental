import { useQuery } from "@tanstack/react-query";
import { getPatient } from "../api";
import { Stack } from "../components/stack";
import { Main } from "../components/main";
import { Card } from "../components/card";
import { Line, Lines } from "../components/skeleton-loader";
import {
  Heading2,
  Heading4,
  Heading3,
  Heading6,
} from "../components/typography";
import { DefinitionList } from "../components/definition-list";
import Journal from "../components/journal";
import Entries from "../components/journal/entries";
import { formatDate } from "../utils/date";
// import { ButtonIcon } from "../components/button";
import { useParams } from "react-router-dom";
import { Row } from "../components/row";
import { BadgeInfo } from "../components/badge";
import { Avatar } from "../components/avatar";

const Patient = () => {
  const { id } = useParams();
  console.log("Patient ID", id);
  const { isPending, error, data } = useQuery({
    queryKey: ["patient"],
    queryFn: getPatient,
  });

  if (isPending) {
    return (
      <Lines gap="24px" height="88px">
        <Line />
        <Line />
        <Line />
      </Lines>
    );
  }

  if (error) {
    return `There was an error ¯\_(ツ)_/¯ ${error.message}`;
  }

  const patient = data.data[0];

  // console.log({patient})

  return (
    <Main>
      <Card>
        <Stack gap="xl">
          <Stack gap="md">
            {/* TODO: Faker API images are broken for some reason */}
            {/* <img src={patient.image} alt="Patient photo" /> */}
            <Row align="center" gap="md" style={{ flexWrap: "wrap" }}>
              <Avatar src="https://randomuser.me/api/portraits/women/0.jpg" />
              <Heading2 as="h1">{patient.name}</Heading2>
              <BadgeInfo>Status</BadgeInfo>
            </Row>

            {/* Smart Score could be computed based on patient and provider ratings as well as sentiment analysis */}
            <Row align="center" gap="sm">
              <Heading3>73</Heading3>
              <Heading6>
                Smart <br />
                Score
              </Heading6>
              {/* Trendline here */}
            </Row>

            <DefinitionList>
              <dt>Last visit</dt>
              <dd>{formatDate(patient.lastVisit)}</dd>
              <dt>Next visit</dt>
              <dd>
                {/* Link to scheduling if no visit is scheduled */}
                {formatDate(patient.nextVisit)} <a href="#">Schedule visit</a>
              </dd>
              <dt>Phone</dt>
              <dd>
                {/* Some way to start a call */}
                <a href={`tel:${patient.phone}`}>{patient.phone}</a>
              </dd>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${patient.email}`}>{patient.email}</a>
              </dd>
            </DefinitionList>
          </Stack>

          {/* Add patient summary with transform*/}

          <Stack gap="md">
            <Heading4 as="h2">New Entry</Heading4>
            <Journal />
            <Heading4 as="h2">Entries</Heading4>
            <Entries patientId={id} />
          </Stack>
        </Stack>
      </Card>
    </Main>
  );
};

export default Patient;
