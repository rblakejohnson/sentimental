import { useQuery } from "@tanstack/react-query";
import { getPatients } from "../api";
import Tile from "../components/tile";
import { Stack } from "../components/stack";
import { Main } from "../components/main";
import { Line, Lines } from "../components/skeleton-loader";

const Patients = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["patients"],
    queryFn: getPatients,
  });

  // console.log({ data });
  if (isPending) {
    return (
      <Lines gap="24px" height="88px">
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
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
    <Main>
      <Stack gap="md">
        {data.data.map((patient) => (
          <Tile key={patient.id} {...patient} />
        ))}
      </Stack>
    </Main>
  );
};

export default Patients;
