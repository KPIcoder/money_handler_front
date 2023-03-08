import { createContext, FC, ReactNode, useMemo, useState } from "react";

interface State {
  changeColour: { toggleColourMode: VoidFunction };
  mode: "light" | "dark";
}

const initialState: State = {
  changeColour: { toggleColourMode: () => {} },
  mode: "light",
};

export const ColourModeContext = createContext(initialState);

interface Props {
  children: ReactNode;
}

export const ColourModeProvider: FC<Props> = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const changeColour = useMemo(
    () => ({
      toggleColourMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  return (
    <ColourModeContext.Provider value={{ changeColour, mode }}>
      {children}
    </ColourModeContext.Provider>
  );
};
