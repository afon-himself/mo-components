import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../components/Button/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'normal', 'medium', 'large'],
      control: 'select'
    },
    type: {
      options: ['primary', 'secondary', 'tertiary'],
      control: 'select'
    },
    disabled: {
      control: 'boolean'
    },
    onClick: {
      action: 'clicked'
    }
  }
} as Meta;

const Template: Story<ComponentProps<typeof Button>> = (args) => <Button {...args}>Example text</Button>

export const ButtonStory = Template.bind({});
ButtonStory.storyName = 'Button'
ButtonStory.args = {
  type: 'primary',
  size: 'small',
  disabled: false
}