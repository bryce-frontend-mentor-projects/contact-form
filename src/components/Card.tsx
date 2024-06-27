import React from "react";

export type CardProps = React.ComponentPropsWithoutRef<"div">;

export const Card = ({ className, ...htmlProps }: CardProps) => {
  return (
    <div {...htmlProps} className={`${className} bg-white rounded-2xl p-10`} />
  );
};
