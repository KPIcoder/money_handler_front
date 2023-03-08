import { Box, Button, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/api/api";

interface Props {
  redirectUrl?: string;
}

export const LoginForm: FC<Props> = ({ redirectUrl }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [login, { isLoading, error, isSuccess }] = useLoginMutation();
  const isValid = email.length > 0 && password.length > 0;

  async function onSubmit(e: React.MouseEvent) {
    e.preventDefault();

    await login({ email, password }).unwrap();

    if (redirectUrl && isSuccess) navigate(redirectUrl);
  }

  return isLoading ? (
    <Typography>Loading...</Typography>
  ) : (
    <Box display="flex" flexDirection="column" rowGap={2} alignItems="center">
      <TextField
        label={"Email"}
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        label={"Password"}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && "data" in error && (
        <Typography color={"red"} variant="caption">
          {JSON.stringify(error.data)}
        </Typography>
      )}

      <Button
        variant="contained"
        type="submit"
        disabled={!isValid}
        onClick={onSubmit}
      >
        Log in
      </Button>
      <Typography variant="subtitle1">
        Don't have an account? <Link to={"/register"}>Register</Link>
      </Typography>
    </Box>
  );
};
