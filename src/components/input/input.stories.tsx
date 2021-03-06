import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from './input';

export default {
  title: 'Component/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Input',
    name: 'text',
    type: 'text',
    id: 'inputText'
};