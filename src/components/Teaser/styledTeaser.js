import styled from "styled-components";
import { defaultColor } from "../../constants/colors";

export const TeaserContainer= styled.div`
  background-color: ${defaultColor};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FoodLogo = styled.img`
  width: 100%;
  height: 65px;
  object-fit: contain;
`;
