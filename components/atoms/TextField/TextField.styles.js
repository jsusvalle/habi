import styled from "styled-components";
import theme from "styles/theme";

export const Label = styled.label`
  position: absolute;
  display: inline-block;
  pointer-events: none;
  z-index: 1;
  color: #ffffff;
  opacity: 0.8;
  left: 16px;
  top: 12px;

  transition: 0.4s cubic-bezier(0.65, -0.32, 0.38, 1.23) all;
  -moz-transition: 0.4s cubic-bezier(0.65, -0.32, 0.38, 1.23) all;
  -webkit-transition: 0.4s cubic-bezier(0.65, -0.32, 0.38, 1.23) all;
`;

export const ContainerTextField = styled.div`
  background: ${(props) =>
    theme.colors[props.bgColor] || theme.colors.grayDark};
  border: ${(props) => (props.error ? "1px solid #c53030" : "none")};
  padding: 2px;
  border-radius: 4px;
  width: 100%;
  color: #fff;
  cursor: text;
  font-size: 1rem;
  align-items: center;
  font-weight: 400;
  line-height: 1.1876em;
  letter-spacing: 0.00938em;

  position: relative;

  input:focus ~ ${Label}, input:not([value=""]) ~ ${Label} {
    top: -10px;
    left: 8px;
    opacity: 1;
    padding: 0px 8px;
    border-radius: 2px;
  }

  input:not([value=""]) ~ ${Label} {
    background: ${theme.colors.grayDark};
    color: #ffffff;
  }

  input:focus ~ ${Label} {
    background: ${theme.colors.grayMedium};
    color: white;
  }
`;

export const InputTextField = styled.input`
  font: inherit;
  color: white;
  border: 0;
  height: 2.5rem;
  margin: 0;
  display: block;
  position: relative;
  padding: ${(props) => theme.spacing[props.spacing] || theme.spacing["0"]};
  min-width: 0;
  background: none;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: inherit;
  -webkit-tap-highlight-color: transparent;
`;
