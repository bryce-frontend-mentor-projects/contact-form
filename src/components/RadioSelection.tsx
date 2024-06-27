import React from "react";
import { cn } from "../lib/utils";

export interface RadioSelectionProps
  extends React.ComponentPropsWithoutRef<"div"> {}

export const RadioSelection = ({
  children,
  className,
  ...htmlProps
}: RadioSelectionProps) => {
  return (
    <div
      className={cn(
        "border border-gray-500 rounded-lg px-[24px] py-[12px] cursor-pointer",
        "hover:border-green-600",
        "has-[:checked]:bg-green-200 has-[:checked]:border-green-600 has-[:checked]:hover:bg-white",
        className,
      )}
      {...htmlProps}
    >
      {children}
    </div>
  );
};
