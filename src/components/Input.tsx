import React from "react";

export type InputProps = React.ComponentPropsWithoutRef<"input">;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...htmlProps }, ref) => {
    return (
      <input
        ref={ref}
        {...htmlProps}
        className={`${className ?? ""} border-solid border border-gray-500 hover:border-green-600 active:border-green-600 group-[invalid]:border-red-500 text-gray-900 rounded py-3 px-6`}
      />
    );
  },
);
