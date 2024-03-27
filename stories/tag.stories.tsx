import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { TagProps, Tag } from '../src/Tag';
import { ThemeProvider } from '../src/ThemeProvider';

const meta: Meta = {
  title: 'Components/Tag',
  component: Tag,
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
    status: "success",
    label: "Label"
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

const Template: StoryFn<TagProps> = (args) => <Tag {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
