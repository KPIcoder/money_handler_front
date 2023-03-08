import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useLocation } from "react-router-dom";
import { LoginForm } from "../components/auth/LoginForm";

const LoginPage: FC = () => {
  const { state } = useLocation();

  return (
    <>
      <Typography variant="h2" align="center">
        Please, log in to continue
      </Typography>
      <Stack spacing={2} mt={10}>
        <LoginForm redirectUrl={state} />
      </Stack>
    </>
  );
};

export default LoginPage;
