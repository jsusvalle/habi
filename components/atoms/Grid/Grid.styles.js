import styled from "styled-components";
import { device } from "utils/device";

export const GridContainer = styled.div`
  display: grid;
  row-gap: 16px;
  column-gap: 10px;

  grid-template-columns: ${(props) => (props.items === 2 ? "1fr" : "1fr 1fr")};
  grid-template-rows: ${(props) => (props.items === 2 ? "1fr 1fr" : "1fr")};

  @media ${device.laptop} {
    grid-template-columns: ${(props) => `repeat(${props.items}, 1fr)`};
    grid-template-rows: 1fr;
  }
`;
