import { ComponentStory, ComponentMeta } from '@storybook/react';

import Paragraph from '../components/Typography/Paragraph';

export default {
  title: 'Typograph/Paragraph',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'default',
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem minus deserunt explicabo corrupti ducimus tenetur aspernatur vel excepturi praesentium ratione. Iste quae obcaecati dicta autem, fuga sapiente blanditiis dolor neque.'
}

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem minus deserunt explicabo corrupti ducimus tenetur aspernatur vel excepturi praesentium ratione. Iste quae obcaecati dicta autem, fuga sapiente blanditiis dolor neque.'
}
