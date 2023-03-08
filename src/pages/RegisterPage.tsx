import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { RegisterForm } from "../components/auth/RegisterForm";

const RegisterPage: FC = () => {
  return (
    <>
      <Typography variant="h2" align="center">
        Please, register to continue
      </Typography>

      <Stack spacing={2} mt={10}>
        <RegisterForm />
      </Stack>
    </>
  );
};

export default RegisterPage;
