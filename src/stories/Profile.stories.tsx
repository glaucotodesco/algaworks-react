import { ComponentStory, ComponentMeta } from '@storybook/react';

import Profile from '../components/Profile/Profile';

export default {
  title: 'Components/Profile',
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />;



export const Default = Template.bind({})
Default.args = {
 
}