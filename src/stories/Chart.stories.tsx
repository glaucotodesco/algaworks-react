import { Story, Meta } from '@storybook/react';
import Chart, { ChartProps } from '../components/Chart/Chart';

const data = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  datasets: [
    {
      label: 'Receitas',
      data: [120, 19, 3, 5, 2, 3],
      fill: true,
      backgroundColor: '#0099FF',
      borderColor: 'transparent',
      borderWidth: 0.5,
      yAxisID: 'cashflow',
    },
    {
      label: 'Despesas',
      data: [100, 20, 10, 10, 20, 20],
      fill: true,
      backgroundColor: '#274060',
      borderColor: '#274060',
      borderWidth: 0.5,
      yAxisID: 'cashflow',
    },
  ],
};

export default {
  title: 'Components/Chart',
  component: Chart,
} as Meta;

const Template: Story<ChartProps> = (args) => <Chart {...args} />;

export const Default = Template.bind({});
Default.args = {
  data,
  title : 'Media de performace nos últimos 12 meses'
};


export const WithoutData = Template.bind({});
WithoutData.args = {
  title : 'Media de performace nos últimos 12 meses'
};
