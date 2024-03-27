import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { SpinnerProps, Spinner } from '../src/Spinner';
import { ThemeProvider } from '../src/ThemeProvider';
import { Icon } from '../src/Icon';

const meta: Meta = {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
  args: {
    size: 'medium',
  },
  decorators: [
    Story => (
      <ThemeProvider theme={{ theme: Story().props.theme }}>{Story()}</ThemeProvider>
    ),
  ],
};

export default meta;

const Template: StoryFn<SpinnerProps> = args => <Spinner {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
