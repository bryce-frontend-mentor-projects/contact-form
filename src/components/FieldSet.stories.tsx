import { Meta, StoryObj } from "@storybook/react";

import { FieldSet as FieldSetComponent } from "./FieldSet";
import { Input } from "./Input";

const meta: Meta<typeof FieldSetComponent> = {
  component: FieldSetComponent,
};

export default meta;

type Story = StoryObj<typeof FieldSetComponent>;

export const Default: Story = {
  args: {
    label: "Field Label",
    isRequired: false,
    errorMessage: "",
    children: <Input />,
  },
};
