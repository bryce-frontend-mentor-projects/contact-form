import * as RdRadioGroup from "@radix-ui/react-radio-group";
import { cn } from "../lib/utils";
export interface RadioGroupProps extends RdRadioGroup.RadioGroupProps {}

export const RadioGroup = ({
  children,
  className,
  ...radioGroupProps
}: RadioGroupProps) => {
  return (
    <RdRadioGroup.Root className={cn(className)} {...radioGroupProps}>
      {children}
    </RdRadioGroup.Root>
  );
};
