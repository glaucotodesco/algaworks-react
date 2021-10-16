import { Story, Meta } from '@storybook/react';
import ProgressBar, { ProgressBarProps } from '../components/ProgressBar/ProgresseBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;


export const Default = Template.bind({});
Default.args = {
    text: 'javascript'
};

export const Alternative = Template.bind({});
Alternative.args = {
    text: 'c++'
};
