import React from "react";

export type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export const Button = ({ className, ...htmlProps }: ButtonProps) => {
  return (
    <button
      className={`${className ?? ""} bg-green-600 hover:bg-[#1c3e35] text-white text-[16px] py-4 px-10 rounded-lg`}
      {...htmlProps}
    />
  );
};
