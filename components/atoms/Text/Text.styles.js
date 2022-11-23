import styled from "styled-components";
import theme from "styles/theme";

export const Font = styled.p`
  color: ${(props) => theme.colors[props.color] || theme.colors.grayDark};
  font-size: ${(props) => theme.fontSize[props.size] || theme.fontSize.base};
  font-weight: ${(props) =>
    theme.fontWeight[props.weight] || theme.fontWeight.normal};
  margin: 0;
  padding: ${(props) => theme.spacing[props.spacing] || theme.spacing["0"]};
  text-align: ${(props) =>
    theme.textAlign[props.textAlign] || theme.textAlign.default};
  width: ${(props) => theme.width[props.width] || theme.width.full};
`;
