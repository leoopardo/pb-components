import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { TextProps, Text } from '../src/Typography/Text';
import { ThemeProvider } from '../src/ThemeProvider';

const meta: Meta = {
  title: 'Components/Text',
  component: Text,
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
    variant: 'display',
    children: "Hello World!",
    level: 1,
  },
  decorators: [
    Story => (
      <ThemeProvider theme={{theme: "light"}}>
          {Story()}
      </ThemeProvider>
    ),
  ],
};

export default meta;

const Template: StoryFn<TextProps> = args => <Text {...args}  />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
