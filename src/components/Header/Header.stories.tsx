import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Header, HeaderProps } from ".";
import { Button } from "../Button";

export default {
  title: "Components/Header",
  component: Header,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story></Story>
        <div style={{ height: "500px" }}></div>
        <div style={{ height: "500px" }}></div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const pages = [
  { label: "About", path: "/about" },
  { label: "Classes", path: "/classes" },
  { label: "Schedule", path: "/schedule" },
];

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  actions: <Button>Log in</Button>,
  logo: (
    <img
      alt="header logo"
      style={{ height: "40px" }}
      src="https://cdn.icon-icons.com/icons2/2148/PNG/512/storybook_icon_131971.png"
    />
  ),
  pages,
};
