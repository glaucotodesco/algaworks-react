import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input, { InputProps } from '../components/Input/Input';

export default {
  title: 'Example/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const WithPlaceholder = Template.bind({});
  WithPlaceholder.args = {
    placeholder: 'e.g.: Jon Doe'
};

export const WithLabelAndPlaceholder = Template.bind({});
  WithLabelAndPlaceholder.args = {
    label: 'Name',
    placeholder: 'e.g.: Jon Doe'
};

export const WithLabelAndContent = Template.bind({});
  WithLabelAndContent.args = {
    label: 'Name',
    value: 'Joe Doe',
};

export const WithContent = Template.bind({});
  WithContent.args = {
      value: 'Joe Doe',
};