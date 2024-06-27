import { Meta, StoryObj } from "@storybook/react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
  component: Radio,
  decorators: [
    (Story) => (
      <form>
        <RadioGroup.Root
          defaultValue="default"
          className="flex flex-col gap-2.5"
        >
          <Story />
        </RadioGroup.Root>
      </form>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    value: "default",
    label: "Checkbox",
  },
};
