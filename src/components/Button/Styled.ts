import styled from "styled-components";
import defaultTheme, { ITheme, TPaletteColor } from "../../config/theme";
import { get } from "lodash";

export type IButtonStyled = {
  theme: ITheme;
  color: TPaletteColor;
};

export const StyledButtonComponent = styled.a<IButtonStyled>`
  padding: 0.75rem 1rem;
  font-size: 1.125rem;
  line-height: 1.5rem;
  border-radius: 25px;
  letter-spacing: 0;
  border: none;
  box-shadow: 0 2px 3px 0 rgb(11 39 57 / 30%);
  text-align: center;
  text-decoration: none;
  background: ${({ theme, color }: IButtonStyled) =>
    get(theme, `palette.${color}.main`, defaultTheme.palette[color]?.main)};
  color: ${({ theme, color }: IButtonStyled) =>
    get(theme, `textColor.${color}.main`, defaultTheme.textColor[color]?.main)};
  cursor: pointer;
  :hover {
    background: ${({ theme, color }: IButtonStyled) =>
      get(
        theme,
        `palette.${color}.hover`,
        defaultTheme.textColor[color]?.hover
      )};
    color: ${({ theme, color }: IButtonStyled) =>
      get(
        theme,
        `textColor.${color}.main`,
        defaultTheme.textColor[color]?.main
      )};
    text-decoration: none;
  }
  :active,
  :focus {
    background: ${({ theme, color }: IButtonStyled) =>
      get(theme, `palette.${color}.focus`, defaultTheme.palette[color]?.focus)};
  }
`;
