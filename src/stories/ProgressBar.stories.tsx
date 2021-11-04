import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProgressBar from '../components/ProgressBar/ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {  
  type: 'primary',
  progress: 50,
  width: 260,
  title: 'JavaScript'
};

export const Secondary = Template.bind({});
Secondary.args = {  
  type: 'secondary',
  progress: 50,
  width: 260,
  title: 'JavaScript'
};
