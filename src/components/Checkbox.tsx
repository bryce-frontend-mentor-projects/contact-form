import * as RdCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "../lib/utils";

export type CheckboxProps = RdCheckbox.CheckboxProps & { label: string };

export const Checkbox = ({
  className,
  label,
  ...checkboxProps
}: CheckboxProps) => {
  return (
    <>
      <div className="group flex items-center">
        <RdCheckbox.Root
          className={cn(
            "flex h-[25px] w-[25px] appearance-none items-center justify-center",
            "rounded-[4px] border border-2 rounded border-gray-500",
            "aria-checked:bg-green-600 aria-checked:border-green-600 aria-checked:text-white",
            className,
          )}
          {...checkboxProps}
          id="c1"
        >
          <RdCheckbox.Indicator className="text-violet11">
            <CheckIcon className="w-[18px] h-[18px]" />
          </RdCheckbox.Indicator>
        </RdCheckbox.Root>
        <label className="pl-[15px]">{label}</label>
      </div>
    </>
  );
};
