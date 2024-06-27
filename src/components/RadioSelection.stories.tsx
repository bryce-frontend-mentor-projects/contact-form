import { Meta, StoryObj } from "@storybook/react";
import { RadioSelection } from "./RadioSelection";
import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";

const meta: Meta<typeof RadioSelection> = {
  component: RadioSelection,
  decorators: [
    (Story) => (
      <form>
        <RadioGroup>
          <Story />
        </RadioGroup>
      </form>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof RadioSelection>;

export const Default: Story = {
  args: {
    children: <Radio value="default" label="Default" />,
  },
};
