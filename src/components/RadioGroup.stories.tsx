import { RadioGroup } from "@radix-ui/react-radio-group";
import { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";
import { RadioSelection } from "./RadioSelection";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  decorators: [
    (Story) => (
      <form>
        <Story />
      </form>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Radio label="Default" value="default" />
        <Radio label="Comfortable" value="comfortable" />
        <Radio label="Compact" value="compact" />
      </>
    ),
  },
};

export const WithRadioSelection: Story = {
  args: {
    children: (
      <div className="flex flex-col gap-[12px]">
        <RadioSelection>
          <Radio label="Default" value="default" />
        </RadioSelection>
        <RadioSelection>
          <Radio label="Comfortable" value="comfortable" />
        </RadioSelection>
        <RadioSelection>
          <Radio label="Compact" value="compact" />
        </RadioSelection>
      </div>
    ),
    defaultValue: "default",
  },
};
