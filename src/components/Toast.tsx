import React from "react";
import { cn } from "../lib/utils";

export interface ToastProps extends React.ComponentPropsWithoutRef<"div"> {
  icon?: React.ReactNode;
  title: string;
}

export const Toast = ({
  children,
  className,
  icon,
  title,
  ...toastProps
}: ToastProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-[auto,1fr] gap-x-[8px] gap-y-[8px]",
        "w-fit p-[24px] rounded rounded-[12px]",
        "bg-gray-900 text-white",
        className,
      )}
      {...toastProps}
    >
      {icon && <>{icon}</>}
      <span>{title}</span>
      <div className="col-span-full">{children}</div>
    </div>
  );
};
