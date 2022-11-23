import styled from "styled-components";
import theme from "styles/theme";
import { device } from "utils/device";

export const ContainerCardList = styled.div`
  position: relative;
  background: ${(props) => theme.colors.white};
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @media ${device.laptop} {
    flex-direction: row;
    padding: 1.5rem 3rem;
  }

  @media ${device.desktop} {
    padding: 1.5rem 3rem;
  }
`;

export const Pill = styled.div`
  position: absolute;
  border-radius: 2rem;
  padding: 2px 10px;
  background: #04c39a;
  color: white;
  top: -9px;
  left: 45px;
`;
