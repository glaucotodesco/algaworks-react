import { ComponentStory, ComponentMeta } from '@storybook/react';

import ValidDescriptor from '../components/ValueDescriptor/ValueDescriptor';

export default {
  title: 'Example/ValidDescriptor',
  component: ValidDescriptor,
} as ComponentMeta<typeof ValidDescriptor>;

const Template: ComponentStory<typeof ValidDescriptor> = (args) => <ValidDescriptor {...args} />;

export const Default = Template.bind({});
Default.args = {
  description: 'Ganhos da Semana',
  value: 560322.02
};


export const Primary = Template.bind({});
Primary.args = {
  description: 'Ganhos da Semana',
  value: 560322.02
};


export const PrimaryCurrency = Template.bind({});
PrimaryCurrency.args = {
  description: 'Ganhos da Semana',
  value: 560322.02
};

export const DefaulCurrency = Template.bind({});
DefaulCurrency.args = {
  description: 'Ganhos da Semana',
  value: 560322.02
};