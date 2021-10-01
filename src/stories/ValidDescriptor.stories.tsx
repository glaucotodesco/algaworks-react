import { ComponentStory, ComponentMeta } from '@storybook/react';

import ValidDescriptor from '../components/ValueDescriptor/ValueDescriptor';

export default {
  title: 'Components/ValidDescriptor',
  component: ValidDescriptor,
} as ComponentMeta<typeof ValidDescriptor>;

const Template: ComponentStory<typeof ValidDescriptor> = (args) => <ValidDescriptor {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  description: 'ganhos do mês:',
  value: 560322.02
};


export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  description: 'ganhos do mês:',
  value: 560322.02
};


export const PrimaryCurrency = Template.bind({});
PrimaryCurrency.args = {
  variant: 'primary',
  description: 'ganhos do mês:',
  value: 560322.02,
  isCurrency: true
};

export const DefaulCurrency = Template.bind({});
DefaulCurrency.args = {
  variant: 'default',
  description: 'ganhos do mês:',
  value: 560322.02,
  isCurrency: true
};