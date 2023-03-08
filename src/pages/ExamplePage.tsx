import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useGetAuthUserQuery } from "../redux/api/api";

const ExamplePage: FC = () => {
  const { data: response, isLoading } = useGetAuthUserQuery();

  return (
    <>
      <Typography variant="h2" align="center">
        Current User
      </Typography>
      {isLoading && <Typography variant="h3">Loading...</Typography>}
      {response && (
        <Stack spacing={2} p={3}>
          <Typography align="center" variant="h5">
            {response.data.name} -- {response.data.email} --{" "}
            {new Date(response.data.createdAt).toISOString()}
          </Typography>
        </Stack>
      )}
    </>
  );
};

export default ExamplePage;
