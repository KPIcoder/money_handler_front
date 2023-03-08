import { FC, useState } from "react";
// mui
import { Box, Button, TextField, Typography } from "@mui/material";
// routing
import { Link, useNavigate } from "react-router-dom";
import { ENDPOINTS } from "../../routes/endpoints";
// interfaces
import { IAuthUserCredentials } from "../../interfaces/auth.interface";
// redux
import { useRegisterMutation } from "../../redux/api/api";

export const RegisterForm: FC = () => {
  const [register, { isSuccess, error, data }] = useRegisterMutation();
  const navigate = useNavigate();
  const [user, setUser] = useState<
    IAuthUserCredentials & { repeatPassword: string }
  >({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const isValidUser = Boolean(
    user.name?.trim() !== "" &&
      user.email?.trim() !== "" &&
      user.password?.trim() !== "" &&
      user.password === user.repeatPassword
  );

  type Key = keyof typeof user;

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: Key
  ) {
    e.preventDefault();
    setUser((prev) => ({ ...prev, [key]: e.target.value }));
  }

  async function handleClick() {
    await register({
      name: user.name as string,
      email: user.email as string,
      password: user.password as string,
    });

    if (isSuccess) navigate(ENDPOINTS.login);
  }

  return (
    <Box display="flex" flexDirection="column" rowGap={2} alignItems="center">
      <TextField
        label={"Name"}
        type="text"
        value={user.name}
        onChange={(e) => handleChange(e, "name")}
      />

      <TextField
        label={"Email"}
        type="text"
        value={user.email}
        onChange={(e) => handleChange(e, "email")}
      />

      <TextField
        label={"Password"}
        type="password"
        value={user.password}
        onChange={(e) => handleChange(e, "password")}
      />

      <TextField
        label={"Repeat Password"}
        type="password"
        value={user.repeatPassword}
        onChange={(e) => handleChange(e, "repeatPassword")}
      />

      {error && "data" in error && (
        <Typography color={"red"} variant="caption">
          {JSON.stringify(error.data)}
        </Typography>
      )}

      <Button variant="contained" onClick={handleClick} disabled={!isValidUser}>
        Register
      </Button>
      <Typography variant="subtitle1">
        Already have an account? <Link to={"/login"}>Log in</Link>
      </Typography>
    </Box>
  );
};
