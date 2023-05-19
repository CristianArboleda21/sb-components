import type { Meta, StoryFn } from "@storybook/react";
import { MyLabel } from '../../components/MyLabel';


export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color: { control: 'select' },
        fontColor: { control: 'color' },
        backgroundColor: { control: 'color' },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MyLabel>

const Template: StoryFn<typeof MyLabel> = ( args ) => <MyLabel { ...args } />

export const Basic = Template.bind({});
Basic.args = {
    size:'normal',
    label:'Hello',
    allcaps: false
}
export const AllCaps = Template.bind({});
AllCaps.args ={
    size:'normal',
    allcaps: true
}

export const Secundary = Template.bind({});
Secundary.args = {
    size:'normal',
    color: 'text-secundary' // primary | secundary | tertiary
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color:'text-tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    fontColor: '#8f0988', 
    size: 'h1'
}

export const CustomBackgroudColor = Template.bind({});
CustomBackgroudColor.args = {
    fontColor: '#eeeeee',
    backgroundColor: '#000000', 
    size: 'h1'
}