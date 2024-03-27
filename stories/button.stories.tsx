import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { ButtonProps, Button } from '../src/Button';
import { ThemeProvider } from '../src/ThemeProvider';
import { Icon } from '../src/Icon';

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
    iconPosition: 'right',
    size: 'medium',
    style: { width: '200px' },
    icon: <Icon name="PlusCircleIcon" />,
    buttonList: [
      {
        label: 'Detalhes',
        onClick: () => console.log('teste'),
        icon: <Icon name="EyeIcon" />,
      },
      {
        label: 'Editar',
        onClick: () => console.log('teste'),
        icon: <Icon name="PencilIcon" />,
      },
      {
        label: 'Excluir',
        onClick: () => console.log('teste'),
        icon: <Icon name="TrashIcon" />,
      },
    ],
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={{ theme: Story().props.theme }}>{Story()}</ThemeProvider>
    ),
  ],
};

export default meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
