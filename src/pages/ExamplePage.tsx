import { Button, Stack, Typography } from "@mui/material";
import { FC } from "react";
import useCookies from "react-cookie/cjs/useCookies";
import { useNavigate } from "react-router";
import { useGetAuthUserQuery, useLogoutMutation } from "../redux/api/api";
import { ENDPOINTS } from "../routes/endpoints";

const ExamplePage: FC = () => {
  const { data: response, isLoading } = useGetAuthUserQuery();
  const [logout, { error, isSuccess, isError }] = useLogoutMutation();

  const [cookies, _, removeCookie] = useCookies();
  const navigate = useNavigate();
  console.log(cookies.isAuthorised);

  async function handleClick() {
    await logout();
    removeCookie("isAuthorised");
    console.log(cookies.isAuthorised);

    if (isSuccess) navigate(ENDPOINTS.login);
  }

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
          <Typography align="center" mt={3}>
            <Button onClick={handleClick}>Log out</Button>
          </Typography>

          {isError && (
            <Typography color="red">{JSON.stringify(error)}</Typography>
          )}
        </Stack>
      )}
    </>
  );
};

export default ExamplePage;
