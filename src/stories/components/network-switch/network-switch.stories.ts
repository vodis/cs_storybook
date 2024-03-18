import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import {AppComponent} from "../../../app/app.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<AppComponent> = {
  title: 'Components/NetworkSwitchComponent',
  component: AppComponent,
  tags: ['autodocs'],
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
};

export default meta;
type Story = StoryObj<AppComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};

export const Secondary: Story = {};

export const Large: Story = {};

export const Small: Story = {};
