import { Story, Meta } from '@storybook/react';
import ImageUpload, { ImageUploadProps } from '../components/ImageUpload';

export default {
  title: 'Components/ImageUpdload',
  component: ImageUpload
} as Meta;

const Template: Story<ImageUploadProps> = (args) => <ImageUpload {...args} />;

export const Default = Template.bind({})
Default.args = {
    label: 'Thumbnail do post'
}