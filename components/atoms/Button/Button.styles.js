import styled from "styled-components";
import theme from "styles/theme";

export const ButtonContainer = styled.button`
  background: ${(props) => theme.colors[props.color]};
  box-shadow: 0 2px 6px 1px ${(props) => theme.colors[props.color]};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 0;
  padding: ${(props) => props.spacing};
  border: none;
  transition: background ease 0.5s;
  border-radius: ${(props) => props.borderRadius};
  cursor: ${(props) =>
    props.$loading || props.disabled ? "not-allowed" : "pointer"};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: ${(props) => theme.hover[props.color]};
  }
  &:focus {
    background: ${(props) => theme.hover[props.color]};
  }
`;
