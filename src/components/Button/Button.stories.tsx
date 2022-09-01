import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button, { ButtonProps } from "./Button";
import { ThemeProvider } from "styled-components";
import { ITheme } from "../../config/theme";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "Default Button",
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
  color: "secondary",
  children: "secondary button",
};

export const Simple = () => <Button>Simple!</Button>;

export const WithTheme = () => {
  const customTheme: ITheme = {
    palette: {
      primary: {
        main: "#0B2739",
        focus: "#071824",
        active: "#071824",
        hover: "#0f364e",
        disabled: "#0b2739",
      },
      secondary: {},
    },
    grayScale: {},
    textColor: {
      primary: {
        main: "white",
      },
    },
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Button color="primary">churos!</Button>
    </ThemeProvider>
  );
};
