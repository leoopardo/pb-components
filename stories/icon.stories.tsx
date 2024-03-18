import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Props, Icon } from '../src/Icon';
import { ThemeProvider } from '../src/ThemeProvider';

const meta: Meta = {
  title: 'Components/Icon',
  component: Icon,
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
    name: 'AdjustmentsHorizontalIcon',
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

const Template: StoryFn<Props> = args => <Icon {...args}  />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
