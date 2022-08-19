import { Divider } from './Styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

export const Default: ComponentStory<typeof Divider> = (_args) => (
  <>
    <p>antes del divider?</p>
    <Divider />
    <p>después del divider :)</p>
  </>
);

export const Simple: ComponentStory<typeof Divider> = (_args) => <Divider />;

