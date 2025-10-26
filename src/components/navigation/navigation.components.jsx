import { Fragment, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./navigation.styles";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import Profile from "../profile/profile.components";
import { selectCurrentNavigationItem } from "../../store/navigationItem/navigationItem.selector";
import { setCurrentNavigationItem } from "../../store/navigationItem/navigationItem.reducer";

const Navigation = ({ navigationItems }) => {
  const currentNavigationItem = useSelector(selectCurrentNavigationItem);
  const dispatch = useDispatch();
  const navRef = useRef(null);
  const updateNavigationItem = (item) => () => {
    if (item !== currentNavigationItem) {
      dispatch(setCurrentNavigationItem(item));
    }
  };

  useEffect(() => {
    if (navRef.current) {
      navRef.current.focus();
    }
  }, []);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/Dashboard">C.D.S</LogoContainer>
        <Profile />

        <NavLinks>
          {navigationItems.map((item) => (
            <NavLink
              key={item.id}
              to={`/${item.label}`}
              onClick={updateNavigationItem(item.label)}
              ref={item.id === 1 ? navRef : null}
              {...(item.label === "Sign Out" && { onClick: signOutUser })}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
