import * as RadioGroup from "@radix-ui/react-radio-group";
import { cn } from "../lib/utils";
export interface RadioProps extends RadioGroup.RadioGroupItemProps {
  label: string;
}

export const Radio = ({ className, ...radioProps }: RadioProps) => {
  return (
    <div className="flex items-center group">
      <RadioGroup.Item
        className={cn(
          "bg-transparent border-2 border-gray-500 w-[20px] h-[20px] rounded-full outline-none cursor-default",
          "group-has-[:checked]:border-green-600",
          className,
        )}
        {...radioProps}
      >
        <RadioGroup.Indicator
          className={cn(
            "flex items-center justify-center w-full h-full relative",
            "after:content-[''] after:bg-green-600 after:rounded-full after:h-[9px] after:w-[9px]",
          )}
        />
      </RadioGroup.Item>
      <label className="pl-[10px]">{radioProps.label}</label>
    </div>
  );
};
