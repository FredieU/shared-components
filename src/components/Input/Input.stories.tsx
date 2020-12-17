import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { FormGroup, FormGroupProps } from "../FormGroup";
import { Input, InputProps } from ".";

export default {
  title: "Components/Input",
  component: Input,
} as Meta;

const Template: Story<InputProps & FormGroupProps> = ({ errors, ...args }) => (
  <FormGroup errors={errors}>
    <Input {...args} hasErrors={!!errors} />
  </FormGroup>
);

export const Default = Template.bind({});
Default.args = {
  label: "Email",
  name: "default-input",
};

export const WithOneError = Template.bind({});
WithOneError.args = {
  ...Default.args,
  errors: ["Username is already taken"],
};

export const WithManyErrors = Template.bind({});
WithManyErrors.args = {
  ...Default.args,
  errors: [
    "Username must be at least 3 characters long",
    "Username must only contain alphanumeric characters (e.g. a-z, 0-9)",
  ],
};
