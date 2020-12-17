import React from "react";

export const decorators = [
  (Story) => (
    <div style={{ "font-family": "Calibri" }}>
      <Story />
    </div>
  ),
];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
};
