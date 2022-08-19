import styled from "styled-components";

export interface ITheme {
  color?: string;
  className?: string;
  background?: string;
  borderRadius?: string;
  maxWidth?: string;
  shadow?: string;
  fontSize?: string;
  lineHeight?: string;
  borderLeft?: string;
  borderTop?: string;
  height?: string;
  opacity?: string;
  fontWeight?: string;
  textOverflow?: string;
  whiteSpace?: string;
  beforeColor?: string;
  mediaWith?: string;
  display?: string;
  backgroundHover?: string;
  colorHover?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  border?: string;
  position?: string;
  bottom?: string;
  left?: string;
  width?: string;
  pointerEvents?: string;
  textAlign?: string;
  paddingLeft?: string;
  padding?: string;
  top?: string;
  marginTop?: string;
  margin?: string;
  textDecoration?: string;
}

export const Divider = styled.div.attrs<ITheme>((_props: ITheme) => {})<ITheme>`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: ${(props) => props.borderTop};
`;
Divider.defaultProps = {
  borderTop: "1px solid rgba(0,0,0,.1)",
};
