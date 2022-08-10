import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ButtonTemp, { ButtonProps } from "./ButtonTemp";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/ButtonTemp",
  component: ButtonTemp,
} as ComponentMeta<typeof ButtonTemp>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonTemp> = (args: ButtonProps) => (
  <ButtonTemp {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "Default ButtonTemp",
};

export const Simple = () => <ButtonTemp>Simple!</ButtonTemp>;
