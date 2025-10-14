import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  height: 150px;
  /* background-color: #f5f5f5; */
  //   background: radial-gradient(circle at top, #43470b, #434343);
  //   background: radial-gradient(circle at top, #43470b, #ede1f2);
  background: radial-gradient(circle at top, #43470b, #2c2f34);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BannerText = styled.h1`
  font-size: 80px;
  margin: 0;
  margin-bottom: -20px;
  font-family: "Open Sans", sans-serif;
  font-weight: bolder;
  color: #f5f5f5;
`;
export const BannerSubText = styled.h2`
  font-size: 24px;
  font-family: "Open Sans", sans-serif;
  font-weight: normal;
  color: #f5f5f5;
`;
