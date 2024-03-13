import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Props, BigNumber } from '../src/Cards';
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
  decorators: [
    Story => (
      <ThemeProvider theme={{ primaryColor: 'red' }}>
        <div style={{ height: 150, width: 300 }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;

const Template: StoryFn<Props> = args => <BigNumber {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
