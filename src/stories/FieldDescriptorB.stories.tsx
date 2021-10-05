import { ComponentMeta } from '@storybook/react';

import FieldDescriptorB from '../components/FieldDescriptorB/FieldDescriptorB';

export default {
  title: 'Components/FieldDescriptorB',
  component: FieldDescriptorB,
} as ComponentMeta<typeof FieldDescriptorB>;



export function Default ()
{
  return <FieldDescriptorB field='data de nascimento' value='26 de Dezembro de 1997 (22 anos)' />
}

