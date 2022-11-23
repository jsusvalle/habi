import styled from "styled-components";
import theme from "styles/theme";

export const Container = styled.div`
  display: ${(props) => theme.display[props.display] || theme.display.block};
  background: ${(props) => theme.colors[props.color] || theme.colors.none};
  margin: ${(props) => theme.spacing[props.margin] || theme.spacing["0"]};
  padding: ${(props) => theme.spacing[props.padding] || theme.spacing["0"]};
  width: ${(props) => theme.width[props.width] || theme.width.auto};
  border-radius: ${(props) =>
    theme.borderRadius[props.radius] || theme.borderRadius.none};
`;
