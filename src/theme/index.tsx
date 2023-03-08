import { FC, ReactNode, useContext, useMemo } from "react";
import {
  createTheme,
  CssBaseline,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material";
import typography from "./typography";
import { ColourModeContext } from "../contexts/mode.context";

interface Props {
  children: ReactNode;
}

const ThemeProvider: FC<Props> = ({ children }) => {
  const { changeColour, mode } = useContext(ColourModeContext);

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      typography,
    }),
    [mode]
  );

  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
