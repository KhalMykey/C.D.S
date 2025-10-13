import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3px;
  background: linear-gradient(
    90deg,
    hsla(328, 75%, 45%, 1) 0%,
    hsla(269, 85%, 41%, 1) 100%
  );
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  width: 10%;
  padding: 25px;
  margin-top: 3px;
  color: white;
  font-weight: bold;
  font-size: 70px;
  text-decoration: none;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: white;
`;
