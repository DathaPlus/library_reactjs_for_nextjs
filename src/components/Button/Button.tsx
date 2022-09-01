import React, {
  ElementType,
  ForwardedRef,
  MouseEventHandler,
  MutableRefObject,
  ReactNode,
} from "react";
import { StyledButtonComponent } from "./Styled";
import { TPaletteColor } from "../../config/theme";
export type ComponentSize = "default" | "large" | "small";

export interface IButton {
  color?: TPaletteColor;
  type?: string;
  icon?: ElementType;
  className?: string;
  children?: ReactNode;
  loading?: boolean;
}

type HTMLButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & IButton;

type HTMLAnchorProps = {
  href?: string;
} & IButton;

/**
 * For React Router Link
 */
type CustomNodeProps = {
  as?: ElementType;
  to?: string;
} & IButton;

export type ButtonProps = HTMLButtonProps & HTMLAnchorProps & CustomNodeProps;

const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = (
  props: ButtonProps,
  ref: ForwardedRef<unknown>
) => {
  const {
    className = "",
    children,
    loading = false,
    onClick,
    href,
    as,
    to,
    color = "primary",
  }: ButtonProps = props;

  if (as)
    return (
      <StyledButtonComponent
        as={as}
        to={to}
        ref={ref}
        className={className}
        color={color}
      >
        {loading ? "Loading..." : children}
      </StyledButtonComponent>
    );

  if (href)
    return (
      <StyledButtonComponent
        as="a"
        href={href}
        className={className}
        color={color}
      >
        {loading ? "Loading..." : children}
      </StyledButtonComponent>
    );

  return (
    <StyledButtonComponent
      as="button"
      type="button"
      onClick={onClick}
      ref={ref as MutableRefObject<HTMLButtonElement>}
      className={className}
      color={color}
    >
      {loading ? "Loading..." : children}
    </StyledButtonComponent>
  );
};
export default React.forwardRef<unknown, ButtonProps>(Button);
