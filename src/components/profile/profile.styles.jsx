import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #f5deb3;
  margin-top: 10px;
  border-bottom: 1px dashed white;
  // border-bottom: solid 1px rgba(255, 255, 255, 0.2);
  // border: 2px dashed white;
  // box-shadow: 0px 2px 4px hsl(0 0% 0% / 25%);
  // border-radius: 10px;
  // background-color: red;
`;

export const PersonableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ProfilePicHolder = styled.label`
  width: 65px;
  height: 65px;
  margin-top: 8px;
  border-radius: 50%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ccc;
  cursor: pointer;
  margin-top: 8px;
  background: linear-gradient(
    90deg,
    hsla(328, 75%, 45%, 1) 0%,
    hsla(269, 85%, 41%, 1) 100%
  );

  &:before {
    /* The plus sign */
    content: "+";
    font-size: 30px; /* Adjust size as needed */
    color: #888;
    font-weight: bold;
    line-height: 1;
  }

  &:hover {
    border-color: white;
  }
`;

export const PlusSign = styled.input`
  display: none;
`;

export const ProfilePicImage = styled.img`
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfileName = styled.h2`
  font-size: 12px;
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  background: linear-gradient(
    90deg,
    hsla(328, 75%, 45%, 1) 0%,
    hsla(269, 85%, 41%, 1) 100%
  );
  -webkit-background-clip: text; /* Clips the background to the text itself */
  background-clip: text;
  color: transparent;
`;
export const ProfileEmail = styled.p`
  font-size: 8px;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
`;
