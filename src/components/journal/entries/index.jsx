import { useQuery } from "@tanstack/react-query";
import { getPatientJournalEntries } from "../../../api";
import { Stack } from "../../stack";
import { Line, Lines } from "../../skeleton-loader";
import { Card } from "../../card";
import { Text, TextSmall } from "../../typography";
import { formatDate } from "../../../utils/date";
// import Sentiment from "./sentiment";
import { Row } from "../../row";
import { BadgeDefault } from "../../badge";

const Entries = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["patients"],
    queryFn: getPatientJournalEntries,
  });

  // console.log({ data });

  if (isPending) {
    return (
      <Lines gap="16px" height="64px">
        <Line />
        <Line />
        <Line />
      </Lines>
    );
  }

  if (error) {
    return `There was an error ¯\_(ツ)_/¯ ${error.message}`;
  }

  return (
    <Stack gap="md">
      {data.data.map(({ id, text, createdDate }) => (
        <Card key={id}>
          <Row gap="sm" align="center">
            <TextSmall>{formatDate(createdDate)}</TextSmall>
            {/* TODO: move to data transform closer to api call to only use 1 worker */}
            {/* <Sentiment text={text} /> */}

            <BadgeDefault>Sentiment</BadgeDefault>
          </Row>
          <Text>{text}</Text>
        </Card>
      ))}
    </Stack>
  );
};

export default Entries;
