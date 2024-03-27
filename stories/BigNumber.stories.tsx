import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { BigNumberProps, BigNumber } from '../src/BigNumber';
import { ThemeProvider } from '../src/ThemeProvider';

const meta: Meta = {
  title: 'Components/BigNumber',
  component: BigNumber,
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
    label: 'Label',
    theme: 'light',
    status: 'default',
    value: 1000,
    total: 100,
    currency: true,
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

const Template: StoryFn<BigNumberProps> = (args) => <BigNumber {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
