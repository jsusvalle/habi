import styled from "styled-components";
import theme from "styles/theme";

export const Horizontal = styled.div`
  width: 100%;
  height: ${(props) => theme.spacing[props.spacing]};
`;

export const Vertical = styled.div`
  height: 100%;
  width: ${(props) => theme.spacing[props.spacing]};
`;
