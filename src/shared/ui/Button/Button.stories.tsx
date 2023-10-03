import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonVariant } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    variant: ButtonVariant.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    variant: ButtonVariant.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    variant: ButtonVariant.OUTLINE,
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundVariant = Template.bind({});
BackgroundVariant.args = {
    children: 'Text',
    variant: ButtonVariant.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    variant: ButtonVariant.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    variant: ButtonVariant.BACKGROUND_INVERTED,
    square: true,
};

export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    variant: ButtonVariant.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '>',
    variant: ButtonVariant.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};
