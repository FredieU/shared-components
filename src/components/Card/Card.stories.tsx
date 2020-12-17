import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Card, CardProps } from ".";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => (
  <Card {...args}>
    <div>Card title</div>
    <div>Card description</div>
    <button>Submit</button>
  </Card>
);

export const Default = Template.bind({});
Default.args = {};
