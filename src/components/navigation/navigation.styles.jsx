import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 100vh;
  width: 150px;
  background: radial-gradient(circle at top, #43470b, #2c2f34);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 90%;
  margin-bottom: 5px;
  color: #f5deb3;
  font-weight: bolder;
  font-size: 50px;
  text-decoration: underline; /* Ensure the underline is present */
  text-underline-offset: 5px; /* Adjust this value as needed */
`;

export const NavLinks = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
`;

export const NavLink = styled(Link)`
  padding: 5px 15px;
  cursor: pointer;
  color: #f5deb3;
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 10px;
  &:hover {
    background-color: white;
    color: ;
    border: 1px solid white;
    border-radius: 50px;
  }

  &:focus {
    background-color: white;
    color: #d2b48c;
    border: 1px solid white;
    border-radius: 50px;
  }
`;
