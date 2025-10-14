import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">C.D.S</LogoContainer>
        <NavLinks>
          <NavLink to="/Sign In">SIGN IN</NavLink>
          <NavLink to="/Features">FEATURES</NavLink>
          <NavLink to="/Pricing">PRICING</NavLink>
        </NavLinks>
      </NavigationContainer>
    </Fragment>
  );
};

export default Navigation;
