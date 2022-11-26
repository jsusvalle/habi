import styled from "styled-components";
import theme from "styles/theme";

export const ContainerForm = styled.div`
  padding: 0.5rem;
`;

export const LabelContainer = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  color: #000;
  font-weight: bold;
`;

export const ContainerSelect = styled.div`
  border: ${(props) => (props.error ? "1px solid #c53030" : "1px solid #333C4E")};
  padding: 2px;
  border-radius: 4px;
  width: 100%;
  color: #000;
  cursor: text;
  font-size: 1rem;
  align-items: center;
  font-weight: 400;
  line-height: 1.1876em;
  letter-spacing: 0.00938em;
  position: relative;
`;

export const InputSelect = styled.select`
  background: ${(props) =>
  theme.colors[props.bgColor] || theme.colors.grayDark};
  font: inherit;
  color: #000;
  border: 0;
  height: 2.5rem;
  margin: 0;
  display: block;
  position: relative;
  padding: ${(props) => theme.spacing[props.spacing] || theme.spacing["0"]};
  min-width: 0;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: inherit;
`;

export const ContainerError = styled.div`
  font-size: 0.8rem;
  padding: 0.5rem 0;
  color: #c53030
`;
