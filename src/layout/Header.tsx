import { Box, Divider, Link, styled } from "@mui/material";
import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ENDPOINTS } from "../routes/endpoints";

const StyledNavLink = styled(NavLink)(() => ({
  textDecoration: "none",
  fontSize: 32,
  "& :active": {
    color: "cornflowerblue",
  },
}));

const Header: FC = () => {
  return (
    <>
      <Box
        component={"header"}
        display="flex"
        justifyContent="center"
        columnGap={5}
      >
        <StyledNavLink to={ENDPOINTS.transactions}>Home</StyledNavLink>

        <StyledNavLink to={ENDPOINTS.about}>About</StyledNavLink>
      </Box>
      <Divider />
      <Outlet />
    </>
  );
};

export default Header;
