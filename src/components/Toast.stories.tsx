import { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";
import { CheckCircledIcon } from "@radix-ui/react-icons";
const meta: Meta<typeof Toast> = {
  component: Toast,
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    title: "Message Sent!",
    icon: <CheckCircledIcon className="w-[24px] h-[24px]" />,
    children: "Thanks for completing the form. We'll be in touch soon.",
  },
};
