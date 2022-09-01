import * as React from "react";
import { Divider } from "./Styled";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/Divider",
  component: Divider,
} as ComponentMeta<typeof Divider>;

export const Default: ComponentStory<typeof Divider> = (_args) => (
  <>
    <h1>es una simple línea personalizada como divisor de contenidos</h1>
    <p>antes del divider</p>
    <Divider />
    <p>después del divider</p>
  </>
);

export const Simple: ComponentStory<typeof Divider> = (_args) => <Divider />;
