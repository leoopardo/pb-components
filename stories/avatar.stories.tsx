import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Avatar, AvatarProps } from '../src/Avatar';
import { ThemeProvider } from '../src/ThemeProvider';

const meta: Meta = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: { defaultValue: 'md' },
  },
  parameters: {
    controls: { expanded: true },
  },
  args: {
    children: 'Pay Brokers',
    size: 'md',
    shape: 'square',
    src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={{ theme: Story().props.theme }}>
        {Story()}
      </ThemeProvider>
    ),
  ],
};

export default meta;

const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
