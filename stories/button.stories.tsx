import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Props, Button } from '../src/Button';
import { ThemeProvider } from '../src/ThemeProvider';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
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
    children: 'Button',
    variant: 'filled',
    style: {width: '200px'}
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

const Template: StoryFn<Props> = args => <Button {...args}  />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};